import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
        {/* Navigation */}
      <Navbar />
         {/* Hero Section */}
      <Hero />
    {/* Services Section */}
      <Services />
      {/* Portfolio Section */}
      <Portfolio />
      {/* About Section */}
      <About />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </main>
  );
}
