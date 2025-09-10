# Bantam Goalie Trainer (Mobile Web App)

Mobile-first React app for a 5-day Bantam goalie off-ice program with integrated hand–eye drills.

## Quickstart

```bash
# Install
npm install

# Run locally
npm run dev

# Build for production
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a **new GitHub repo**.
2. Go to **vercel.com → Add New → Project → Import Git Repository**.
3. Select this repo. Vercel should detect **Vite** automatically.
4. Build Command: `npm run build` • Output Directory: `dist`
5. Click **Deploy**.

## Images / GIFs

Replace image placeholders in `public/img` with your own photos or GIFs.
Update file names in `src/App.jsx` if you change any paths.

## Folder Structure

- `src/App.jsx` — the training app
- `src/main.jsx` — React entry
- `src/index.css` — Tailwind styles
- `public/img` — exercise images
- `index.html` — Vite entry
- `vercel.json` — deploy config
