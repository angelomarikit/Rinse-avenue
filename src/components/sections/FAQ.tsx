import { HelpCircle, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { faqItems } from '../../config/faq'
import { AccordionItem } from '../ui/AccordionItem'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)

  return (
    <section id="faq" className="section-anchor bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers about our laundry services, premium scents, pricing, and how to reach us."
        />

        <div className="mx-auto mt-12 max-w-3xl rounded-[var(--radius-card)] border border-border bg-white px-5 sm:px-8">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
            />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[var(--radius-card)] border border-secondary/30 bg-surface p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
              <HelpCircle className="h-6 w-6" aria-hidden />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-dark">Still have questions?</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-body">
                Ask about premium scents, pricing, or same-day service — our team is ready to help.
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:shrink-0">
            <Button href="#contact" className="w-full sm:w-auto">
              Contact us
            </Button>
            <Button href="#pricelist" variant="secondary" className="w-full sm:w-auto">
              <Sparkles className="h-4 w-4" aria-hidden />
              View pricelist
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
