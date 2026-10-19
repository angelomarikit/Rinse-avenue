import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { InteractiveImage } from '../ui/InteractiveImage'

export function About() {
  return (
    <section id="about" className="section-anchor bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <InteractiveImage variant="featured" enableTilt src="/images/about/about-laundry.jpg" alt="Folded clean laundry" width={1200} height={900} loading="lazy" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">About Rinse Avenue</p>
            <h2 className="mt-3 text-3xl font-bold text-text-dark sm:text-4xl">Making Laundry Day a Little Easier</h2>
            <p className="mt-5 text-lg text-text-body">At Rinse Avenue Laundry Hub, we believe that laundry should be one less thing to worry about.</p>
            <p className="mt-4 text-lg text-text-body">Our goal is to make everyday laundry care simple, convenient, and comfortable — including personalized premium scents when you choose them.</p>
            <Button href="#contact" className="mt-8">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
