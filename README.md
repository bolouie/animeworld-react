# AnimeWorld React

A full-stack single-page application built with Vite + React + Tailwind CSS (frontend) and Flask + PostgreSQL (backend). Developed as a final project for CKCS145 Full Stack Developer at TMU's Chang School of Continuing Education, and designed as a reusable teaching template for modern React development.

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | Vite + React 19 + Tailwind CSS v4 + react-icons |
| Backend | Flask + flask-cors + SendGrid |
| Database | PostgreSQL + SQLAlchemy |
| Language | JavaScript (React) / Python (Flask) |

---

## Features

- Responsive single-page layout with smooth anchor navigation
- Intersection Observer–based active link tracking in the Navbar
- Frosted glass Navbar with hamburger menu for mobile
- Hero section with AI-generated background image
- Packages section with show/hide toggle and featured package anchoring
- Multi-step order wizard (WizardOverlay) with shipping region selection, customer details, and order confirmation
- `POST /order` Flask endpoint — calculates total cost (package + shipping) and writes order to PostgreSQL
- "Coming Soon" card with email notification capture (`POST /notify`) and hologram animation
- About and Contact sections with fictitious Tokyo storefront details

---

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.9+
- PostgreSQL

### Frontend

```bash
cd client
npm install
npm run dev
```

Runs on `http://localhost:5173`

### Backend

```bash
cd server
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
python3 app.py
```

Runs on `http://localhost:5000`

Confirm it's working: `http://localhost:5000/health` should return `{"status": "ok"}`

### Environment Variables

Create a `server/.env` file (not committed — see `.gitignore`):

```
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxx
```

---

## Project Structure

```
animeworld-react/
  client/                   # Vite + React + Tailwind
    src/
      components/
        Navbar.jsx
        Hero.jsx
        Packages.jsx
        PackageCard.jsx
        ComingSoonCard.jsx
        WizardOverlay.jsx
        ShippingStep.jsx
        CustomerStep.jsx
        ConfirmStep.jsx
        About.jsx
        Contact.jsx
        Footer.jsx
      assets/               # Images
      App.jsx
      main.jsx
      index.css             # Tailwind v4 @theme design tokens
    vite.config.js
  server/                   # Flask API
    app.py
    requirements.txt
  SOURCES.md                # Image sources, AI prompts, and learning resources (submitted separately)
  README.md
```

---

## API Endpoints

| Method | Route | Description |
|---|---|---|
| `GET` | `/health` | Confirms Flask is running |
| `POST` | `/order` | Receives order JSON, calculates total, writes to DB |
| `POST` | `/notify` | Captures email for Coming Soon notification |

### POST /order — Request Body

```json
{
  "productOrdered": "deluxe",
  "shippingAddress": "123 Main Street",
  "city": "Toronto",
  "region": "NA",
  "country": "Canada"
}
```

### POST /order — Response

```json
{
  "totalCost": 52
}
```

---

## Design Tokens

Defined in `client/src/index.css` using Tailwind v4 `@theme` syntax:

| Token | Value | Usage |
|---|---|---|
| `--color-anime-orange` | `#FF793D` | Primary accent, CTAs |
| `--color-deep-purple` | `#221A29` | Background base |
| `--color-mid-purple` | `#32204A` | Card backgrounds |
| `--font-space-grotesk` | Space Grotesk | Body and headings |

---

## Status

✅ Complete — deadline June 16, 2026

- [x] Vite + React + Tailwind scaffold
- [x] Flask server with CORS configured
- [x] PostgreSQL database + Order and Notify models
- [x] Multi-step order wizard (WizardOverlay)
- [x] POST /order endpoint — tested via RESTer
- [x] POST /notify endpoint with guard clause
- [x] Full page layout and styling
- [x] Responsive design (mobile + desktop)
- [x] AI-generated package card images (Google Gemini Flash)
- [x] Coming Soon card with hologram animation

---

## About

Built by Bo Louie as part of CKCS145 Full Stack Developer at Toronto Metropolitan University (Chang School of Continuing Education).

See `SOURCES.md` for image attributions, AI generation prompts, and learning resources. Submitted separately with the project zip.
