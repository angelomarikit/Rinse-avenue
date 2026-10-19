import type { Variants } from 'motion/react'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function motionViewport(reducedMotion: boolean) {
  if (reducedMotion) return undefined
  return { once: true, margin: '-80px' as const }
}

export function motionTransition(reducedMotion: boolean, duration = 0.5) {
  return reducedMotion ? { duration: 0 } : { duration, ease: [0.22, 1, 0.36, 1] as const }
}
