import ScreenshotCarousel from './ScreenshotCarousel'

const screenshots = [
  'public/images/pong/start-screen.png',
  'public/images/pong/pong-classic.png',
  'public/images/pong/australian-open.png',
  'public/images/pong/french-open.png',
  'public/images/pong/wimbledon.png',
  'public/images/pong/win-screen.png',
  'public/images/pong/us-open.png',
]

export default function ProjectCard({ project }: { project?: { github?: string } }) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-6 shadow-xl">
      <h2 className="mb-2 text-2xl font-bold text-white">
        Grand Slam Pong
      </h2>

      <p className="mb-4 text-zinc-400">
        A customizable tennis-inspired arcade game built
        with Python and Pygame.
      </p>

      <ScreenshotCarousel images={screenshots} />
        {project?.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950"
  >
    GitHub
  </a>
)}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded bg-zinc-800 px-3 py-1 text-sm text-white">
          Python
        </span>

        <span className="rounded bg-zinc-800 px-3 py-1 text-sm text-white">
          Pygame
        </span>

        <span className="rounded bg-zinc-800 px-3 py-1 text-sm text-white">
          OOP
        </span>
      </div>
    </div>
  )
}