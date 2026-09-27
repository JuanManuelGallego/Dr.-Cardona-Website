import Image from 'next/image'
import { homeContent } from '@/content/text'

export default function Hero() {
  return (
    <section className="relative overflow-hidden hidden md:block">
      {/* Brand-tinted gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
      />

      <div className="container flex flex-col md:flex-row justify-center items-center gap-12 py-16">
        {/* Colonna sinistra: Immagine */}
        <div className="flex-shrink-0 flex relative">
          <Image
            src="/images/logo-website.png"
            alt={homeContent.hero.imageAlt}
            width={200}
            height={200}
            priority
            className="relative object-contain w-52 h-52"
          />
        </div>

        {/* Colonna destra: Testo */}
        <div className="flex justify-center items-center animate-fade-up">
          <div>
            <span className="eyebrow mb-4">Psicóloga · Psicoterapeuta</span>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4 tracking-tight text-foreground mt-3">
              {homeContent.hero.name}
            </h1>
            <h2 className="text-lg md:text-xl mb-2 text-foreground/85 font-normal">
              {homeContent.hero.title} <span className="text-primary font-semibold">{homeContent.hero.specialization}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Procesos de psicoterapia en <span className="text-primary font-semibold">{homeContent.hero.location}</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
} 