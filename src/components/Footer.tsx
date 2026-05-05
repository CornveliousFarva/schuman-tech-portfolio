import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm md:flex-row">
        <p>
          © {year} Schuman Security Documentation. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:greg.c.schuman@gmail.com"
            aria-label="Email"
            className="transition hover:text-emerald-600"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://github.com/cornveliousfarva"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:text-emerald-600"
          >
            <SiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/greg-schuman/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-emerald-600"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
