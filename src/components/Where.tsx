import { Video, MapPin } from 'lucide-react'
import Link from 'next/link'
import { homeContent } from '@/content/text'

export default function Where() {
  return (
    <section id="where" className="py-20 section-bg-white">
      <div className="container">
        <div className="section-title">
          <h2>{homeContent.where.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-4xl mx-auto">
          {/* Online */}
          <div className="card-base card-hover p-8 text-center">
            <div className="icon-circle-base mx-auto mb-6">
              <Video />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{homeContent.where.items[0].title}</h3>
            <p className="text-foreground/80 leading-relaxed">
              {homeContent.where.items[0].description}
            </p>
          </div>

          {/* In presenza */}
          <div className="card-base card-hover p-8 text-center">
            <div className="icon-circle-base mx-auto mb-6">
              <MapPin />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{homeContent.where.items[1].title}</h3>
            <p className="text-foreground/80 leading-relaxed">
              {homeContent.where.items[1].description}
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/contacto" 
            className="text-link"
          >
            {homeContent.where.linkText}
          </Link>
        </div>
      </div>
    </section>
  )
} 