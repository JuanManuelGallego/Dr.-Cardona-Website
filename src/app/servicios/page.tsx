import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { serviziContent } from '@/content/text'
import { Brain, HeartPulse, Users, GraduationCap, UserCheck, Clock, Video, Phone, FileText, Calendar } from 'lucide-react'
import Image from 'next/image'
import { buildMetadata, getBreadcrumbSchema, getServicesSchema } from '@/lib/seo'

export const dynamic = 'force-static'

export const metadata = buildMetadata({
  title: 'Servicios de psicoterapia en Medellín y Online | Dra. Manuela Cardona',
  description:
    'Psicoterapia individual, terapia de pareja, terapia familiar, apoyo a cuidadores y formación para operadores sanitarios en Medellín y online.',
  pathname: '/servicios',
})

export default function ComePossoAiutarti() {
  const icons = {
    1: Brain,
    2: HeartPulse,
    3: Users,
    4: GraduationCap,
    5: UserCheck
  }

  return (
    <>
      <StructuredData
        data={[
          getServicesSchema(),
          getBreadcrumbSchema([
            { name: 'Inicio', pathname: '/' },
            { name: 'Servicios', pathname: '/servicios' },
          ]),
        ]}
      />
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="page-header">
          <div className="container">
            <span className="eyebrow mb-3">Servicios</span>
            <h1 className="mb-3 mt-3 text-4xl md:text-5xl font-semibold tracking-tight">{serviziContent.title}</h1>
            <p className="text-lg whitespace-pre-line text-foreground/75 max-w-2xl">{serviziContent.intro}</p>
          </div>
        </section>

        {/* Card con icona e descrizione */}
        <section className="pt-20 section-bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviziContent.services.map((service) => {
                const Icon = icons[ service.id as keyof typeof icons ]
                return (
                  <div
                    key={service.id}
                    className="card-base card-hover p-6 flex flex-col"
                  >
                    <div className="flex justify-center mb-4">
                      {service.image ? (
                        <div className="w-full h-48 relative rounded-lg overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="icon-circle-base">
                          <Icon />
                        </div>
                      )}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground text-center mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                      {service.fullDescription}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border/60">
                      <div className="text-center">
                        <p className="font-heading text-xl font-semibold text-primary">{service.price}</p>
                        {service.priceNote && (
                          <p className="text-xs text-muted-foreground mt-1 whitespace-pre-line">{service.priceNote}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Come funziona */}
        <section className="py-20 section-bg-white">
          <div className="container">
            <div className="section-title">
              <h2>{serviziContent.howItWorks.title}</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              {serviziContent.howItWorks.items.map((item, index) => {
                const iconMap = [ Calendar, Clock, Video, FileText, Phone ]
                const Icon = iconMap[ index % iconMap.length ]
                return (
                  <div key={index} className="flex gap-5 items-start">
                    <div className="flex-shrink-0">
                      <div className="icon-circle-base" style={{ width: '3rem', height: '3rem' }}>
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
