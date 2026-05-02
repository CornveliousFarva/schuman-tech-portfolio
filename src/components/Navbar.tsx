import Button from "./Button";
import { Shield } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-2xl border border-slate-700 bg-slate-900">
            <Shield className="w-6 h-6 text-sky-400" />
          </div>

          <div>
            <h1 className="text-lg font-semibold tracking-tight">
              Schuman Security Documentation
            </h1>
            <p className="text-sm text-slate-400">
              Clear Systems. Stronger Security.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm text-slate-300 hover:text-sky-400 transition"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="text-sm text-slate-300 hover:text-sky-400 transition"
          >
            Portfolio
          </a>

          <a
            href="#about"
            className="text-sm text-slate-300 hover:text-sky-400 transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-300 hover:text-sky-400 transition"
          >
            Contact
          </a>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button className="rounded-2xl px-5">
            Resume
          </Button>
        </div>
      </div>
    </header>
  );
}