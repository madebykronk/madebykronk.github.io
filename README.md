# madebykronk.github.io

Personal portfolio (Next.js, static export, GitHub Pages).

## Run on localhost

From the repo root:

```bash
npm install
npm run dev
```

Open the URL Next prints (usually **http://localhost:3000**). If that port is busy, Next picks another (for example 3001) and shows it in the terminal.

## Update the live website

The site at **https://madebykronk.github.io** is deployed by **GitHub Actions** when you push to **`main`** or **`master`**. The workflow runs `npm ci` and **`npm run build`**, then publishes the **`out`** folder to Pages.

1. Run **`npm run build`** locally to confirm the project builds (same command CI uses). Fix any errors before pushing.
2. Commit your changes and **push** to `main` (or `master`).
3. In the GitHub repo, check **Actions** → **Deploy to GitHub Pages** and wait for a green run.

`npm run build` on your machine does not upload the site by itself; pushing a successful build is what updates GitHub Pages (unless you change your deploy setup).
