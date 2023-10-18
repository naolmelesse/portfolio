import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail
  } from "react-icons/ai";

export default function Footer(){
    return(
        <footer  className='lg:w-4/5 mx-[auto] bg-white py-5 text-gray-700 px-10 md:px-20 lg:px-30'>
            <hr />
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="flex justify-start gap-8 py-3 text-[#000] text-[1.5rem]">
                    <a className="hover:text-gray-800 transition duration-400" target="_blank" href="https://www.linkedin.com/in/naol-melesse-706585226/"><AiFillLinkedin /></a> 
                    <a className="hover:text-gray-800 transition duration-400" target="_blank" href="https://www.github.com/naolmelesse"><AiFillGithub /></a> 
                    <a className="hover:text-gray-800 transition duration-400" target="_blank" href="mailto:naolmelesse91@gmail.com"><AiFillMail /></a>
                </div>
                <p className="font-light text-[0.9rem]" >&copy;Naol Melesse 2023. Crafted with 🖤  by Naol.</p>
            </div>
        </footer>
    )
}