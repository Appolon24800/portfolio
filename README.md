# portfolio

My personal site, live at [appolon.dev](https://appolon.dev). Built with Next.js and Tailwind CSS.

## Dev

```bash
npm install
npm run dev
```

## Docker

```bash
docker build -t portfolio .
docker run -p 5555:5555 portfolio
```

Pushing to `main` triggers a GitHub Actions workflow that builds the image and publishes it to `ghcr.io/appolon24800/portfolio`.
