import { HelpCircle, Mail, Phone } from 'lucide-react'
import { business } from '../../config/business'
import { isNonEmpty } from '../../lib/contact'

export function BottomContactWidget() {
  const hasPhone = isNonEmpty(business.phone)
  const hasEmail = isNonEmpty(business.email)

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white/95 px-3 py-2.5 shadow-[0_-8px_30px_rgb(8_76_166_/0.08)] backdrop-blur-md"
      role="region"
      aria-label="Quick contact"
    >
      <div className="mx-auto flex max-w-2xl items-stretch justify-center gap-2 sm:gap-3">
        {hasPhone ? (
          <a
            href={`tel:${business.phone}`}
            className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg bg-surface px-2 py-2 text-center text-xs font-semibold text-primary transition-colors hover:bg-secondary/15"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call
          </a>
        ) : null}
        {hasEmail ? (
          <a
            href={`mailto:${business.email}`}
            className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg bg-surface px-2 py-2 text-center text-xs font-semibold text-primary transition-colors hover:bg-secondary/15"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Email
          </a>
        ) : null}
        <a
          href="#faq"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg bg-surface px-2 py-2 text-center text-xs font-semibold text-primary transition-colors hover:bg-secondary/15"
        >
          <HelpCircle className="h-4 w-4" aria-hidden />
          FAQ
        </a>
        <a
          href="#contact"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg bg-primary px-2 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Message
        </a>
      </div>
    </div>
  )
}
