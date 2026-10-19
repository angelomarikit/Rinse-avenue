import { galleryImages } from '../../config/gallery'
import { Container } from '../ui/Container'
import { InteractiveImage } from '../ui/InteractiveImage'
import { SectionHeading } from '../ui/SectionHeading'

const aspectClasses = { square: 'row-span-1', portrait: 'sm:row-span-2', landscape: 'col-span-1 sm:col-span-2' }

export function Gallery() {
  return (
    <section className="section-anchor bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading title="A Fresh Look at Laundry Care" description="Illustrative photography — replace with your own store photos when ready." />
        <div className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-4 sm:auto-rows-[200px] sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <figure key={image.src} className={`overflow-hidden rounded-[var(--radius-card)] border border-border bg-white ${aspectClasses[image.aspect]}`}>
              <InteractiveImage variant="gallery" wrapperClassName="h-full rounded-none border-0 shadow-none" src={image.src} alt={image.alt} width={800} height={600} loading="lazy" />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
