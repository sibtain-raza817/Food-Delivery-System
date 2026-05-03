const express = require("express");
const router = express.Router();

let cart = [];

// Get Cart
router.get("/", (req, res) => {
  res.json(cart);
});

// Add to Cart
router.post("/add", (req, res) => {
  const item = req.body;

  const existing = cart.find(i => i.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  res.json(cart);
});

// Remove from Cart
router.post("/remove", (req, res) => {
  const { id } = req.body;

  cart = cart.filter(item => item.id !== id);

  res.json(cart);
});

module.exports = router;