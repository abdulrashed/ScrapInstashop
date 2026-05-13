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
const { URL } = require("url");

const PORT = 3001;

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") { res.writeHead(204); res.end(); return; }

    const reqUrl = new URL(req.url, "http://localhost:" + PORT);
    if (reqUrl.pathname !== "/proxy") {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Use /proxy?url=<encoded-url>");
        return;
    }

    const target = reqUrl.searchParams.get("url");
    if (!target) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Missing url query param");
        return;
    }

    let parsed;
    try { parsed = new URL(target); }
    catch (e) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Invalid url");
        return;
    }

    const client = parsed.protocol === "http:" ? http : https;
    const upstream = client.get(target, {
        headers: {
            "User-Agent": "Mozilla/5.0 InstaScrap-LocalProxy",
            "Accept": "image/*,*/*;q=0.8",
            "Referer": parsed.origin
        }
    }, upstreamRes => {
        // Follow one redirect if present
        if ([301, 302, 303, 307, 308].includes(upstreamRes.statusCode) && upstreamRes.headers.location) {
            const redir = new URL(upstreamRes.headers.location, target).toString();
            const redirClient = redir.startsWith("https:") ? https : http;
            redirClient.get(redir, redirRes => {
                res.writeHead(redirRes.statusCode, {
                    "Content-Type": redirRes.headers["content-type"] || "application/octet-stream",
                    "Access-Control-Allow-Origin": "*"
                });
                redirRes.pipe(res);
            }).on("error", err => { res.writeHead(502); res.end("redirect fail: " + err.message); });
            return;
        }
        res.writeHead(upstreamRes.statusCode, {
            "Content-Type": upstreamRes.headers["content-type"] || "application/octet-stream",
            "Access-Control-Allow-Origin": "*"
        });
        upstreamRes.pipe(res);
    });

    upstream.on("error", err => {
        res.writeHead(502, { "Content-Type": "text/plain" });
        res.end("upstream fail: " + err.message);
    });

    upstream.setTimeout(15000, () => { upstream.destroy(new Error("timeout")); });
});

server.listen(PORT, "127.0.0.1", () => {
    console.log("Image proxy running on http://localhost:" + PORT + "/proxy?url=...");
    console.log("Leave this window open while using item_fetch.html");
});
