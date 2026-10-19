import { Sparkles } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const pricingNotes = [
  {
    title: 'Wash & fold',
    detail: 'Rates depend on weight, garment type, and add-ons such as premium scents.',
  },
  {
    title: 'Self-service',
    detail: 'Machine use is priced per load or cycle. Ask staff for the current rate card.',
  },
  {
    title: 'Bedding & bulk items',
    detail: 'Blankets, comforters, and large linens may have separate pricing — confirm with our team.',
  },
  {
    title: 'Premium scents',
    detail: 'Personalized fragrance options may include a small add-on. Available scents vary by stock.',
  },
]

export function Pricelist() {
  return (
    <section id="pricelist" className="section-anchor bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Pricelist"
          title="Simple, Transparent Pricing"
          description="Pricing depends on service type, laundry weight, and preferences. Contact us for the latest rates and minimum weight details."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {pricingNotes.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-card)] border border-border bg-white p-6 transition-shadow hover:shadow-md hover:shadow-primary/5"
            >
              <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-body">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center rounded-[var(--radius-card)] border border-border bg-white p-6 text-center sm:p-8">
          <Sparkles className="h-8 w-8 text-secondary" aria-hidden />
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-body sm:text-base">
            For exact prices, minimum weight, and premium scent add-ons, message or call us — we will
            share the updated pricelist for your preferred service.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">Get a quote</Button>
            <Button href="#faq" variant="secondary">
              Read FAQ
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
