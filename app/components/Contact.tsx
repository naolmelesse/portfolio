'use client'
import { useState } from "react";

export default function Contact(){
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

        //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("🚀 SEND MESSAGE");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    
    const handleValidation = () => {
        let tempErrors :any = {};
        let isValid = true;
    
        if (fullname.length <= 0) {
          tempErrors["fullname"] = true;
          isValid = false;
        }
        if (email.length <= 0) {
          tempErrors["email"] = true;
          isValid = false;
        }
        if (subject.length <= 0) {
          tempErrors["subject"] = true;
          isValid = false;
        }
        if (message.length <= 0) {
          tempErrors["message"] = true;
          isValid = false;
        }
    
        setErrors({ ...tempErrors });
        // console.log("errors", errors);
        return isValid;
      };
    
      const handleSubmit = async (e: any) => {
        e.preventDefault();

        let isValidForm = handleValidation();
        
        
          const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
              email: email,
              fullname: fullname,
              subject: subject,
              message: message,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });

          const { error } = await res.json();
          console.log(error)
          if (error) {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText("Message send failed ❌");
            return;
          }
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
          setButtonText("Message sent succesfully ✅");
        
    };

    return(
    <div className="flex flex-col lg:flex-row items-center justify-center w-full bg-cover text-gray-100 mx-[auto]"    style={{
        backgroundImage: `url('/space-2.jpg')`
        }}>
            <h2 className="md:text-[4rem] text-center font-semibold mb-4">Make Contact</h2>
        <div className="lg:w-1/2 p-6">
            <form onSubmit={handleSubmit}>
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
                    {buttonText}
                    </button>
                </div>
            </form>
        </div>
    </div>

    )
}