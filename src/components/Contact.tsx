import { Github, Linkedin, Mail, FileText } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: Github,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 px-6 py-24 text-neutral-100">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Contact
          </p>

          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-5xl">
            Let’s build something reliable.
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-neutral-400">
            Whether you’re looking for technical support, documentation, or
            collaboration, I’m open to discussing opportunities where clear
            systems and thoughtful problem-solving matter.
          </p>

          <div className="mb-8 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            Currently open to opportunities
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 text-neutral-300 transition hover:border-emerald-400/60 hover:bg-neutral-900 hover:text-white"
              >
                <Icon size={20} className="text-emerald-400" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-lg">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-emerald-400"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-emerald-400"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Tell me what you’d like to discuss..."
              className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-emerald-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-400 px-5 py-3 font-medium text-neutral-950 transition hover:bg-emerald-300"
          >
            Send Message
          </button>

          <p className="mt-4 text-center text-sm text-neutral-500">
            I believe good systems start with good communication.
          </p>
        </form>
      </div>
    </section>
  );
}