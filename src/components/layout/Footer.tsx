import { business } from '../../config/business'
import { navigation } from '../../config/navigation'
import { isNonEmpty } from '../../lib/contact'
import { Container } from '../ui/Container'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border bg-white pb-24">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={business.logoPath} alt={business.name} className="h-28 w-auto sm:h-32 md:h-36" width={400} height={144} loading="lazy" />
            <p className="mt-4 max-w-md text-sm text-text-body">{business.tagline}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-text-dark">Quick links</h2>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}><a href={item.href} className="text-sm text-text-body hover:text-primary">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-text-dark">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-body">
              {isNonEmpty(business.phone) ? <li><a href={`tel:${business.phone}`} className="hover:text-primary">{business.phone}</a></li> : null}
              {isNonEmpty(business.email) ? <li><a href={`mailto:${business.email}`} className="break-all hover:text-primary">{business.email}</a></li> : null}
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-6 text-sm text-text-body">© {currentYear} {business.name}. All rights reserved.</p>
      </Container>
    </footer>
  )
}
