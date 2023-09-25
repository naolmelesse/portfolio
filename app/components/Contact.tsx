import { useState } from "react";

export default function Contact(){
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    
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
            <form method="POST">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-100 font-medium mb-2">Name<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="name"
                        className="w-full p-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:border-purple-800"
                        required
                        onChange={(e) => {
                            setFullname(e.target.value);
                          }}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-100 font-medium mb-2">Email<span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        name="email"  
                        className="w-full p-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:border-purple-800"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="subject"
                        className="block text-gray-100 font-medium mb-2">
                        Subject<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e) => {
                        setSubject(e.target.value);
                        }}
                        className="w-full p-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:border-purple-800"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-100 font-medium mb-2">Message<span className="text-red-500">*</span></label>
                    <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:border-purple-500 h-32 resize-none"
                    required
                    onChange={(e) => {
                        setMessage(e.target.value);
                      }}
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