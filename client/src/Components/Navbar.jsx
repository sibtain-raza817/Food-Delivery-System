import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // back to login
  };

  return (
    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1
        className="text-2xl font-bold text-orange-500 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        🍔 Foodie
      </h1>

      {/* Menu Links */}
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <span
          onClick={() => navigate("/home")}
          className="cursor-pointer hover:text-orange-500 transition"
        >
          Home
        </span>

        <span
          onClick={() => navigate("/about")}
          className="cursor-pointer hover:text-orange-500 transition"
        >
          About
        </span>

        <span
          onClick={() => navigate("/contact")}
          className="cursor-pointer hover:text-orange-500 transition"
        >
          Contact
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Cart */}
        <button
          onClick={() => navigate("/cart")}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Cart
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}