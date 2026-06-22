# ScrapInstashop

## Deploy on Vercel Hobby

This deployment hosts both the static scraper page and the server-side image proxy. GitHub Pages alone cannot run the proxy.

1. Push this repository to GitHub.
2. Sign in at [vercel.com](https://vercel.com/) with GitHub.
3. Select **Add New > Project** and import `abdulrashed/ScrapInstashop`.
4. Keep **Framework Preset** as `Other` and **Root Directory** as `./`.
5. Leave the build command, output directory, install command, and environment variables empty.
6. Select the free **Hobby** plan and click **Deploy**.
7. Open `https://<your-project>.vercel.app/item_fetch.html`.

Every push to the connected GitHub branch creates a new Vercel deployment automatically.

## How image downloads work

The page calls `/api/image-proxy`, a Vercel Function in `api/image-proxy.js`. The function accepts only known InstaShop HTTPS image hosts (`*.instashop.ae` and `files.instashop.com`), downloads the image server-side, and returns it to the page for inclusion in the ZIP.

## Local use

Double-click `start-item-fetch.cmd`, keep the proxy window open, and use the page it opens.
