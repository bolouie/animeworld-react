# AnimeWorld React

A full-stack single-page application built with Vite + React + Tailwind CSS (frontend) and Flask + PostgreSQL (backend). Originally developed as a course project at TMU's Chang School, and designed as a reusable starter template for modern React development.

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | Vite + React + Tailwind CSS v4 |
| Backend | Flask + flask-cors |
| Database | PostgreSQL + SQLAlchemy |
| Language | JavaScript (React) / Python (Flask) |

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

---

## Project Structure

```
animeworld-react/
  client/               # Vite + React + Tailwind
    src/
      components/       # React components
      assets/           # Images
      App.jsx
      main.jsx
      index.css
    vite.config.js
  server/               # Flask API
    app.py
    requirements.txt
  README.md
```

---

## Status

🚧 In active development — June 2026

- [x] Vite + React + Tailwind scaffold
- [x] Flask server with CORS configured
- [ ] PostgreSQL database + Order model
- [ ] Multi-step order form (OrderWizard)
- [ ] POST /order endpoint
- [ ] Full page layout and styling

---

## About

Built by Bo Louie as part of CKCS145 Full Stack Developer at Toronto Metropolitan University (Chang School of Continuing Education).