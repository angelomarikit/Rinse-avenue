import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  { n: '01', title: 'Visit or Contact Us', text: 'Get in touch or visit the laundry hub to ask about available services.' },
  { n: '02', title: 'Choose Your Service', text: 'Find the laundry service that works best for your needs.' },
  { n: '03', title: 'Enjoy Fresh Laundry', text: 'Get back to your day with clean, refreshed clothes.' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-anchor bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading title="A Simple Way to Get Your Laundry Done" description="A straightforward process designed to make laundry care easier." />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {steps.map((s) => (
            <article key={s.n} className="rounded-[var(--radius-card)] border border-border bg-white p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{s.n}</div>
              <h3 className="text-xl font-semibold text-text-dark">{s.title}</h3>
              <p className="mt-2 text-sm text-text-body">{s.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
