import type { Metadata } from 'next'
import { faqContent, serviziContent } from '@/content/text'

export const siteConfig = {
  siteUrl: 'https://rossellastrangio.it',
  siteName: 'Dra. Manuela Cardona',
  businessName: 'Dra. Manuela Cardona',
  defaultTitle: 'Dra. Manuela Cardona | Psicóloga y Psicoterapeuta en Medellín y Online',
  defaultDescription:
    'Psicóloga y psicoterapeuta cognitivo-conductual en Medellín y online. Apoyo para ansiedad, depresión, ataques de pánico, terapia de pareja y neuropsicología clínica.',
  locale: 'es_ES',
  phone: '+57 305 424 6679',
  email: 'psi.manuela.cardona@gmail.com',
  ogImage: '/images/logo-website.png',
  portraitImage: '/images/selfie-home.jpg',
  socialProfiles: [
    'https://www.instagram.com/psic_manu.cardona/',
    'https://www.linkedin.com/in/manuela-cardona-171ba2210/',
    'https://ordinepsicologi.piemonte.it/albo-vista/?id=8933',
  ],
} as const

const sharedOpenGraphImages = [
  {
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
    alt: 'Dra. Manuela Cardona - Psicóloga en Medellín',
  },
]

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.businessName,
  authors: [ { name: siteConfig.businessName, url: siteConfig.siteUrl } ],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  category: 'healthcare',
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    siteName: siteConfig.siteName,
    images: sharedOpenGraphImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [ siteConfig.ogImage ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  ...(googleSiteVerification
    ? {
      verification: {
        google: googleSiteVerification,
      },
    }
    : {}),
}

type PageMetadataInput = {
  title: string
  description: string
  pathname: string
}

export function absoluteUrl(pathname: string = '/') {
  return new URL(pathname, siteConfig.siteUrl).toString()
}

export function buildMetadata({ title, description, pathname }: PageMetadataInput): Metadata {
  const url = absoluteUrl(pathname)

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      title,
      description,
      siteName: siteConfig.siteName,
      images: sharedOpenGraphImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ siteConfig.ogImage ],
    },
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl}/#website`,
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    inLanguage: 'es-ES',
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.siteUrl}/#person`,
    name: siteConfig.businessName,
    honorificPrefix: 'Dra.',
    jobTitle: 'Psicóloga Psicoterapeuta',
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    image: absoluteUrl(siteConfig.portraitImage),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: siteConfig.socialProfiles,
    knowsAbout: [
      'Psicoterapia cognitivo-conductual',
      'Ansiedad',
      'Ataques de pánico',
      'Depresión',
      'Terapia de pareja',
      'Neuropsicología clínica',
      'Apoyo a cuidadores',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cl 10 #42 - 45 Consultorio 407, El Poblado, Medellín, El Poblado, Medellín, Antioquia, Colombia',
      addressLocality: 'Medellín',
      addressRegion: 'Antioquia',
      addressCountry: 'CO',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Psicóloga Psicoterapeuta',
      occupationalCategory: 'Healthcare Practitioner',
      skills: 'Psicoterapia cognitivo-conductual y neuropsicología clínica',
    },
    mainEntityOfPage: siteConfig.siteUrl,
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.siteUrl}/#localbusiness`,
    name: 'Consulta de Psicología Dra. Manuela Cardona',
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    image: absoluteUrl(siteConfig.portraitImage),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cl 10 #42 - 45 Consultorio 407, El Poblado, Medellín, El Poblado, Medellín, Antioquia, Colombia',
      addressLocality: 'Medellín',
      addressRegion: 'Antioquia',
      addressCountry: 'CO',
    },
    areaServed: [ 'Medellín', 'Online' ],
    sameAs: siteConfig.socialProfiles,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: 'appointments',
        availableLanguage: [ 'Spanish' ],
        url: absoluteUrl('/contacto'),
      },
    ],
    founder: {
      '@id': `${siteConfig.siteUrl}/#person`,
    },
  }
}

export function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios de psicoterapia y neuropsicología',
    itemListElement: serviziContent.services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.shortDescription,
        provider: {
          '@id': `${siteConfig.siteUrl}/#person`,
        },
        areaServed: [ 'Medellín', 'Online' ],
      },
    })),
  }
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqContent.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

type BreadcrumbItem = {
  name: string
  pathname: string
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.pathname),
    })),
  }
}
