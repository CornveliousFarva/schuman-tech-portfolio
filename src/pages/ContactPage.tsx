import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />

      <main className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
              Contact
            </p>

            <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              Let’s start a clear conversation.
            </h1>

            <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Whether you’re reaching out about technical support,
              documentation, web development, or collaboration, this is the best
              place to get in touch.
            </p>
          </div>

          <section className="mb-20 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60">
              <h2 className="mb-3 text-lg font-semibold">Response Focus</h2>
              <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                I’m most interested in opportunities involving IT support,
                documentation, workflow improvement, and practical technical
                problem-solving.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60">
              <h2 className="mb-3 text-lg font-semibold">Best For</h2>
              <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                Recruiter outreach, project collaboration, portfolio feedback,
                technical writing opportunities, and support-focused roles.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60">
              <h2 className="mb-3 text-lg font-semibold">Availability</h2>
              <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                Currently open to meaningful technical opportunities where
                clarity, reliability, and communication matter.
              </p>
            </div>
          </section>

          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}