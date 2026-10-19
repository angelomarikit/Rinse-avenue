import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { fadeUp, motionTransition, motionViewport } from '../../lib/motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { InteractiveImage } from '../ui/InteractiveImage'

export function Hero() {
  const reducedMotion = useReducedMotion()
  return (
    <section id="home" className="section-anchor bg-gradient-to-b from-white via-white to-surface pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={reducedMotion ? false : 'hidden'} whileInView="visible" viewport={motionViewport(reducedMotion)} variants={fadeUp} transition={motionTransition(reducedMotion)}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Rinse Avenue Laundry Hub</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-text-dark sm:text-5xl lg:text-[3.5rem]">
              Fresh Clothes. <span className="text-primary">More Time for What Matters.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-text-body">Let Rinse Avenue Laundry Hub take care of your laundry, so you can spend more time doing what you love.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#services">Explore Our Services</Button>
              <Button href="#contact" variant="secondary">Contact Us</Button>
            </div>
          </motion.div>
          <motion.div initial={reducedMotion ? false : 'hidden'} whileInView="visible" viewport={motionViewport(reducedMotion)} variants={fadeUp} transition={motionTransition(reducedMotion, 0.6)} className="[perspective:1200px]">
            <InteractiveImage variant="hero" enableTilt src="/images/hero/hero-laundry.jpg" alt="Modern laundromat with washing machines" width={1400} height={1050} fetchPriority="high" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
