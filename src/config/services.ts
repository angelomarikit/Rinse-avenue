import type { LucideIcon } from 'lucide-react'
import { BedDouble, Package, Shirt, Sparkles, Truck, WashingMachine } from 'lucide-react'

export type ServiceItem = {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  icon: LucideIcon
  enabled: boolean
  isSamplePreview: boolean
}

export const services: ServiceItem[] = [
  {
    id: 'wash-dry',
    title: 'Wash & Dry',
    description: 'Convenient washing and drying for everyday laundry.',
    image: '/images/services/wash-dry.jpg',
    imageAlt: 'Commercial washing machines in a laundry shop',
    icon: WashingMachine,
    enabled: false,
    isSamplePreview: true,
  },
  {
    id: 'wash-dry-fold',
    title: 'Wash, Dry & Fold',
    description: 'Let us handle the washing, drying, and folding.',
    image: '/images/services/wash-dry-fold.jpg',
    imageAlt: 'Neatly folded clean laundry',
    icon: Shirt,
    enabled: false,
    isSamplePreview: true,
  },
  {
    id: 'self-service',
    title: 'Self-Service Laundry',
    description: 'An option for customers who prefer to manage their own laundry.',
    image: '/images/services/self-service.jpg',
    imageAlt: 'Self-service laundromat aisle',
    icon: Sparkles,
    enabled: false,
    isSamplePreview: true,
  },
  {
    id: 'bedding',
    title: 'Bedding & Linens',
    description: 'Laundry care for sheets, pillowcases, blankets, and other household fabrics.',
    image: '/images/services/bedding.jpg',
    imageAlt: 'Fresh bedding and linens',
    icon: BedDouble,
    enabled: false,
    isSamplePreview: true,
  },
  {
    id: 'pickup-delivery',
    title: 'Pickup & Delivery',
    description: 'Convenient laundry collection and return, if offered by the business.',
    image: '/images/services/pickup-delivery.jpg',
    imageAlt: 'Laundry bags ready for pickup',
    icon: Truck,
    enabled: false,
    isSamplePreview: true,
  },
  {
    id: 'ironing',
    title: 'Ironing & Pressing',
    description: 'Garment finishing for a neat and presentable look.',
    image: '/images/services/ironing.jpg',
    imageAlt: 'Pressed garments on hangers',
    icon: Package,
    enabled: false,
    isSamplePreview: true,
  },
]

export function getVisibleServices(showSamplePreviews: boolean): ServiceItem[] {
  return services.filter(
    (s) => s.enabled || (s.isSamplePreview && showSamplePreviews),
  )
}
