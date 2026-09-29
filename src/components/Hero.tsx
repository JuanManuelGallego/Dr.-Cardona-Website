import Image from 'next/image'
import { homeContent } from '@/content/text'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Brand-tinted gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
      />

      <div className="container flex flex-col justify-center items-center gap-6 py-10 md:flex-row md:gap-12 md:py-16">
        <div className="hidden md:flex md:flex-shrink-0 md:relative">
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