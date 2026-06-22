// Local image proxy for InstaScrap
// Run with:  node image-proxy-server.js
// Then leave it running in the background while you use item_fetch.html.
//
// Usage from browser:
//   fetch("http://localhost:3001/proxy?url=" + encodeURIComponent(imageUrl))
//
// Adds Access-Control-Allow-Origin: * so the browser is happy.
// No external dependencies — uses Node's built-in http / https modules only.

const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = 3001;

const staticFiles = {
    "/": ["item_fetch.html", "text/html; charset=utf-8"],
    "/item_fetch.html": ["item_fetch.html", "text/html; charset=utf-8"],
    "/item_fetch.js": ["item_fetch.js", "application/javascript; charset=utf-8"]
};

function sendError(res, status, message) {
    if (res.headersSent) {
        res.destroy();
        return;
    }
    res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(message);
}

function pipeImage(target, res, redirectsLeft = 5) {
    let parsed;
    try { parsed = new URL(target); }
    catch (e) { sendError(res, 400, "Invalid image URL"); return; }

    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
        sendError(res, 400, "Only HTTP and HTTPS image URLs are supported");
        return;
    }

    const client = parsed.protocol === "http:" ? http : https;
    const upstream = client.get(parsed, {
        headers: {
            "User-Agent": "Mozilla/5.0 InstaScrap-LocalProxy",
            "Accept": "image/*,*/*;q=0.8",
            "Referer": parsed.origin
        }
    }, upstreamRes => {
        if ([301, 302, 303, 307, 308].includes(upstreamRes.statusCode) && upstreamRes.headers.location) {
            upstreamRes.resume();
            if (redirectsLeft === 0) {
                sendError(res, 502, "Too many upstream redirects");
                return;
            }
            pipeImage(new URL(upstreamRes.headers.location, parsed).toString(), res, redirectsLeft - 1);
            return;
        }

        const responseHeaders = {
            "Content-Type": upstreamRes.headers["content-type"] || "application/octet-stream",
            "Access-Control-Allow-Origin": "*"
        };
        if (upstreamRes.headers["content-length"]) {
            responseHeaders["Content-Length"] = upstreamRes.headers["content-length"];
        }
        res.writeHead(upstreamRes.statusCode, responseHeaders);
        upstreamRes.pipe(res);
    });

    upstream.on("error", err => sendError(res, 502, "Upstream failed: " + err.message));
    upstream.setTimeout(30000, () => upstream.destroy(new Error("Upstream timed out")));
}

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") { res.writeHead(204); res.end(); return; }

    const reqUrl = new URL(req.url, "http://localhost:" + PORT);
    if (reqUrl.pathname === "/health") {
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({ ok: true }));
        return;
    }

    if (staticFiles[reqUrl.pathname]) {
        const [fileName, contentType] = staticFiles[reqUrl.pathname];
        fs.readFile(path.join(__dirname, fileName), (err, data) => {
            if (err) { sendError(res, 500, "Could not load " + fileName); return; }
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        });
        return;
    }

    if (reqUrl.pathname !== "/proxy") {
        sendError(res, 404, "Not found");
        return;
    }

    const target = reqUrl.searchParams.get("url");
    if (!target) {
        sendError(res, 400, "Missing url query param");
        return;
    }
    pipeImage(target, res);
});

server.listen(PORT, "127.0.0.1", () => {
    console.log("InstaScrap is ready at http://127.0.0.1:" + PORT + "/");
    console.log("Leave this window open while downloading images.");
});
