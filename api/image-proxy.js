const ALLOWED_IMAGE_HOSTS = new Set([
    "files.instashop.com",
    "instashop.ae"
]);

function isAllowedImageUrl(value) {
    try {
        const parsed = new URL(value);
        return parsed.protocol === "https:"
            && (ALLOWED_IMAGE_HOSTS.has(parsed.hostname) || parsed.hostname.endsWith(".instashop.ae"));
    } catch (err) {
        return false;
    }
}

module.exports = async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

    if (req.method === "OPTIONS") {
        res.status(204).end();
        return;
    }

    if (req.method !== "GET") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    if (req.query.health === "1") {
        res.status(200).json({ ok: true });
        return;
    }

    const target = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;
    if (!target || !isAllowedImageUrl(target)) {
        res.status(400).json({ error: "A valid InstaShop HTTPS image URL is required" });
        return;
    }

    try {
        const upstream = await fetch(target, {
            headers: {
                "Accept": "image/*,*/*;q=0.8",
                "User-Agent": "Mozilla/5.0 ScrapInstashop-Vercel-Proxy"
            },
            redirect: "follow"
        });

        if (!upstream.ok) {
            res.status(502).json({ error: "Image server returned HTTP " + upstream.status });
            return;
        }

        const contentType = upstream.headers.get("content-type") || "application/octet-stream";
        if (!contentType.toLowerCase().startsWith("image/")) {
            res.status(502).json({ error: "Upstream response was not an image" });
            return;
        }

        const image = Buffer.from(await upstream.arrayBuffer());
        res.setHeader("Content-Type", contentType);
        res.setHeader("Content-Length", String(image.length));
        res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
        res.status(200).send(image);
    } catch (err) {
        res.status(502).json({ error: "Unable to download image", detail: err.message });
    }
};
