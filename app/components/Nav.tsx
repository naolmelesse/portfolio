export default function Nav(){
    return(
        <nav className='static py-10 mb-12 flex justify-between '>
        <h1 className='font-burtons text-xl' >{"</NM>"}</h1>

        <ul className='flex items-center'>
          {/* <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode) } className=' cursor-pointer'/></li> */}
          <li><a className=' px-4 py-2 text-gray-800 text-xl ml-8' href="#">About</a></li>
          <li><a className=' px-4 py-2 text-gray-800 text-xl ml-8' href="#">Projects</a></li>
          <li><a className=' px-4 py-2 text-gray-800 text-xl ml-8' href="#">Experience</a></li>
        </ul>

        <a className=' bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md ml-8' href="/Computer Engineer CV.pdf" download="Computer Engineer CV">Resume</a>
      </nav>
    )
}