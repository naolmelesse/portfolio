import Image from "next/image";
import aboutMe from "/public/about_me.jpg";
export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white w-4/5 mx-[auto] bg-white px-10 md:px-20 lg:px-30 text py-24" >
      <div className="w-1/2">
        <h2 className=' text-3xl py-2 font-medium md:text-6xl'>About Me</h2>
        <p className="text-md md:text-lg  font-light py-5 leading-8 text-zinc-600 ">
          I am a front-end web developer specializing in creating visually appealing and interactive user experiences. With expertise in HTML, CSS, JavaScript, and responsive web design, I craft seamless websites that prioritize usability and accessibility. I stay up-to-date with the latest design trends and technologies to deliver innovative solutions that exceed client expectations. Let&apos;s collaborate and bring your ideas to life for engaging digital experiences.            </p>
        <p className="text-md md:text-lg font-light py-5 leading-8 text-zinc-600 "> If you are searching for a dedicated front-end web developer who can transform your ideas into engaging digital experiences, I am ready to bring your vision to life. Let&apos;s collaborate and create an impactful online presence for your brand.</p>
      </div>
      <div className='mx-auto overflow-hidden w-50 h-50 relative mt-10 md:h-96 md:w-96'>
        <Image className=' object-cover' src={aboutMe} alt='Programmer drinking coffee with a laptop'/>
      </div>
    </div>
  )
}