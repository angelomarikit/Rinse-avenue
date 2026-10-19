import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { business } from '../../config/business'
import { isNonEmpty } from '../../lib/contact'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <section id="contact" className="section-anchor bg-surface py-16 pb-24 sm:py-20 sm:pb-24 lg:py-24">
      <Container>
        <SectionHeading title="Let's Make Laundry Day Easier" description="Have questions about our services? Reach out — we'd be happy to help." />
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3"><ContactForm /></div>
          <aside className="lg:col-span-2">
            <div className="rounded-[var(--radius-card)] border border-border bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-text-dark">Contact details</h3>
              <ul className="mt-5 space-y-4 text-sm">
                {isNonEmpty(business.phone) ? (
                  <li className="flex gap-3"><Phone className="h-5 w-5 text-primary" /><div><p className="font-semibold text-text-dark">Phone</p><a href={`tel:${business.phone}`} className="text-text-body hover:text-primary">{business.phone}</a></div></li>
                ) : null}
                {isNonEmpty(business.email) ? (
                  <li className="flex gap-3"><Mail className="h-5 w-5 text-primary" /><div><p className="font-semibold text-text-dark">Email</p><a href={`mailto:${business.email}`} className="break-all text-text-body hover:text-primary">{business.email}</a></div></li>
                ) : null}
                {isNonEmpty(business.address) ? (
                  <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-semibold text-text-dark">Address</p><p>{business.address}</p></div></li>
                ) : null}
                {isNonEmpty(business.businessHours) ? (
                  <li className="flex gap-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-semibold text-text-dark">Hours</p><p className="whitespace-pre-line">{business.businessHours}</p></div></li>
                ) : null}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
