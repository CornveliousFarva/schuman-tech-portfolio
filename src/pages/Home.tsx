import Hero from "../components/Hero";
// import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About";
const services = [
  {
    title: "Security Documentation",
    description:
      "Clear, organized documentation for security policies, procedures, controls, and internal technical workflows.",
  },
  {
    title: "Technical Writing",
    description:
      "User-friendly guides, SOPs, knowledge base articles, onboarding docs, and process documentation.",
  },
  {
    title: "Cybersecurity Support",
    description:
      "Support with security awareness, risk documentation, compliance preparation, and secure process design.",
  },
];

export default function Home() {
  return (
    <>
      {<Hero />}

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Services
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Practical documentation and security support for teams that need clarity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-[#1565C0]/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold text-[#1565C0] dark:text-[#1E88E5]">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <About />

      <Contact />

    </>
  );
}