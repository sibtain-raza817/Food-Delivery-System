import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
    const [menu, setMenu] = useState([]);
    const navigate = useNavigate();

    // Protect route
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) navigate("/");
    }, [navigate]);

    // Fetch menu
    useEffect(() => {
        const fetchMenu = async () => {
            const res = await API.get("/menu");
            setMenu(res.data);
        };
        fetchMenu();
    }, []);

    // Add to cart
    const handleAddToCart = async (item) => {
        await API.post("/cart/add", item);
        alert("Added to cart");
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navbar */}
            <Navbar />

            {/* Title */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 text-center">
                <h2 className="text-3xl font-bold mb-2">Explore Delicious Food</h2>
                <p className="text-gray-600">Choose your favorite meal</p>
            </div>

            {/* Food Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {menu.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition duration-300 p-4"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-40 object-cover rounded-lg mb-3"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/fallback-food.jpg"
                            }}
                        />

                        {/* Name */}
                        <h3 className="text-lg font-semibold">{item.name}</h3>

                        {/* Price */}
                        <p className="text-orange-500 font-bold">₹{item.price}</p>

                        {/* Button */}
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200 active:scale-95"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}