# CustodyQAI Website

A Vite + React project for the CustodyQAI marketing site.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output is written to the `dist/` folder.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, click "New Project" and import the repository.
3. Vercel will auto-detect Vite. Framework Preset: Vite. Build Command: `npm run build`. Output Directory: `dist`.
4. Deploy.
5. Once deployed, go to your Vercel project → Settings → Domains → add `custodyqai.com`.
6. In GoDaddy, update the domain's DNS/nameservers as instructed by Vercel to point to Vercel's servers.
