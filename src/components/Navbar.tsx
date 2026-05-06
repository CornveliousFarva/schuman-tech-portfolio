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
    <header className="sticky top-0 z-50 border-b border-[#1565C0]/20 bg-white/90 backdrop-blur dark:bg-[#06142E]/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-lg font-bold tracking-wide text-[#06142E] transition hover:text-[#1565C0] dark:text-white dark:hover:text-[#1E88E5]"
        >
          Schuman Security Documentation
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-5 text-sm">
          <button
            onClick={() => scrollToSection("services")}
            className="text-slate-200 transition hover:text-[#1E88E5]"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="text-slate-200 transition hover:text-[#1E88E5]"
          >
            About
          </button>

          <Link
            to="/portfolio"
            className="text-slate-200 transition hover:text-[#1E88E5]"
          >
            Portfolio
          </Link>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-slate-200 transition hover:text-[#1E88E5]"
          >
            Contact
          </button>

          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg border border-[#1565C0]/20 p-2 text-[#1565C0] transition hover:bg-[#1E88E5]-500/10"
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