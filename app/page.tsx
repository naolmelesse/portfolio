import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className='lg:w-4/5 mx-[auto] bg-[#fff] px-10 md:px-20 lg:px-30'>
      <Intro/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
    )
}
