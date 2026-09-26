import Navbar from '@/components/Navbar'
import Footer, { InstagramIcon } from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { Phone, MessageCircle, Mail, MapPin, Clock, Train, Bus, TramFront } from 'lucide-react'
import { contattamiContent } from '@/content/text'
import { buildMetadata, getBreadcrumbSchema, getLocalBusinessSchema } from '@/lib/seo'

export const dynamic = 'force-static'

export const metadata = buildMetadata({
  title: 'Contactos y consulta en Medellín | Dra. Manuela Cardona',
  description:
    'Contactos, dirección de la consulta en Medellín, modalidad online e información para reservar una sesión con la Dra. Manuela Cardona.',
  pathname: '/contacto',
})

export default function Contattami() {
  return (
    <>
      <StructuredData
        data={[
          getLocalBusinessSchema(),
          getBreadcrumbSchema([
            { name: 'Inicio', pathname: '/' },
            { name: 'Contacto', pathname: '/contacto' },
          ]),
        ]}
      />
      <Navbar />
      <main className="min-h-screen">
        <section className="page-header">
          <div className="container">
            <span className="eyebrow mb-3">Contacto</span>
            <h1 className="mb-3 mt-3 text-4xl md:text-5xl font-semibold tracking-tight">{contattamiContent.title}</h1>
            <p className="text-lg text-foreground/75 max-w-2xl">
              {contattamiContent.subtitle}
            </p>
          </div>
        </section>

        {/* Sezione 1: Contatti */}
        <section className="py-16 section-bg-white">
          <div className="container">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8 tracking-tight">Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contattamiContent.contactMethods.map((method) => {
                const IconComponent =
                  method.icon === 'Phone'
                    ? Phone
                    : method.icon === 'MessageCircle'
                      ? MessageCircle
                      : method.icon === 'Instagram'
                        ? InstagramIcon
                        : Mail
                const isExternal = method.icon === 'MessageCircle' || method.icon === 'Instagram'
                return (
                  <a
                    key={method.id}
                    href={method.link}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="card-base card-hover p-6 text-center flex flex-col items-center"
                  >
                    <div className="icon-circle-base mb-4" style={{ width: '3rem', height: '3rem' }}>
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-1 text-foreground">{method.title}</h3>
                    <p className="text-muted-foreground break-words text-sm">{method.contact}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Sección 2: Dónde Atiendo */}
        <section className="py-16 section-bg-white">
          <div className="container">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8 tracking-tight">Dónde Atiendo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Online */}
              <div className="card-base card-hover p-7">
                <div className="flex items-center gap-4 mb-5">
                  <div className="icon-circle-base" style={{ width: '2.75rem', height: '2.75rem' }}>
                    <Clock size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">Online</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground"><strong>Lunes - Viernes:</strong> de 8am a 5pm </p>
                  <p className="text-foreground"><strong>Sábado:</strong>  Cerrado</p>
                  <p className="text-foreground"><strong>Domingo:</strong> Cerrado</p>
                </div>
              </div>

              {/* Presencial */}
              <div className="card-base card-hover p-7">
                <div className="flex items-center gap-4 mb-5">
                  <div className="icon-circle-base" style={{ width: '2.75rem', height: '2.75rem' }}>
                    <MapPin size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">Presencial</h3>
                </div>
                <p className="text-foreground mb-4">
                  <strong>Consulta:</strong> Parque el Poblado, Medellín - Con cita previa<br />
                </p>
                {/* <div className="mb-4 space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">Cómo llegar:</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Train size={16} className="text-primary" />
                    <span className="text-foreground">Metro: (Línea 1) - Parada Principi d'Acaja</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Bus size={16} className="text-primary" />
                    <span className="text-foreground">Bus: 29, 72</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TramFront size={16} className="text-primary" />
                    <span className="text-foreground">Tranvía: 13, 9, 3</span>
                  </div>
                </div> */}

                <div className="relative mb-4 overflow-hidden rounded-2xl ring-1 ring-border/60">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416.9170106243396!2d-75.57026612984274!3d6.21014068893999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44282ba8ea5c95%3A0x3d746f82f871ab1e!2sParque%20de%20El%20Poblado!5e0!3m2!1sen!2sca!4v1790463685415!5m2!1sen!2sca" width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block"
                  />
                  <a
                    href="https://maps.app.goo.gl/hK9ASBmvssZJ2TJk6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-black/10 transition-colors"
                    aria-label="Calcular ruta en Google Maps"
                  >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
