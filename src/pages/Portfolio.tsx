import Footer from "../components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
      {/* <Navbar /> */}

      <main className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Portfolio
          </p>

          <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Selected technical projects.
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            A collection of projects focused on support, documentation, web
            development, and practical problem-solving.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}