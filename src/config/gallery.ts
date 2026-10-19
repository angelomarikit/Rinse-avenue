export type GalleryImage = {
  src: string
  alt: string
  aspect: 'square' | 'portrait' | 'landscape'
}

export const galleryImages: GalleryImage[] = [
  { src: '/images/gallery/gallery-1.jpg', alt: 'Modern washing machines in a laundry shop', aspect: 'portrait' },
  { src: '/images/gallery/gallery-2.jpg', alt: 'Neatly folded clean clothing', aspect: 'landscape' },
  { src: '/images/gallery/gallery-3.jpg', alt: 'Fresh towels at a laundry counter', aspect: 'square' },
  { src: '/images/gallery/gallery-4.jpg', alt: 'Self-service laundry hub interior', aspect: 'portrait' },
  { src: '/images/gallery/gallery-5.jpg', alt: 'Laundry bags with fresh garments', aspect: 'landscape' },
  { src: '/images/gallery/gallery-6.jpg', alt: 'Commercial dryers in a laundry facility', aspect: 'square' },
]
