import { useState } from "react";

export default function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
    //   const handleChange = (e: any) => {
    //       console.log(e.target);
    //     // const { name : string, value } = e.target;
    //     // setFormData({
    //     //   ...formData,
    //     //   [name]: value,
    //     // });
    //   };
    
    //   const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     // Add code to handle form submission here (e.g., sending an email or API request).
    //   };

    return(
    <div className="flex flex-col lg:flex-row items-center justify-center w-full bg-cover text-gray-100 mx-[auto]"    style={{
        backgroundImage: `url('/space-2.jpg')`
        }}>
            <h2 className="md:text-[4rem] text-center font-semibold mb-4">Make Contact</h2>
        <div className="lg:w-1/2 p-6">
            <form action="mailto:naolmelesse91@gmail.com" method="POST">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-100 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full p-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:border-purple-800"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-100 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"  
                        className="w-full p-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:border-purple-800"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-100 font-medium mb-2">Message</label>
                    <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:border-purple-500 h-32 resize-none"
                    required
                    />
                </div>
                <div className="text-center">
                    <button
                    type="submit"
                    className="bg-transparent backdrop-blur border text-white py-2 px-4 rounded hover:backdrop-blur-lg transition duration-300"
                    >
                    🚀 SEND MESSAGE
                    </button>
                </div>
            </form>
        </div>
    </div>

    )
}