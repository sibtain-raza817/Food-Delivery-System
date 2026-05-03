import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">
          About Us
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Welcome to <span className="font-semibold">Foodie</span>, your
          one-stop solution for ordering delicious meals online. Our platform
          is designed to provide a seamless food ordering experience with a
          modern and user-friendly interface.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          This project demonstrates a full-stack application using React,
          Tailwind CSS, and Node.js. Users can browse menus, manage their
          cart, and place orders efficiently.
        </p>

        <div className="bg-white shadow-md rounded-xl p-6 mt-6">
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>User authentication (Login / Signup)</li>
            <li>Browse food menu</li>
            <li>Add and remove items from cart</li>
            <li>Place orders easily</li>
          </ul>
        </div>
      </div>
    </div>
  );
}