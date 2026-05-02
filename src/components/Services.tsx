const services = [
  {
    title: "Technical Support",
    description:
      "Troubleshooting hardware, software, user access, and day-to-day system issues with patience and clarity.",
  },
  {
    title: "Documentation",
    description:
      "Creating clean guides, SOPs, knowledge base articles, and troubleshooting documentation that people can actually follow.",
  },
  {
    title: "Web Development",
    description:
      "Building clean, responsive websites using React, TypeScript, Tailwind, and modern frontend practices.",
  },
  {
    title: "Workflow Improvement",
    description:
      "Identifying friction in technical processes and improving how systems, tickets, and information flow.",
  },
  {
    title: "Networking & Security",
    description:
      "Supporting device setup, connectivity troubleshooting, network basics, and security-aware practices.",
  },
  {
    title: "User-Focused Problem Solving",
    description:
      "Helping users feel supported by translating technical issues into practical, understandable solutions.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-neutral-950 px-6 py-24 text-neutral-100"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Services
          </p>

          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-5xl">
            Practical technical support built around clarity and reliability.
          </h2>

          <p className="text-lg leading-8 text-neutral-400">
            I focus on solving technical problems through support,
            documentation, workflow improvement, and user-centered systems that
            are easy to understand and maintain.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition duration-300 hover:border-emerald-400/50 hover:bg-neutral-900"
            >
              <div className="mb-5 h-1 w-12 rounded-full bg-emerald-400 transition-all duration-300 group-hover:w-20" />

              <h3 className="mb-4 text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="leading-7 text-neutral-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-500">
            Need help making something work better?
          </p>

          <a
            href="#contact"
            className="mt-3 inline-block text-emerald-400 transition hover:text-emerald-300"
          >
            Let’s connect →
          </a>
        </div>
      </div>
    </section>
  );
}