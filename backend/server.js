import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // it allows us to accept JSON data in the body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// console.log(process.env.MONGO_URI);
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});

//----

// import express from "express";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import { connectDB } from "./config/db.js";
// import productRoutes from "./routes/product.route.js";

// // Setup __dirname in ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Load .env file from same directory
// dotenv.config({ path: path.resolve(__dirname, ".env") });

// // Debug print to confirm .env is working
// console.log("DEBUG MONGO_URI:", process.env.MONGO_URI);

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware to parse JSON
// app.use(express.json());

// // API Routes
// app.use("/api/products", productRoutes);

// // Serve frontend in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   // Catch-all route (avoid path-to-regexp error)
// app.get(/^\/(?!api).*/, (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
// });
// }

// // Start server
// app.listen(PORT, "0.0.0.0", () => {
//   connectDB();
//   console.log("✅ Server started on port " + PORT);
// });
