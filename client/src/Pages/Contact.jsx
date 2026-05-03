import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-6">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <div className="bg-white shadow-md rounded-xl p-6">
          <form className="space-y-4">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Extra Info */}
        <div className="mt-6 text-gray-600">
          <p>Email: support@foodie.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
}