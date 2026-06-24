# Aman Kumar — Portfolio Website

A personal portfolio website for Aman Kumar showcasing full-stack and ML projects, experience, and contact information. This repository contains a static, responsive site built with plain HTML, CSS and JavaScript and includes a downloadable PDF resume.

## Features
- Clean, responsive single-page layout with sections: About, Experience, Projects, Skills, Resume, Contact
- Light / dark theme toggle with preference saved in localStorage
- Mobile-friendly navigation (hamburger + drawer)
- Embedded/resumable PDF viewer for Curriculum Vitae
- Profile images and quick-connect links (LinkedIn, GitHub, LeetCode, email, phone)
- Simple client-side navigation powered by script.js (no build step required)

## Stack
- Languages: HTML, CSS, JavaScript
- Fonts: Google Fonts (Lato, Source Serif 4)
- Static assets included: resume PDF and profile images

## Repository contents
- index.html — main static page
- styles.css — site styles and responsive rules
- script.js — client-side behavior (navigation, theme toggle, avatar fallback)
- CV26_AmanKumar_20040827.pdf — downloadable resume
- Aman*.jpeg — avatar/profile images

## Run locally
No build tools required. From a machine with a browser:

1. Clone the repo:
   git clone https://github.com/amankr32/AmanPortfolioWebsite.git
   cd AmanPortfolioWebsite

2. Open directly:
   - Double-click `index.html` or open it in your browser.

3. Or serve locally (recommended to avoid some browser PDF/CORS quirks):
   - Python 3:
     python3 -m http.server 8000
     # then open http://localhost:8000
   - Node (http-server):
     npx http-server -c-1 .
     # then open the shown URL

## Customize
Edit `index.html` to update text, links and content. Common edits:
- Name/title — top of the page
- Social links — in sidebar/mobile strip (LinkedIn, GitHub, LeetCode, Email, Phone)
- Resume PDF — replace `CV26_AmanKumar_20040827.pdf` and update file name/links
- Projects / Experience / Skills — edit the content in the corresponding sections
- Images — replace `Aman*.jpeg` files (keep filenames or update references in `index.html`)
- Colors / layout — modify `styles.css`

Tip: Keep content semantics and aria-labels intact for accessibility.

## Deploy
Quick options to publish:
- GitHub Pages (recommended for static sites)
  1. Push the repository to GitHub (this repo is already hosted there).
  2. In repository Settings → Pages, set the source to the `main` branch and root (`/`). Save.
  3. Your site will be available at `https://amankr32.github.io/AmanPortfolioWebsite/` (or similar) after a few minutes.
- Deploy with Netlify / Vercel: drag & drop the repo or connect Git when creating a site (no build required).

## Accessibility & performance notes
- Navigation uses logical headings and landmark elements (header, aside, main, footer).
- Theme support respects user preferences via prefers-color-scheme and localStorage.
- Images have fallback initials handled in `script.js` for missing avatars.

## Attribution
The site CSS contains references to a portfolio template; if you adapted any public template, include attribution per that template's license or instructions.

## Contributing
This is a personal portfolio. If you want suggestions or help improving layout, accessibility, or deploying, open an issue or contact me directly.

## Contact
- Email: amankumar.cs27@gmail.com
- LinkedIn: https://www.linkedin.com/in/amankr32
- GitHub: https://github.com/amankr32
- Phone: +91 80840 75974

---

If you'd like, I can add this README.md to the repository (commit it to the default branch). Would you like me to create the file for you now?
