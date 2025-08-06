# QuickAi

QuickAi is a full-stack AI-powered platform featuring a React + Vite frontend and a Node.js (Express) backend. It offers tools for AI image generation, article writing, resume review, and more, with authentication powered by Clerk.

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Environment Variables](#3-environment-variables)
  - [4. Running Locally](#4-running-locally)
- [Deployment](#deployment)
- [Environment Variables Reference](#environment-variables-reference)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features
- ✨ AI Image Generation (multiple styles)
- ✍️ AI Article Writer
- 📝 Blog Title Generator
- 🖼️ Background/Object Removal from Images
- 📄 Resume Reviewer
- 🔒 Clerk Authentication
- 🖥️ Modern React + Vite frontend
- ☁️ Cloudinary integration for image storage
- 🧠 OpenAI integration for content generation

---

## Project Structure
```
QuickAi/
├── client/   # React + Vite frontend
│   ├── src/
│   ├── public/
│   └── ...
├── server/   # Node.js (Express) backend
│   ├── controllers/
│   ├── routes/
│   ├── configs/
│   └── ...
└── DEPLOYMENT.md
```

---

## Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/lixelamos/QuickAi.git
cd QuickAi
```

### 2. Install Dependencies
Install frontend dependencies:
```sh
cd client
npm install
```
Install backend dependencies:
```sh
cd ../server
npm install
```

### 3. Environment Variables
Copy the example environment files and fill in your secrets:
Frontend:
```sh
cp client/env.example client/.env
```
Backend:
```sh
cp server/env.example server/.env
```
Edit `.env` files and provide your Clerk, Cloudinary, OpenAI, and database credentials.

### 4. Running Locally
Start the backend:
```sh
cd server
npm start
```
Start the frontend (in a new terminal):
```sh
cd client
npm run dev
```
Frontend will be available at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is in use).

---

## Deployment
See [DEPLOYMENT.md](DEPLOYMENT.md) for a full Vercel deployment guide.

**Quick steps:**
- Deploy `server/` as a Node.js project on Vercel.
- Deploy `client/` as a Vite project on Vercel.
- Set environment variables in Vercel dashboard for both projects.
- Update CORS and API URLs as needed.

---

## Environment Variables Reference

### Frontend (`client/.env`)
- `VITE_CLERK_PUBLISHABLE_KEY` — Clerk frontend key
- `VITE_BASE_URL` — URL of your deployed backend (e.g., `https://your-backend.vercel.app`)

### Backend (`server/.env`)
- `CLERK_SECRET_KEY` — Clerk backend key
- `DATABASE_URL` — Your database connection string
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` — Cloudinary credentials
- `OPENAI_API_KEY` — OpenAI API key
- `CORS_ORIGIN` — Frontend URL for CORS (e.g., `https://your-frontend.vercel.app`)

---

## Troubleshooting
- **CORS Errors:** Ensure `CORS_ORIGIN` is set correctly in backend `.env`.
- **Authentication Issues:** Double-check Clerk keys and allowed domains.
- **API Errors:** Make sure `VITE_BASE_URL` in frontend points to the correct backend URL.
- **Build Failures:** Ensure all dependencies are installed and Node.js version matches requirements.

---

## License
This project is licensed under the MIT License.

---

If you need further help, check the [DEPLOYMENT.md](DEPLOYMENT.md) or open an issue!
