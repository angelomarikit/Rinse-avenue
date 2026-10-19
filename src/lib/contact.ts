import { business, type BusinessConfig } from '../config/business'

export function isNonEmpty(value: string | undefined): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export function hasMessengerLink(): boolean {
  return isNonEmpty(business.messengerUrl) || isNonEmpty(business.facebookUrl)
}

export function getMessengerHref(): string | undefined {
  if (isNonEmpty(business.messengerUrl)) return business.messengerUrl
  if (isNonEmpty(business.facebookUrl)) return business.facebookUrl
  return undefined
}

export function buildLocalBusinessJsonLd(config: BusinessConfig = business) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Laundry',
    name: config.name,
    image: config.logoPath,
  }
  if (isNonEmpty(config.phone)) data.telephone = config.phone
  if (isNonEmpty(config.email)) data.email = config.email
  if (isNonEmpty(config.address)) {
    data.address = { '@type': 'PostalAddress', streetAddress: config.address }
  }
  if (isNonEmpty(config.canonicalUrl)) data.url = config.canonicalUrl
  return data
}
