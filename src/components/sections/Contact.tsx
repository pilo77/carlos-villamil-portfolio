import type { IconType } from 'react-icons'
import { FaFilePdf, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiCredly } from 'react-icons/si'
import type { ContactIconName, ContactLink } from '../../types'
import { contactLinks } from '../../data/profile'
import { Section } from '../ui/Section'
import { SocialIconButton } from '../ui/SocialIconButton'

const iconByName: Record<ContactIconName, IconType> = {
  credly: SiCredly,
  file: FaFilePdf,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: MdEmail,
  whatsapp: FaWhatsapp,
}

const dockLabels = ['Correo', 'GitHub', 'LinkedIn', 'Credly', 'WhatsApp', 'CV Español']

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

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Hablemos de práctica profesional, colaboración o roles junior"
    >
      <div className="grid gap-6 border-y border-white/10 py-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            ¿Tienes una oportunidad de práctica, colaboración académica o rol junior? Estoy
            disponible para conversar y compartir más detalles de mis proyectos.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Correo y LinkedIn son los canales principales; WhatsApp queda como opción secundaria.
          </p>
        </div>

        <div className="inline-flex max-w-full flex-wrap justify-center gap-3 rounded-full border border-white/10 bg-slate-950/55 p-2 shadow-2xl shadow-slate-950/25 lg:justify-end">
          {dockLinks.map((link) => (
            <ContactDockButton key={link.label} link={link} />
          ))}
        </div>
      </div>
    </Section>
  )
}
