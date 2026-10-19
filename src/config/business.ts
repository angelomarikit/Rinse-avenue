export type BusinessConfig = {
  name: string
  tagline: string
  logoPath: string
  phone?: string
  email?: string
  facebookUrl?: string
  messengerUrl?: string
  address?: string
  businessHours?: string
  googleMapsEmbedUrl?: string
  contactFormEmail?: string
  canonicalUrl?: string
}

export const business: BusinessConfig = {
  name: 'Rinse Avenue Laundry Hub',
  tagline: 'Convenient laundry care for everyday life.',
  logoPath: '/images/logo.png',
  phone: '09999671651',
  email: 'mj_suayan@yahoo.com',
  contactFormEmail: 'mj_suayan@yahoo.com',
  facebookUrl: undefined,
  messengerUrl: undefined,
  address: undefined,
  businessHours: undefined,
  googleMapsEmbedUrl: undefined,
  canonicalUrl: undefined,
}
