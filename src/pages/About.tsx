import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Contact from "../components/Contact";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
      <Navbar />

      <main className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-20">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
              About
            </p>

            <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              Building reliable systems through clarity and thoughtful problem solving.
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-neutral-500 dark:text-neutral-400">
              I focus on practical technology solutions that prioritize clarity,
              support, documentation, and user understanding. My goal is to make
              systems easier to maintain, troubleshoot, and trust.
            </p>
          </div>

          {/* Expanded Bio */}
          <section className="mb-24 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-semibold">
                My Approach
              </h2>

              <p className="mb-6 leading-8 text-neutral-600 dark:text-neutral-400">
                I enjoy solving technical challenges by combining structured
                thinking with practical troubleshooting. Whether working on
                documentation, systems support, or frontend development, I focus
                on creating solutions that are clear and maintainable.
              </p>

              <p className="leading-8 text-neutral-600 dark:text-neutral-400">
                Technology works best when it reduces complexity instead of
                increasing it. My work is centered around simplifying systems
                and improving how people interact with them.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/60">
              <h3 className="mb-6 text-xl font-semibold">
                Core Focus Areas
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="font-medium">Technical Support</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Problem-solving and user-focused troubleshooting.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Documentation</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Creating structured, understandable technical resources.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Systems Thinking</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Improving workflows and reducing friction.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Continuous Learning</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Building skills through hands-on projects and development.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-24 border-l-2 border-emerald-400 pl-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Philosophy
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              I believe good systems are understandable, reliable, and designed
              with the user in mind. My goal is to create technical solutions
              that feel approachable rather than overwhelming.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-10 text-center dark:border-neutral-800 dark:bg-neutral-900/60">
            <h2 className="mb-4 text-3xl font-semibold">
              Let’s build something reliable.
            </h2>

            <p className="mb-6 text-neutral-500 dark:text-neutral-400">
              Interested in collaboration, technical support, or documentation work?
            </p>

            <a
              href="#contact"
              className="inline-flex rounded-xl bg-emerald-400 px-6 py-3 font-medium text-neutral-950 transition hover:bg-emerald-300"
            >
              Get In Touch
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}