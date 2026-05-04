import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const theme = useTheme();

  function toggleTheme(): void {
    theme.toggle();
  }

  return (
    <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-bold text-slate-900 dark:text-white"
        >
          Schuman Security Documentation
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <a href="/#services" className="text-slate-700 hover:text-emerald-600 dark:text-slate-300">
            Services
          </a>

          <a href="/#about" className="text-slate-700 hover:text-emerald-600 dark:text-slate-300">
            About
          </a>

          <Link to="/portfolio" className="text-slate-700 hover:text-emerald-600 dark:text-slate-300">
            Portfolio
          </Link>

          <a href="/#contact" className="text-slate-700 hover:text-emerald-600 dark:text-slate-300">
            Contact
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md border border-slate-300 p-2 text-slate-900 dark:border-slate-700 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}