import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsCodeSquare } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

export default function Nav(){
    return(
        <nav className=' py-10 flex justify-between w-4/5 mx-[auto] bg-white px-10 md:px-20 lg:px-30'>

        <h1 className='font-burtons text-xl' >{"</NM>"}</h1>
        <div className='invisible lg:visible flex items-center p-2  bg-[#F5F5F5] z-10 fixed left-[35%] rounded-full' >
          {/* <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode) } className=' cursor-pointer'/></li> */}
          <div className="flex justify-center gap-2 mx-4 items-center"><BiHomeAlt2 className="text-xl"/> <Link className='hover:underline hover:underline-offset-8 decoration-purple-400 text-gray-800 text-lg' href="/">Home</Link></div> 
          <div className="flex justify-center gap-2 mx-4 items-center"><AiOutlineUser className="text-xl"/> <Link className='hover:underline hover:underline-offset-8 decoration-purple-400 text-gray-800 text-lg' href="/about">About</Link></div> 
          <div className="flex justify-center gap-2 mx-4 items-center"><BsCodeSquare className="text-xl"/> <Link className='hover:underline hover:underline-offset-8 decoration-purple-400 text-gray-800 text-lg' href="#">Projects</Link></div> 
          <div className="flex justify-center gap-2 mx-4 items-center"><MdWorkOutline className="text-xl"/> <Link className='hover:underline hover:underline-offset-8 decoration-purple-400 text-gray-800 text-lg' href="#">Experience</Link></div> 
        </div>

        <a className=' bg-gradient-to-r from-[#4D2DB7] to-[#EC53B0] text-white px-4 py-2 rounded-md ml-8' href="/Computer Engineer CV.pdf" download="Computer Engineer CV">Resume</a>
      </nav>
    )
}