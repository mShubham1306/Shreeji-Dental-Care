# 🦷 Shreeji Dental Care

A modern, full-stack dental clinic web application with a token-based live queue system.

## Tech Stack

| Layer     | Technology                         |
|-----------|-------------------------------------|
| Frontend  | React + Vite + Tailwind CSS + Framer Motion |
| Backend   | Node.js + Express.js               |
| Database  | MongoDB (Mongoose ODM)             |

## Features

- 🎟️ **Live Token Queue** – Real-time appointment token system
- 📅 **Online Booking** – Patients can book appointments online
- 🚶 **Walk-in Management** – Admin adds walk-in patients
- 🛡️ **Admin Dashboard** – Manage and update appointment statuses
- 📱 **Responsive Design** – Works on mobile & desktop
- ✨ **Smooth Animations** – Framer Motion powered UI

## Project Structure

```
pr3/
├── backend/          # Express.js + MongoDB API
│   ├── server.js
│   └── package.json
└── frontend/         # React + Vite app
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── services/
    └── package.json
```

## Local Development

### Backend
```bash
cd backend
npm install
# Set MONGODB_URI in environment or use local MongoDB
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Deployment

### Backend (Render)
1. Connect GitHub repo to [Render](https://render.com)
2. Create a **Web Service** pointing to `/backend`
3. Set **Build Command**: `npm install`
4. Set **Start Command**: `node server.js`
5. Add environment variable: `MONGODB_URI` = your MongoDB Atlas connection string

### Frontend (Vercel / Netlify)
1. Connect GitHub repo to [Vercel](https://vercel.com)
2. Set **Root Directory** to `frontend`
3. Set **Build Command**: `npm run build`
4. Set **Output Directory**: `dist`
5. Add environment variable: `VITE_API_URL` = your Render backend URL

## Environment Variables

### Backend
| Variable       | Description                  |
|----------------|------------------------------|
| `MONGODB_URI`  | MongoDB Atlas connection URL |
| `PORT`         | Server port (default: 5000)  |

### Frontend
| Variable       | Description               |
|----------------|---------------------------|
| `VITE_API_URL` | Backend API base URL      |

## Clinic Info

- **Doctor**: Dr. Amit Vankar (BDS, 12+ Years Experience)
- **Location**: GF/04, Yaksh Shree Complex, Chhani Road, Vadodara - 390024
- **Phone**: +91 75673 68089
- **Timings**: 9:30 AM – 1:00 PM | 4:30 PM – 8:00 PM (Sunday Closed)
