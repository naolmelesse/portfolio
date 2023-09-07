import { useState } from "react";

export default function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add code to handle form submission here (e.g., sending an email or API request).
      };

    return(
    <div className="w-2/5 mx-[auto] my-2">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl text-gray-800 font-semibold mb-4">🚀 Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-800"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-800"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32 resize-none"
                    required
                    />
                </div>
                <div className="text-center">
                    <button
                    type="submit"
                    className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300"
                    >
                    Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>

    )
}