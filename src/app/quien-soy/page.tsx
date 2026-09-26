import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { QuienSoyContent } from '@/content/text'
import Image from 'next/image'
import { buildMetadata, getBreadcrumbSchema } from '@/lib/seo'

// Funzione helper per convertire **testo** in <strong>testo</strong>
function formatBoldText(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}

export const dynamic = 'force-static'

export const metadata = buildMetadata({
  title: 'Quién soy | Dra. Manuela Cardona, Psicóloga Psicoterapeuta en Medellín',
  description:
    'Perfil profesional de la Dra. Manuela Cardona, psicóloga psicoterapeuta en Medellín, especializada en psicoterapia de familia.',
  pathname: '/quien-soy',
})

export default function ChiSono() {
  return (
    <>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: 'Inicio', pathname: '/' },
          { name: 'Quién soy', pathname: '/quien-soy' },
        ])}
      />
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="page-header">
          <div className="container">
            <span className="eyebrow mb-3">Perfil profesional</span>
            <h1 className="mb-3 mt-3 text-4xl md:text-5xl font-semibold tracking-tight">{QuienSoyContent.title}</h1>
            <p className="text-lg whitespace-pre-line text-foreground/75 max-w-2xl">{QuienSoyContent.subtitle}</p>
          </div>
        </section>

        {/* Layout a due colonne */}
        <section className="py-16 section-bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Foto a sinistra */}
              <div className="portrait-frame inline-block">
                <Image
                  src="/images/chi-sono.jpg"
                  alt="Foto Dra. Manuela Cardona"
                  width={500}
                  height={300}
                  className="relative rounded-2xl shadow-soft-lg h-auto w-auto ring-1 ring-border/60"
                />
              </div>

              {/* Testo a destra */}
              <div className="prose prose-lg max-w-none">
                <p
                  className="text-foreground leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{
                    __html: formatBoldText(QuienSoyContent.description)
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
