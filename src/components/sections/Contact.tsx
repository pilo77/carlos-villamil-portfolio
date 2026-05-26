import { Code2, FileText, Mail, MessageCircle, Network } from 'lucide-react'
import type { ContactIconName, ContactLink } from '../../types'
import { contactLinks } from '../../data/profile'
import { ActionButton } from '../ui/ActionButton'
import { Section } from '../ui/Section'
import { SocialIconButton } from '../ui/SocialIconButton'

const iconByName: Record<ContactIconName, typeof Code2> = {
  file: FileText,
  github: Code2,
  linkedin: Network,
  mail: Mail,
  whatsapp: MessageCircle,
}

const dockLabels = ['Correo', 'GitHub', 'LinkedIn', 'WhatsApp']

function getContactLink(label: string) {
  return contactLinks.find((link) => link.label === label)
}

function ContactDockButton({ link }: { link: ContactLink }) {
  const Icon = iconByName[link.icon]
  const isDisabled = link.status === 'pending' || link.status === 'disabled' || !link.href

  return (
    <SocialIconButton
      disabled={isDisabled}
      href={link.href}
      icon={Icon}
      label={link.label}
      newTab={link.newTab}
      note={link.note}
    />
  )
}

export function Contact() {
  const dockLinks = dockLabels
    .map((label) => getContactLink(label))
    .filter((link): link is ContactLink => Boolean(link))
  const cvSpanish = getContactLink('CV Español')
  const cvEnglish = getContactLink('CV Inglés')

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Hablemos de práctica profesional, colaboración o roles junior"
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.1),rgba(59,130,246,0.07)),rgba(15,23,42,0.76)] p-5 shadow-2xl shadow-slate-950/25 sm:p-7">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              ¿Tienes una oportunidad de práctica, colaboración académica o rol junior? Estoy
              disponible para conversar y compartir más detalles de mis proyectos.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Correo y LinkedIn son los canales principales; WhatsApp queda como opción secundaria.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <div className="flex flex-wrap gap-3 rounded-full border border-white/10 bg-slate-950/42 p-2">
              {dockLinks.map((link) => (
                <ContactDockButton key={link.label} link={link} />
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {cvSpanish ? (
                <ActionButton
                  href={cvSpanish.href}
                  label="CV Español"
                  newTab={cvSpanish.newTab}
                  variant="outline"
                />
              ) : null}
              {cvEnglish ? (
                <ActionButton
                  label="CV Inglés"
                  note={cvEnglish.note}
                  status={cvEnglish.status}
                  variant="ghost"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
