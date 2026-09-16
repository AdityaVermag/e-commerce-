# ShopEase — MERN Stack E-commerce App

Ek complete online shopping app **MongoDB + Express + React + Node.js** ke saath.

## Features
- User register/login (JWT authentication)
- Product listing, search, category filter, product detail page
- Cart (persisted in localStorage) with qty update
- Checkout with shipping address + Cash on Delivery order placement
- Order history for logged-in users
- Admin dashboard: add/edit/delete products, view & update order status
- Stock auto-decreases when order is placed

## Folder Structure
```
mern-shop/
  backend/     -> Node + Express + MongoDB API
  frontend/    -> React (Vite) app
```

## Setup — Backend

```bash
cd backend
npm install
cp .env.example .env
```

`.env` file me apna MongoDB URI aur JWT secret daal dijiye:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern_shop
JWT_SECRET=apna_random_secret_yaha_daale
CLIENT_URL=http://localhost:5173
```

MongoDB local me chal raha ho, ya [MongoDB Atlas](https://www.mongodb.com/atlas) ka free cluster use kar sakte hain (Atlas connection string `MONGO_URI` me daal dein).

Sample products aur ek admin user seed karne ke liye:
```bash
node seed.js
```
Ye admin login banayega: `admin@shop.com` / `admin123`

Server start karein:
```bash
npm run dev
```
API `http://localhost:5000` par chalega.

## Setup — Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
App `http://localhost:5173` par khulega.

## Kaise use karein
1. Backend + frontend dono start karein (do alag terminal me).
2. Browser me `http://localhost:5173` kholein.
3. `admin@shop.com` / `admin123` se login karke **Admin** tab me products add karein, ya register karke normal user ki tarah shopping karein.
4. Cart me items daalein → Checkout → order place karein → "Orders" page par status dekh sakte hain.
5. Admin dashboard se order status update kar sakte hain (Processing → Shipped → Delivered).

## Production ke liye aage kya add karein
- Real payment gateway (Razorpay / Stripe) integration
- Image upload (Cloudinary/S3) instead of image URL
- Product reviews & ratings
- Email notifications (order confirmation)
- Pagination for large product catalogs
- Deploy: backend on Render/Railway, frontend on Vercel/Netlify, DB on MongoDB Atlas

## Tech Stack
- **Frontend:** React 18, React Router, Axios, Vite
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB
- **Auth:** JWT + bcrypt password hashing
