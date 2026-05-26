import { Code2, FileText, Mail, MessageCircle, Network } from 'lucide-react'
import type { ContactIconName, ContactLink } from '../../types'
import { contactLinks } from '../../data/profile'
import { getSafeAnchorProps } from '../../utils/links'
import { Section } from '../ui/Section'

const iconByName: Record<ContactIconName, typeof Code2> = {
  file: FileText,
  github: Code2,
  linkedin: Network,
  mail: Mail,
  whatsapp: MessageCircle,
}

const priority = ['Correo', 'GitHub', 'LinkedIn', 'CV Español', 'WhatsApp', 'CV Inglés']

function ContactAction({ link }: { link: ContactLink }) {
  const Icon = iconByName[link.icon]
  const href = link.href
  const isDisabled = link.status === 'pending' || link.status === 'disabled' || !href
  const baseClass =
    'inline-flex min-h-12 items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold transition'

  if (isDisabled) {
    return (
      <span
        aria-disabled="true"
        className={`${baseClass} cursor-not-allowed border-white/10 bg-white/5 text-slate-500`}
        title={link.note}
      >
        <Icon size={18} aria-hidden="true" />
        {link.label}
      </span>
    )
  }

  return (
    <a
      className={`${baseClass} border-white/12 bg-white/8 text-slate-100 hover:border-teal-300/60 hover:bg-teal-300/10 hover:text-teal-100`}
      href={href}
      {...getSafeAnchorProps(href, link.newTab)}
    >
      <Icon size={18} aria-hidden="true" />
      {link.label}
    </a>
  )
}

export function Contact() {
  const orderedLinks = [...contactLinks].sort(
    (a, b) => priority.indexOf(a.label) - priority.indexOf(b.label),
  )

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Hablemos de práctica profesional, colaboración o roles junior"
    >
      <div className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.1),rgba(59,130,246,0.07)),rgba(15,23,42,0.78)] p-6 shadow-2xl shadow-slate-950/25 sm:p-8">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="max-w-2xl text-lg leading-8 text-slate-200">
              ¿Tienes una oportunidad de práctica, colaboración académica o rol junior? Estoy
              disponible para conversar y compartir más detalles de mis proyectos.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Prioridad de contacto: correo, GitHub y LinkedIn. WhatsApp queda como canal
              secundario.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {orderedLinks.map((link) => (
              <ContactAction key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
