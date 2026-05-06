const projects = [
 {
  title: "Banjo Tab Builder",
  description:
    "A web app that lets musicians create, edit, and organize custom banjo tablature.",
  stack: ["React", "TypeScript", "Tailwind CSS"],
  problem:
    "Gives banjo players a simple way to write tabs digitally without needing complex music notation software.",
  github: "https://github.com/yourusername/banjo-tab-builder",
  live: "https://your-demo-link.com",
},
  {
    title: "Quiz Card App",
    description:
      "A lightweight web app for creating and reviewing custom study cards.",
    stack: ["HTML", "CSS", "JavaScript"],
    problem: "Makes studying easier through reusable digital flashcards.",
    github: "https://github.com/yourusername/project",
    live: "https://your-demo-link.com",
  },
];

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Portfolio
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A collection of projects focused on security, documentation, and web development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-[#1565C0]/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900"
          >
            <h2 className="text-2xl font-semibold text-[#1565C0] dark:text-[#1E88E5]">
              {project.title}
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-200">
                Problem solved:
              </span>{" "}
              {project.problem}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#1565C0]/30 px-3 py-1 text-xs text-[#1565C0] dark:text-[#1E88E5]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[#1565C0] hover:underline dark:text-[#1E88E5]"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[#1565C0] hover:underline dark:text-[#1E88E5]"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}