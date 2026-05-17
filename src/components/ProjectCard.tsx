import ScreenshotCarousel from './ScreenshotCarousel'

const screenshots = [
  '/images/pong/start-screen.png',
  '/images/pong/pong-classic.png',
  '/images/pong/australian-open.png',
  '/images/pong/french-open.png',
  '/images/pong/wimbledon.png',
  '/images/pong/win-screen.png',
  '/images/pong/us-open.png',
]

export default function ProjectCard() {
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