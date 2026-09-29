import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Where from '@/components/Where'
import Patients from '@/components/Patients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { buildMetadata, getLocalBusinessSchema, getPersonSchema, getWebsiteSchema } from '@/lib/seo'

export const dynamic = 'force-static'

export const metadata = buildMetadata({
  title: 'Dra. Manuela Cardona | Psicóloga y Psicoterapeuta en Medellín y Online',
  description:
    'Psicóloga y psicoterapeuta cognitivo-conductual en Medellín y online. Apoyo para ansiedad, depresión, ataques de pánico, terapia de pareja y familia.',
  pathname: '/',
})

export default function Home() {
  return (
    <>
      <StructuredData
        data={[ getWebsiteSchema(), getPersonSchema(), getLocalBusinessSchema() ]}
      />
      <main id="main-content">
        <Navbar />
        <Hero />
        <div className="border-t border-border/60 bg-gradient-to-b from-background via-background to-muted/25" />
        <About />
        <Patients />
        <Where />
        <Contact />
        <Footer />

      </main>
    </>
  )
}
