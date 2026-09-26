import { Phone, Mail, MessageCircle, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { homeContent } from '@/content/text'
import { InstagramIcon } from '@/components/Footer'

const contactMethodIcons: Record<string, LucideIcon> = {
  Phone,
  MessageCircle,
  Instagram: InstagramIcon as unknown as LucideIcon,
  Mail,
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 section-bg-muted">
      <div className="container">
        <div className="section-title">
          <h2>{homeContent.contact.title}</h2>
        </div>

        <div className="text-center">
          <p className="text-lg mb-10 text-foreground/85 max-w-2xl mx-auto">
            {homeContent.contact.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {homeContent.contact.methods.map((method) => {
              const Icon = contactMethodIcons[ method.icon ] ?? Phone
              const isExternal = method.icon === 'MessageCircle' || method.icon === 'Instagram'
              return (
                <a
                  key={method.link}
                  href={method.link}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="card-base card-hover p-6 flex flex-col items-center"
                >
                  <div className="icon-circle-base mx-auto mb-4" style={{ width: '3rem', height: '3rem' }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-sm break-words text-muted-foreground">{method.contact}</p>
                </a>
              )
            })}
          </div>

          <Link
            href="/contacto"
            className="text-link"
          >
            {homeContent.contact.linkText}
          </Link>
        </div>
      </div>
    </section>
  )
} 