import { HeartHandshake, Shirt, Sparkles, Timer } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const benefits = [
  { title: 'Convenient Laundry Care', description: 'Make laundry day easier with straightforward services designed around everyday needs.', icon: Timer },
  { title: 'Fresh & Clean Results', description: 'Give your clothes the attention and care they deserve.', icon: Sparkles },
  { title: 'Care for Your Garments', description: 'A thoughtful approach to keeping your clothing clean and comfortable.', icon: Shirt },
  { title: 'Friendly Service', description: 'A welcoming laundry experience from start to finish.', icon: HeartHandshake },
]

export function Benefits() {
  return (
    <section className="section-anchor bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading title="Laundry Made Simple." description="Because clean clothes should never be complicated." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <article key={b.title} className="rounded-[var(--radius-card)] border border-border bg-white p-6 hover:shadow-md">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-primary"><Icon className="h-5 w-5" /></div>
                <h3 className="text-lg font-semibold text-text-dark">{b.title}</h3>
                <p className="mt-2 text-sm text-text-body">{b.description}</p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
