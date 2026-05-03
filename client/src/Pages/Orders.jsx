import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Orders() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const res = await API.get("/order");
        setOrders(res.data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <div className="max-w-5xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

                {orders.length === 0 ? (
                    <p className="text-center text-gray-500 mt-10 text-lg">
                        No orders yet 📦
                    </p>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white p-5 rounded-xl shadow"
                            >
                                <div className="flex justify-between mb-3">
                                    <p className="font-semibold">
                                        Order ID: {order.id}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {new Date(order.date).toLocaleString()}
                                    </p>
                                </div>

                                {/* Items */}
                                <div className="space-y-2">
                                    {order.items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center bg-gray-50 p-2 rounded-lg"
                                        >
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-12 h-12 rounded-lg object-cover"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = "/fallback-food.jpg"
                                                    }}
                                                />

                                                <div>
                                                    <p className="font-medium">{item.name}</p>
                                                    <p className="text-sm text-gray-500">
                                                        ₹{item.price} × {item.quantity}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="font-semibold">
                                                ₹{item.price * item.quantity}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Total */}
                                <div className="mt-3 text-right font-bold text-orange-500">
                                    Total: ₹
                                    {order.items.reduce(
                                        (sum, i) => sum + i.price * i.quantity,
                                        0
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}