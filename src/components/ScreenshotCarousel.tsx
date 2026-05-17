import useEmblaCarousel from "embla-carousel-react"

type ScreenshotCarouselProps = {
  images: string[]
}

export default function ScreenshotCarousel({ images }: ScreenshotCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = () => {
    emblaApi?.scrollPrev()
  }

  const scrollNext = () => {
    emblaApi?.scrollNext()
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="min-w-0 flex-[0_0_100%]" key={image}>
              <img
                src={image}
                alt={`Screenshot ${index + 1}`}
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-white"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-white"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}