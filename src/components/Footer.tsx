import { Mail, Linkedin, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold tracking-wide">
              Schuman Security Documentation™
            </h2>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Security Documentation • Technical Writing • Compliance Support
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Navigation
            </h3>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              <a href="#home" className="transition hover:text-white/70">
                Home
              </a>
              <a href="#about" className="transition hover:text-white/70">
                About
              </a>
              <a href="#services" className="transition hover:text-white/70">
                Services
              </a>
              <a href="#projects" className="transition hover:text-white/70">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-white/70">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Connect
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-2 transition hover:text-white/70"
              >
                <Mail size={16} />
                Email
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white/70"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 transition hover:text-white/70"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          <p>© 2026 Schuman Security Documentation™</p>
          <p className="mt-1">Built with precision. Designed with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
