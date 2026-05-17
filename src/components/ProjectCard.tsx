import ScreenshotCarousel from './ScreenshotCarousel'

const screenshots = [
  '/images/pong/pong-start-screen.png',
  '/images/pong/pong-classic.png',
  '/images/pong/pong-australian-open.png',
  '/images/pong/pong-french-open.png',
  '/images/pong/pong-wimbledon.png',
  '/images/pong/pong-us-open.png',
  '/images/pong/pong-win-screen.png',
]

type Project = {
  github?: string
  images?: string[]
}

export default function ProjectCard({ project }: { project?: Project }) {
  return (
    <div className="rounded-3xl bg-zinc-900 p-6 shadow-xl">
      <h2 className="mb-2 text-2xl font-bold text-white">
        Grand Slam Pong
      </h2>

      <p className="mb-4 text-zinc-400">
        A customizable tennis-inspired arcade game built
        with Python and Pygame.
      </p>

      <ScreenshotCarousel images={project?.images || screenshots} />
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