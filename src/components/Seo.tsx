import { buildLocalBusinessJsonLd } from '../lib/contact'

export function Seo() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessJsonLd()) }} />
}
