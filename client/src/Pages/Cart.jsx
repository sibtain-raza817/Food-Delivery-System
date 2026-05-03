import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Cart() {
    const [cart, setCart] = useState([]);

    // Fetch cart items
    const fetchCart = async () => {
        const res = await API.get("/cart");
        setCart(res.data);
    };

    useEffect(() => {
        fetchCart();
    }, []);

    // Remove item
    const handleRemove = async (id) => {
        await API.post("/cart/remove", { id });
        fetchCart();
    };

    // Calculate total
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // Place order
    const handleOrder = async () => {
        const user = JSON.parse(localStorage.getItem("user"));

        await API.post("/order", {
            user: user.email,
            cart: cart
        });

        alert("Order placed successfully!");

        setCart([]); // clear UI
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

                {cart.length === 0 ? (
                    <p className="text-center text-gray-500 mt-10 text-lg">
                        Your cart is empty 🛒
                    </p>
                ) : (
                    <>
                        {/* Items */}
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-lg object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/fallback-food.jpg"
                                            }}
                                        />

                                        <div>
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-gray-500">
                                                ₹{item.price} × {item.quantity}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="mt-6 bg-white p-4 rounded-xl shadow flex justify-between items-center">
                            <h2 className="text-lg font-bold">
                                Total: ₹{total}
                            </h2>

                            <button
                                onClick={handleOrder}
                                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                            >
                                Place Order
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}