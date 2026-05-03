const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const menuRoutes = require("./routes/menuRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes"); 

app.use("/api/menu", menuRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes); 
app.use("/api/order", orderRoutes); 

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server (ALWAYS LAST)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});