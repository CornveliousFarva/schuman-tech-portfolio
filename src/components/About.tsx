const focusAreas = [
  {
    title: "Technical Support",
    description:
      "Troubleshooting systems, resolving user issues, and improving reliability.",
    focus:
      "Currently expanding workflow automation and ticketing efficiency.",
  },
  {
    title: "Documentation",
    description:
      "Creating structured guides, technical processes, and user-friendly resources.",
    focus:
      "Focused on building cleaner documentation systems that are easy to follow.",
  },
  {
    title: "Networking & Systems",
    description:
      "Understanding infrastructure, connectivity, diagnostics, and system behavior.",
    focus:
      "Learning deeper network troubleshooting and security fundamentals.",
  },
  {
    title: "Development & Learning",
    description:
      "Building projects that connect IT support, documentation, and web technology.",
    focus:
      "Currently developing full-stack portfolio features and backend systems.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            About
          </p>

          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-5xl">
            Building reliable systems through clarity and simplicity.
          </h2>

          <p className="text-lg leading-8 text-neutral-400">
            I’m Gregory Schuman, a technology-focused professional interested in
            IT support, technical documentation, networking, and system
            troubleshooting. I enjoy turning complex technical problems into
            clear, practical solutions that improve reliability and user
            experience.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition hover:border-emerald-400/60 hover:bg-neutral-900"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">
                {area.title}
              </h3>

              <p className="mb-5 leading-7 text-neutral-400">
                {area.description}
              </p>

              <p className="border-l-2 border-emerald-400 pl-4 text-sm leading-6 text-neutral-300">
                {area.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}