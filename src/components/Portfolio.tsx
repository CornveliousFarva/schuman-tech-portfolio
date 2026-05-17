// import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
// import screenshotCarousel from "./ScreenshotCarousel";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* <Navbar /> */}

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <section className="min-h-screen bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              Portfolio Projects
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-slate-300">
              A collection of IT, cybersecurity, documentation, and creative coding projects
              built to demonstrate troubleshooting, technical communication, automation,
              and software development skills.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// export default function Portfolio() {
//   return (
//     <div className="min-h-screen bg-neutral-950 p-10 text-white">
//       <h1>Portfolio component is rendering</h1>
//     </div>
//   );
// }