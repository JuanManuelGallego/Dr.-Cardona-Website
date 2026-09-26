import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      pathname: '/',
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      pathname: '/quien-soy',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      pathname: '/servicios',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      pathname: '/faq',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      pathname: '/contacto',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  const lastModified = new Date()

  return routes.map((route) => ({
    url: absoluteUrl(route.pathname),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
