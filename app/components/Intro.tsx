import naol from '/public/programmer.jpg';
import Image from 'next/image';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail
} from "react-icons/ai";

export default function Intro(){
    return(
        <div className='flex flex-col items-center md:min-h-[80vh] lg:flex-row text py-14'>
            <div className="w-full lg:w-[50%]">
                <h2 className='text-center md:text-left text-3xl py-2 font-medium md:text-6xl'>Hi, I&apos;m    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#F0DE36] relative inline-block">
                    <span className="relative text-white">Naol</span>
                    </span> 👨‍🚀
                </h2>
                <h3 className=' text-xl py-2 text-center md:text-left  md:text-3xl'>Front-end Developer</h3>
                <p className='text-[0.8rem] md:text-[1.1rem] font-light py-5 md:leading-8 text-gray-800'>
                    I am a front-end developer with expertise in React.js and Next.js. I have experience in developing small to medium-level 
                     web applications using various technologies and frameworks. As a front-end developer, 
                    I love solving problems and bringing people&apos;s ideas to life. I am always finding new ways
                    to develop myself and follow current tech trends.
                </p>
                <div className="text-3xl flex justify-center lg:justify-start gap-8 py-3 text-[#040D12]">
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