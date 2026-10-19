import { ArrowUpRight } from 'lucide-react'
import type { ServiceItem } from '../../config/services'
import { InteractiveImage } from './InteractiveImage'

export function ServiceCard({ service, showSampleBadge }: { service: ServiceItem; showSampleBadge: boolean }) {
  const Icon = service.icon
  const isSample = service.isSamplePreview && !service.enabled
  return (
    <article className="group/card flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-primary/10">
      <InteractiveImage variant="card" src={service.image} alt={service.imageAlt} width={800} height={600} loading="lazy">
        {showSampleBadge && isSample ? (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary shadow-sm">
            Sample — confirm with business
          </span>
        ) : null}
      </InteractiveImage>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-primary">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <h3 className="text-xl font-semibold text-text-dark">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-body sm:text-base">{service.description}</p>
        <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary">
          Inquire about this service
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </article>
  )
}
