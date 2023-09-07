"use client";
import Nav from "./components/Nav";
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className='w-4/5 mx-[auto] bg-white px-10 md:px-20 lg:px-30'>
      <Nav/>
      <Intro/>
      {/* <About/> */}
      <Projects/>
      <Contact/>
    </main>
    )
}
