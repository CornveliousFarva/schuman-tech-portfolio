import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}