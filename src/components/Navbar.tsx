import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  function toggleTheme(): void {
    theme === "dark" ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark");
    window.location.reload();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-500/20 bg-slate-950 text-white shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-lg font-bold text-emerald-400 hover:text-emerald-300"
        >
          Schuman Security Documentation
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <button
            onClick={() => scrollToSection("services")}
            className="text-slate-200 hover:text-emerald-400"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="text-slate-200 hover:text-emerald-400"
          >
            About
          </button>

          <Link
            to="/portfolio"
            className="text-slate-200 hover:text-emerald-400"
          >
            Portfolio
          </Link>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-slate-200 hover:text-emerald-400"
          >
            Contact
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md border border-emerald-500/40 p-2 text-emerald-400 hover:bg-emerald-500/10"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}