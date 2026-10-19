import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { business } from '../../config/business'
import { navigation } from '../../config/navigation'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const sectionIds = ['home', 'about', 'services', 'pricelist', 'faq', 'contact']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reducedMotion = useReducedMotion()
  const activeSection = useScrollSpy(sectionIds)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow ${scrolled ? 'shadow-sm shadow-primary/5' : ''}`}>
      <Container className="flex min-h-28 items-center justify-between gap-4 py-4 sm:min-h-32 sm:py-5">
        <a href="#home" className="shrink-0" onClick={closeMenu}>
          <img src={business.logoPath} alt={business.name} className="h-24 w-auto sm:h-28 md:h-32" width={360} height={128} />
        </a>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {navigation.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a key={item.href} href={item.href} className={`relative text-sm font-medium hover:text-primary ${isActive ? 'text-primary' : 'text-text-body'}`}>
                {item.label}
                {isActive ? <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-secondary" /> : null}
              </a>
            )
          })}
        </nav>
        <div className="hidden xl:block">
          <Button href="#contact">Contact Us</Button>
        </div>
        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-primary xl:hidden" aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((o) => !o)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      <AnimatePresence>
        {menuOpen ? (
          <motion.div id="mobile-nav" initial={reducedMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={reducedMotion ? undefined : { opacity: 0, height: 0 }} className="overflow-hidden border-t border-border bg-white xl:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-base font-medium hover:bg-surface" onClick={closeMenu}>{item.label}</a>
              ))}
              <Button href="#contact" className="mt-2 w-full" onClick={closeMenu}>Contact Us</Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
