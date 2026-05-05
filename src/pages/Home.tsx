import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white">Services</h2>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white">About</h2>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white">Contact</h2>
      </section>
    </>
  );
}