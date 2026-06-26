# MakeMyCall — BPO Solutions Website

A modern, responsive landing page for **MakeMyCall BPO Solutions** — built with React, Vite, Tailwind CSS v4, and Ant Design components.

> *Connecting People. Delivering Solutions.*

---

## Tech Stack

| Layer       | Technology                       |
|-------------|----------------------------------|
| Framework   | React 19 + Vite 8               |
| Styling     | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Components  | Ant Design 6 (Buttons, Cards, Drawer, Tooltip) |
| Icons       | `@ant-design/icons`             |
| Deployment  | GitHub Pages via `gh-pages`     |

---

## Project Structure

```
MakeMyCall/
├── public/
│   ├── mmc.png            # Logo image
│   ├── .nojekyll           # Tells GitHub Pages to skip Jekyll
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/       # Page sections (Navbar, Hero, Services, etc.)
│   │   └── ui/             # Reusable UI components (Logo, IconBox, SectionHeader)
│   ├── constants/
│   │   └── data.jsx        # All content data & icon imports
│   ├── App.jsx             # Main layout
│   ├── main.jsx            # Entry point with Ant Design ConfigProvider
│   └── index.css           # Tailwind imports & custom theme tokens
├── index.html
├── vite.config.js          # Vite config with GitHub Pages base path
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:5173/MakeMyCall/`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## Deploying to GitHub Pages

### One-time Setup

1. Create a repo named `MakeMyCall` on GitHub
2. Connect your local repo:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/MakeMyCall.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repo and set Source to **"Deploy from a branch"** → **`gh-pages`** branch → **`/ (root)`**

### Deploy

```bash
npm run deploy
```

This runs `vite build` and then publishes the `dist/` folder to the `gh-pages` branch.

Your site will be live at: `https://YOUR_USERNAME.github.io/MakeMyCall/`

---

## Sections

| Section         | Description                              |
|-----------------|------------------------------------------|
| **Navbar**      | Sticky nav with smooth scroll + mobile drawer |
| **Hero**        | Headline, CTAs, and feature cards        |
| **Industry Strip** | Industries served marquee            |
| **Services**    | 4-card grid of BPO service offerings     |
| **How It Works** | 4-step onboarding + operating model panel |
| **Why Us**      | 6-card value proposition grid            |
| **CTA**         | Dark navy call-to-action block           |
| **Footer**      | Multi-column footer with links           |

---

## License

© 2025 MakeMyCall BPO Solutions. All rights reserved.
