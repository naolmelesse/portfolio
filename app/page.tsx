"use client";
import Image from 'next/image';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail
} from "react-icons/ai";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {FaDownload} from 'react-icons/fa';
import naol from '../public/naol.png';
import code from "../public/code.png";
import design from "../public/layers.png";
import consulting from "../public/update.png";
import web1 from "../public/furgo.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
   <div className={darkMode? "dark" : ""}>
      <main className=' bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between dark:text-white'>
          <h1 className='font-burtons text-xl' >{"</NM>"}</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode) } className=' cursor-pointer'/></li>
            {/* <li><a className=' bg-purple-500 text-white px-4 py-2 rounded-md ml-8' href="#">About</a></li> */}
            <li><a className=' bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md ml-8' href="/Computer Engineer CV.pdf" download="Computer Engineer CV">Resume</a></li>
            {/* <li><a className=' bg-purple-500 text-white px-4 py-2 rounded-md ml-8' href="#">Projects</a></li> */}
            {/* <li><a className=' bg-purple-500 text-white px-4 py-2 rounded-md ml-8' href="#">Experience</a></li> */}
          </ul>
        </nav>

        <div className=' text-center p-10 py-10'>
          <h2 className=' text-5xl py-2 text-purple-500 font-medium dark:text-purple-400 md:text-6xl'>Naol Melesse</h2>
          <h3 className=' text-2xl py-2 dark:text-white md:text-3xl'>Developer and designer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'>As a front-end developer, I take pleasure in designing visually appealing and easy-to-use websites.</p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
           <a target="_blank" href="https://www.linkedin.com/in/naol-melesse-706585226/"><AiFillLinkedin /></a> 
           <a target="_blank" href="https://www.github.com/naolmelesse"><AiFillGithub /></a> 
           <a target="_blank" href="mailto:naolmelesse91@gmail.com"><AiFillMail /></a>
          </div>
          <div className='mx-auto bg-gradient-to-b from-purple-500 rounded-full overflow-hidden w-50 h-50 relative mt-10 md:h-96 md:w-96'>
            <Image className=' object-cover' src={naol} alt='Profile Image'/>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="text-justify">
            <h2 className="text-3xl py-1 dark:text-white">About me</h2>
            <p className="text-md py-2 leading-8 text-gray-800 max-w-xl dark:text-gray-200">
            I am a passionate front-end web developer and designer specializing in creating visually appealing and interactive user experiences. With expertise in HTML, CSS, JavaScript, and responsive web design, I craft seamless websites that prioritize usability and accessibility. I stay up-to-date with the latest design trends and technologies to deliver innovative solutions that exceed client expectations. Let's collaborate and bring your ideas to life for engaging digital experiences.            </p>
            <p className="text-md py-2 leading-8 text-gray-800 max-w-xl dark:text-gray-200">
            If you are searching for a dedicated front-end web developer and designer who can transform your ideas into engaging digital experiences, I am ready to bring your vision to life. Let's collaborate and create an impactful online presence for your brand.</p>
          </div>
        </div>
      </section>
      <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-purple-500"> agencies </span>
              consulted for <span className="text-purple-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image alt={"image"} className="mx-auto" src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt={"image"} className="mx-auto" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt={"image"} className="mx-auto" src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Maintenance & Update</h3>
              <p className="py-2">
                Are you interested in upgrading your current project? I can
                give you tips and tricks to level it up.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            In my portfolio, you will find a diverse range of projects that highlight
             my <span className="text-purple-500">skills</span> and <span className="text-purple-500">creativity</span>. From corporate websites to e-commerce platforms,
              each project showcases my ability to combine aesthetic appeal with technical proficiency.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image alt={"image"}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image alt={"image"}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image alt={"image"}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image alt={"image"}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image alt={"image"}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image alt={"image"}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
    </main>
  
   </div>
    )
}
