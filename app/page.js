import Projects from './components/Projects';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
export default function HomePage() {
  return (
    <section className="flex flex-col flex-center w-full">
      <Navbar />

      <h1>Professional Project</h1>
      <div id="projects" className="flex flex-col flex-center w-full">
        <h2>Projects</h2>
        <Projects></Projects>
      </div>

      <div id="experience" className="flex flex-col flex-center w-full">
        <h2>Experience</h2>
        <Experience></Experience>
      </div>
      <div id="about" className="mt-6 flex flex-col flex-center w-full">
        <h2>About</h2>
      </div>
    </section>
  );
}
