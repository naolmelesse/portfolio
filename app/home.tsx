// pages/index.js
import Head from "next/head";


export default function Homer() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* <Head>
        <title>Your Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}

      {/* Navigation Bar */}
      <nav className="bg-blue-500 text-white p-4">
        <ul className="flex justify-center space-x-4">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#hire">Hire Me</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Introduction Section */}
      <section className="bg-blue-300 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h1>
        <p className="text-lg">A passionate web developer with a love for creating amazing web experiences.</p>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            I'm a full-stack web developer with expertise in front-end and back-end technologies. I enjoy solving complex problems and building user-friendly web applications.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-blue-300 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>React.js</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>SQL</li>
          </ul>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Web Developer at XYZ Company</h3>
            <p className="text-gray-600">June 2020 - Present</p>
            <p>Responsible for developing and maintaining web applications using React and Node.js.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Front-End Developer at ABC Agency</h3>
            <p className="text-gray-600">January 2018 - May 2020</p>
            <p>Designed and implemented responsive user interfaces for various client projects.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-blue-300 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          {/* Add your project cards or a project gallery here */}
        </div>
      </section>

      {/* Hire Me Section */}
      <section id="hire" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Hire Me</h2>
          <p className="text-lg">
            Ready to take your project to the next level? Contact me now, and let's make it happen!
          </p>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="bg-blue-300 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p className="text-lg">
            Feel free to reach out to me at <a href="mailto:john@example.com">john@example.com</a>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-4 text-center">
        &copy; 2023 John Doe
      </footer>
    </div>
  );
}
