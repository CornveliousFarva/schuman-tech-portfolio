export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 px-6 py-28 text-neutral-100 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            Available for IT Support • Documentation • Technical Projects
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-400">
            Gregory Schuman™
          </p>

          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Clear systems. Reliable support. Thoughtful technical solutions.
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-neutral-400">
            I am Greg Schuman, focused on IT support, technical documentation,
            networking, and practical web solutions that make technology easier
            to understand and use.
          </p>

          <div className="mb-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-400 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-emerald-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-emerald-400/60 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-neutral-500">
            <span>Technical Support</span>
            <span>•</span>
            <span>Documentation</span>
            <span>•</span>
            <span>Networking</span>
            <span>•</span>
            <span>Systems Thinking</span>
          </div>
        </div>
      </div>
    </section>
  );
}