const express = require("express");
const router = express.Router();

let orders = [];

// Place Order
router.post("/", (req, res) => {
  const { cart, user } = req.body;

  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const newOrder = {
    id: Date.now(),
    items: cart,
    user: user || "Guest",
    date: new Date()
  };

  orders.push(newOrder);

  res.json({
    message: "Order placed successfully",
    order: newOrder
  });
});

// Get Orders
router.get("/", (req, res) => {
  res.json(orders);
});

module.exports = router;