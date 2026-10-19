import { Loader2, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { business } from '../../config/business'
import { isNonEmpty } from '../../lib/contact'
import { Button } from '../ui/Button'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const recipient = business.contactFormEmail ?? business.email

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isNonEmpty(recipient)) return
    const form = event.currentTarget
    const data = new FormData(form)
    setState('submitting')
    setErrorMessage('')
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!response.ok) throw new Error('send failed')
      const result = (await response.json()) as { success?: string | boolean }
      const ok = result.success === true || result.success === 'true'
      if (!ok) throw new Error('send failed')
      form.reset()
      setState('success')
    } catch {
      setState('error')
      setErrorMessage('Something went wrong. Please try again or call us directly.')
    }
  }

  if (!isNonEmpty(recipient)) return null

  return (
    <div className="rounded-[var(--radius-card)] border border-border bg-white p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-text-dark">Send us a message</h3>
      <p className="mt-2 text-sm text-text-body">Your inquiry will be sent to our team inbox.</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="_subject" value="New inquiry — Rinse Avenue Laundry Hub website" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="_captcha" value="false" />
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-text-dark">
            Name
            <input type="text" name="name" required autoComplete="name" className="mt-1.5 w-full rounded-[var(--radius-button)] border border-border px-4 py-3 text-sm focus:border-secondary" placeholder="Your name" />
          </label>
          <label className="block text-sm font-medium text-text-dark">
            Email
            <input type="email" name="email" required autoComplete="email" className="mt-1.5 w-full rounded-[var(--radius-button)] border border-border px-4 py-3 text-sm focus:border-secondary" placeholder="you@email.com" />
          </label>
        </div>
        <label className="block text-sm font-medium text-text-dark">
          Phone (optional)
          <input type="tel" name="phone" autoComplete="tel" className="mt-1.5 w-full rounded-[var(--radius-button)] border border-border px-4 py-3 text-sm focus:border-secondary" placeholder="09XX XXX XXXX" />
        </label>
        <label className="block text-sm font-medium text-text-dark">
          Message
          <textarea name="message" required rows={5} className="mt-1.5 w-full resize-y rounded-[var(--radius-button)] border border-border px-4 py-3 text-sm focus:border-secondary" placeholder="How can we help with your laundry?" />
        </label>
        <Button type="submit" disabled={state === 'submitting'} className="w-full sm:w-auto">
          {state === 'submitting' ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending…</>) : (<><Send className="h-4 w-4" />Send message</>)}
        </Button>
        {state === 'success' ? <p className="text-sm font-medium text-primary" role="status">Thank you! Your message was sent.</p> : null}
        {state === 'error' ? <p className="text-sm font-medium text-red-600" role="alert">{errorMessage}</p> : null}
      </form>
    </div>
  )
}
