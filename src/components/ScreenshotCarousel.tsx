import useEmblaCarousel from 'embla-carousel-react'

type Props = {
  images: string[]
}

export default function ScreenshotCarousel({ images }: Props) {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full"
          >
            <img
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="h-75 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}