import naol from '/public/programmer.jpg';
import Image from 'next/image';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail
} from "react-icons/ai";

export default function Intro(){
    return(
        <div className='  lg:flex text py-10'>
            <div className="w-[50%]">
                <h2 className=' text-5xl py-2 text-purple-500 font-medium md:text-6xl'>Hi, I'm Naol 👀</h2>
                <h3 className=' text-2xl py-2  md:text-3xl'>Front-end Developer</h3>
                <p className='text-md font-light py-5 leading-8 text-gray-800'>
                    I am a front-end developer with expertise in React.js and Next.js.I have also 
                    worked with Node.js. I have experience in developing medium to enterprise-level
                    web applications using various technologies and frameworks. As a front-end developer, 
                    I love solving problems and bringing people's ideas to life. I am always finding new ways
                    to develop myself and follow current tech trends.
                </p>
                <div className="text-3xl flex justify-start gap-8 py-3 text-gray-600">
                    <a className="hover:text-gray-800 transition duration-400" target="_blank" href="https://www.linkedin.com/in/naol-melesse-706585226/"><AiFillLinkedin /></a> 
                    <a className="hover:text-gray-800 transition duration-400" target="_blank" href="https://www.github.com/naolmelesse"><AiFillGithub /></a> 
                    <a className="hover:text-gray-800 transition duration-400" target="_blank" href="mailto:naolmelesse91@gmail.com"><AiFillMail /></a>
                </div>
            </div>
            <div className='mx-auto overflow-hidden w-50 h-50 relative mt-10 md:h-96 md:w-96'>
                <Image className=' object-cover' src={naol} alt='Programmer drinking coffee with a laptop'/>
            </div>
      </div>
    )
}