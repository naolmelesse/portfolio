import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsCodeSquare } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { TbDownload } from "react-icons/tb"

export default function Nav(){
    return(
        <nav className=' py-10 flex items-center justify-between w-4/5 mx-[auto] bg-white px-10 md:px-20 lg:px-30'>

        <h1 className='font-burtons text-xl' >{"</NM>"}</h1>
        <div className='invisible lg:visible flex items-center p-2  bg-[#F5F5F5] z-10 fixed left-1/3 rounded-full' >
          <div className="flex justify-center gap-2 mx-4 items-center"><BiHomeAlt2 className="text-xl"/> <Link className='hover:underline hover:underline-offset-8 decoration-purple-400 text-gray-800 text-lg' href="/">Home</Link></div> 
          <div className="flex justify-center gap-2 mx-4 items-center"><AiOutlineUser className="text-xl"/> <Link className='hover:underline hover:underline-offset-8 decoration-purple-400 text-gray-800 text-lg' href="/about">About</Link></div> 
          <div className="flex justify-center gap-2 mx-4 items-center"><BsCodeSquare className="text-xl"/> <Link className='hover:underline hover:underline-offset-8 decoration-purple-400 text-gray-800 text-lg' href="#projects">Projects</Link></div> 
          <div className="flex justify-center gap-2 mx-4 items-center"><MdWorkOutline className="text-xl"/> <Link className='hover:underline hover:underline-offset-8 decoration-purple-400 text-gray-800 text-lg' href="#experience">Experience</Link></div> 
        </div>

        <Link target="_blank" className='flex gap-1 items-center text-[#fff] bg-[#222831] transition duration-300 ease-in-out hover:bg-[#454545] px-4 py-2 rounded-lg ml-8' href="/Naol_Melesse-Resume(Modern).pdf" download="Naol_Melesse-Resume(Modern).pdf">Resume
          <TbDownload className="text-lg"/>
        </Link>
      </nav>
    )
}