# 🍽️ Zafran — A Luxury Restaurant Website

> An Odyssey of Flavour

A full-stack luxury restaurant website inspired by the aesthetics of Taj, Oberoi, and Dior. Built with the MERN stack and deployed on Vercel + Render.

🔗 **Live Demo:** [zafran-restaurant.vercel.app](https://zafran-restaurant.vercel.app)

---

## ✨ Features

- 🍛 Menu with Indian, Continental & Vegetarian categories
- 🛒 Online ordering with cart and GST calculation
- 📅 Table reservation system
- 🔐 User authentication with JWT
- 👤 Login & Register
- 📱 Responsive luxury design

---

## 🛠️ Tech Stack

### Frontend
- React 18 + Vite
- React Router DOM
- Axios
- CSS Variables + Google Fonts (Cormorant Garamond, Raleway)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs

### Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 🚀 Run Locally

### Clone the repo
```bash
git clone https://github.com/PavikaSharma15/zafran-restaurant.git
cd zafran-restaurant
```

### Start Backend
```bash
cd backend
npm install
npm run dev
```

### Start Frontend
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables
Create `backend/.env`:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 📁 Project Structure
```
zafran-restaurant/
├── frontend/
│   ├── src/
│   │   ├── components/    # Navbar, Footer
│   │   ├── pages/         # Home, Menu, Cart, Login, Reservations
│   │   └── styles/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── models/        # User, Order, Reservation
│   │   ├── routes/        # auth, menu, orders, reservations
│   │   └── middleware/    # JWT auth
│   └── package.json
└── README.md
```

---

## 🎨 Design Inspiration

Inspired by luxury brands like **Taj Hotels**, **Oberoi**, **Dior**, and **Prada**.
Color palette: Deep Black `#080808` · Champagne Gold `#c9a96e` · Ivory `#f5f0e8`

---

## 👩‍💻 Developer

**Pavika Sharma**
- GitHub: [@PavikaSharma15](https://github.com/PavikaSharma15)

---

⭐ Star this repo if you found it helpful!
