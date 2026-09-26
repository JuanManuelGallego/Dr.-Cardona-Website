import { User, Users, UsersRound, type LucideIcon } from 'lucide-react'
import Link from "next/link";
import { homeContent } from '@/content/text'

const patientIcons: Record<string, LucideIcon> = {
  User,
  Users,
  UserGroup: UsersRound,
}

export default function Patients() {
  return (
    <section id="patients" className="py-20 section-bg-muted">
      <div className="container text-center">
        <div className="section-title">
          <h2>{homeContent.patients.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {homeContent.patients.items.map((item) => {
            const Icon = patientIcons[ item.icon ] ?? User

            return (
              <div key={item.title} className="card-base card-hover p-8 text-center">
                <div className="icon-circle-base mx-auto mb-6">
                  <Icon />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
        <Link
          href="/servicios"
          className="text-link"
        >
          {homeContent.patients.linkText}
        </Link>
      </div>
    </section>
  )
} 