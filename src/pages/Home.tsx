import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">
        Schuman Security Documentation
      </h1>

      <p className="text-lg text-slate-600 dark:text-slate-400">
        Welcome to my portfolio. I focus on cybersecurity, documentation, and
        building secure, scalable systems.
      </p>

      <div className="mt-8">
        <Link
          to="/portfolio"
          className="inline-block rounded-md bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-700 transition"
        >
          View Portfolio
        </Link>
      </div>
    </section>
  );
}