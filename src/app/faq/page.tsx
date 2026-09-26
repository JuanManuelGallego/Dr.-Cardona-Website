import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import StructuredData from '@/components/StructuredData'
import { faqContent } from '@/content/text'
import { buildMetadata, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo'

export const dynamic = 'force-static'

export const metadata = buildMetadata({
  title: 'FAQ | Preguntas frecuentes sobre psicoterapia y sesiones online',
  description:
    'Respuestas a las preguntas frecuentes sobre psicoterapia, sesiones online y primera sesión con la Dra. Manuela Cardona.',
  pathname: '/faq',
})

export default function FAQ() {
  return (
    <>
      <StructuredData
        data={[
          getFAQSchema(),
          getBreadcrumbSchema([
            { name: 'Inicio', pathname: '/' },
            { name: 'FAQ', pathname: '/faq' },
          ]),
        ]}
      />
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="page-header">
          <div className="container">
            <span className="eyebrow mb-3">Preguntas frecuentes</span>
            <h1 className="mb-3 mt-3 text-4xl md:text-5xl font-semibold tracking-tight">{faqContent.title}</h1>
            <p className="text-lg text-foreground/75 max-w-2xl">{faqContent.subtitle}</p>
          </div>
        </section>

        {/* Accordion FAQ */}
        <section className="py-16 section-bg-white">
          <div className="container max-w-3xl">
            <FAQAccordion />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
