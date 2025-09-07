# Pinnacle Bistro – Restaurant Website

A colorful, animated multi‑page restaurant site with menus, reservations, and events.
Built for your Pinnacle Labs internship project.

## Features
- 🎠 Full‑width hero carousel with autoplay, dots, and arrows
- 🧭 Sticky glassmorphism navbar (mobile hamburger)
- 🧾 Menu with category filter + live search (loads from `data/menu.json` with fallback)
- 🪑 Reservations form with validation and localStorage "My bookings" list
- 🎷 Events grid loading from `data/events.json`
- ✨ Subtle CSS animations (rise on scroll, gradient headline, buttons)
- ♿ Accessible structure: semantic HTML, labels, alt text, focusable controls
- 📱 Fully responsive layout

## Project Structure
```
pinnacle-restaurant-site/
  index.html
  menu.html
  reservations.html
  events.html
  about.html
  contact.html
  assets/
    css/styles.css
    js/{main.js, carousel.js, menu.js, reservations.js, events.js}
    images/{logo.svg, hero1.svg, hero2.svg, hero3.svg, dish1.svg, dish2.svg, dish3.svg, event1.svg, event2.svg}
  data/
    menu.json
    events.json
```

## How to Run (2 options)

### Option A — Quick Start (VS Code Live Server)
1. Open this folder in VS Code.
2. Right click `index.html` → **Open with Live Server**.

### Option B — Simple Local Server (no installs)
Use Python's built‑in server:
```bash
cd pinnacle-restaurant-site
# Python 3
python3 -m http.server 5500
# or Windows
py -m http.server 5500
```
Then open http://localhost:5500 in your browser.

> Note: Loading `data/*.json` with `file://` won't work due to browser restrictions, so use a local server (above).

## Customize
- Update `data/menu.json` and `data/events.json` to change content.
- Replace images in `assets/images` with your photos (keep the same filenames or update paths).
- Edit theme colors in `assets/css/styles.css` under `:root`.

## Deploy
- Host the folder on Netlify, Vercel, or any static web host. No backend required.
- If you later need a real backend for reservations, add an API and swap the localStorage code in `assets/js/reservations.js` with `fetch('/api/reservations')` calls.

---

© 2025 Pinnacle Bistro · For educational/demo use.
