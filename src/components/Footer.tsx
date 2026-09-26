import Link from 'next/link'
import Image from 'next/image'

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-[18px] h-[18px] shrink-0"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
  </svg>
)

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-[18px] h-[18px] shrink-0"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
)

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-[18px] h-[18px] shrink-0"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
    className="w-4 h-4"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM0 8h5v16H0V8Zm7.5 0h4.78v2.2h.07c.67-1.27 2.3-2.6 4.72-2.6 5.05 0 5.98 3.32 5.98 7.64V24h-5v-7.2c0-1.72-.03-3.92-2.4-3.92-2.4 0-2.77 1.87-2.77 3.8V24h-5V8Z" />
  </svg>
)

const EXPLORE = [
  { label: 'Quién soy', href: '/quien-soy' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Preguntas frecuentes', href: '/faq' },
  { label: 'Reservar una cita', href: '/contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-footer text-white/85">
      {/* Hairline gradient: cierre visual en la parte superior */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.7) 50%, transparent 100%)',
        }}
      />

      <div className="container py-12 md:py-14">
        {/* Cuadrícula integrada 12 columnas: marca + 3 secciones */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Bloque de marca */}
          <div className="md:col-span-4">
            <Image
              src="/images/LogoPNG-02.png"
              alt="Manuela Cardona, psicóloga"
              width={360}
              height={160}
              className="h-auto w-64 object-contain object-left md:w-72"
            />
            <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-white/55">
              Psicóloga · Psicoterapeuta
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-xs">
              Itinerarios de psicoterapia cognitivo-conductual, en consulta en
              Medellín y online.
            </p>
          </div>

          {/* Contactos */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-5 text-white/55">
              Contactos
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a
                  href="tel:+573054246679"
                  className="text-white/85 hover:text-primary transition-colors"
                >
                  +57 305 424 6679
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[3px]">
                  <MailIcon />
                </span>
                <a
                  href="mailto:psi.manuela.cardona@gmail.com"
                  className="text-white/85 hover:text-primary transition-colors break-all"
                >
                  psi.manuela.cardona@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PinIcon />
                <a
                  href="https://maps.app.goo.gl/hK9ASBmvssZJ2TJk6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-primary transition-colors"
                >
                  Parquel el Poblado, Medellín
                </a>
              </li>
            </ul>
          </div>

          {/* Explorar */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-5 text-white/55">
              Explorar
            </h4>
            <ul className="space-y-3 text-sm">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/85 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Albo + social */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-5 text-white/55">
              Referencias del Colegio
            </h4>
            <p className="text-sm leading-relaxed">
              <a
                href="https://www.ces.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-primary transition-colors"
              >
                Universidad CES
                <br />
              </a>
            </p>
            <p className="text-sm leading-relaxed">
              <a
                href="https://portal.upb.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-primary transition-colors"
              >
                Universidad Pontificia Bolivariana
                <br />
              </a>
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/psic_manu.cardona/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary hover:text-footer flex items-center justify-center transition-colors ring-1 ring-white/10"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/manuela-cardona-171ba2210/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary hover:text-footer flex items-center justify-center transition-colors ring-1 ring-white/10"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <span>
            © {year} Dra. Manuela Cardona · Todos los derechos reservados
          </span>
          <span>Política de Privacidad · Política de Cookies</span>
        </div>
      </div>
    </footer>
  )
}