import { site } from '../../config/site'
import { getVisibleServices } from '../../config/services'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ServiceCard } from '../ui/ServiceCard'

export function Services() {
  const visible = getVisibleServices(site.showSamplePreviews)
  return (
    <section id="services" className="section-anchor bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading title="Our Laundry Services" description="Discover convenient laundry solutions for your everyday needs." />
        {site.showSampleServiceBanner ? (
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-text-body">Sample service cards for layout preview — confirm offerings with the business before launch.</p>
        ) : null}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((s) => (
            <ServiceCard key={s.id} service={s} showSampleBadge={site.showSamplePreviews} />
          ))}
        </div>
      </Container>
    </section>
  )
}
