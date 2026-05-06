import { Link, useNavigate, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If already on homepage, just scroll
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });

      return;
    }

    // Otherwise navigate home first
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-500/20 bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-lg font-bold text-emerald-400 transition hover:text-emerald-300"
        >
          Schuman Security Documentation
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-5 text-sm">
          <button
            onClick={() => scrollToSection("services")}
            className="text-slate-200 transition hover:text-emerald-400"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="text-slate-200 transition hover:text-emerald-400"
          >
            About
          </button>

          <Link
            to="/portfolio"
            className="text-slate-200 transition hover:text-emerald-400"
          >
            Portfolio
          </Link>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-slate-200 transition hover:text-emerald-400"
          >
            Contact
          </button>

          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg border border-emerald-500/30 p-2 text-emerald-400 transition hover:bg-emerald-500/10"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}