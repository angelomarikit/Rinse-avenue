import { motion } from 'motion/react'
import type { ImgHTMLAttributes, ReactNode } from 'react'
import { useImageTilt } from '../../hooks/useImageTilt'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type Variant = 'hero' | 'featured' | 'card' | 'gallery'

export function InteractiveImage({
  variant = 'featured',
  wrapperClassName = '',
  imageClassName = '',
  enableTilt = false,
  children,
  ...imgProps
}: {
  variant?: Variant
  wrapperClassName?: string
  imageClassName?: string
  enableTilt?: boolean
  children?: ReactNode
} & Pick<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height' | 'loading' | 'fetchPriority' | 'decoding'>) {
  const reducedMotion = useReducedMotion()
  const tiltEnabled = enableTilt && !reducedMotion
  const { ref, rotateX, rotateY, onPointerMove, onPointerLeave } = useImageTilt(tiltEnabled, variant === 'hero' ? 5 : 4)
  const scales: Record<Variant, number> = { hero: 1.05, featured: 1.04, card: 1.08, gallery: 1.07 }
  const wrappers: Record<Variant, string> = {
    hero: 'rounded-[1.25rem] border border-border bg-surface shadow-lg shadow-primary/10 ring-1 ring-primary/5',
    featured: 'rounded-[1.25rem] border border-border bg-surface shadow-md shadow-primary/5',
    card: 'aspect-[4/3] bg-surface',
    gallery: 'h-full min-h-[180px] bg-surface sm:min-h-[200px]',
  }
  const images: Record<Variant, string> = {
    hero: 'aspect-[4/3] w-full object-cover',
    featured: 'aspect-[4/3] w-full object-cover',
    card: 'h-full w-full object-cover',
    gallery: 'h-full w-full object-cover',
  }

  return (
    <motion.div
      ref={ref}
      style={tiltEnabled ? { rotateX, rotateY, transformPerspective: 1200 } : undefined}
      onPointerMove={tiltEnabled ? onPointerMove : undefined}
      onPointerLeave={tiltEnabled ? onPointerLeave : undefined}
      className={`image-frame group relative overflow-hidden transition-shadow duration-500 hover:shadow-lg hover:shadow-primary/10 ${wrappers[variant]} ${wrapperClassName}`}
    >
      <motion.img
        {...imgProps}
        className={`image-frame__photo ${images[variant]} ${imageClassName}`}
        whileHover={reducedMotion ? undefined : { scale: scales[variant] }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="image-frame__overlay pointer-events-none absolute inset-0" aria-hidden />
      <div className="image-frame__shine pointer-events-none absolute inset-0" aria-hidden />
      {children}
    </motion.div>
  )
}
