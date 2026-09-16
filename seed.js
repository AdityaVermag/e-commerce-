// Run with: node seed.js
// Populates the database with a sample admin user and sample products.
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import User from "./models/User.js";
import Product from "./models/Product.js";

dotenv.config();
connectDB();

const sampleProducts = [
  {
    name: "Wireless Bluetooth Headphones",
    description: "Over-ear headphones with noise cancellation and 30-hour battery life.",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    stock: 25,
  },
  {
    name: "Men's Running Shoes",
    description: "Lightweight breathable running shoes with cushioned sole.",
    price: 1899,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    stock: 40,
  },
  {
    name: "Smart Watch",
    description: "Fitness tracker smart watch with heart rate monitor and GPS.",
    price: 3499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    stock: 15,
  },
  {
    name: "Cotton Casual Shirt",
    description: "100% cotton slim-fit casual shirt, available in multiple colors.",
    price: 799,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
    stock: 60,
  },
  {
    name: "Stainless Steel Water Bottle",
    description: "Insulated water bottle that keeps drinks cold for 24 hours.",
    price: 499,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    stock: 100,
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany({ email: "admin@shop.com" });

    await User.create({
      name: "Admin",
      email: "admin@shop.com",
      password: "admin123",
      isAdmin: true,
    });

    await Product.insertMany(sampleProducts);

    console.log("Sample data imported successfully!");
    console.log("Admin login -> email: admin@shop.com | password: admin123");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
