import Navbar from "./Navbar";
import HeroSection from "./Hero";
import AboutSection from "./About";
import ContactSection from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />

        {/* Future Sections */}
        {/* <ProjectsSection /> */}
        {/* <SkillsSection /> */}
        {/* <ExperienceSection /> */}

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}