import { useCallback, useRef, type RefObject } from 'react'
import { useSpring } from 'motion/react'

export function useImageTilt(enabled: boolean, maxTilt = 6) {
  const ref = useRef<HTMLDivElement | null>(null)
  const rotateX = useSpring(0, { stiffness: 260, damping: 22 })
  const rotateY = useSpring(0, { stiffness: 260, damping: 22 })

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!enabled || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      rotateY.set(x * maxTilt * 2)
      rotateX.set(-y * maxTilt * 2)
    },
    [enabled, maxTilt, rotateX, rotateY],
  )

  const onPointerLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  return { ref: ref as RefObject<HTMLDivElement | null>, rotateX, rotateY, onPointerMove, onPointerLeave }
}
