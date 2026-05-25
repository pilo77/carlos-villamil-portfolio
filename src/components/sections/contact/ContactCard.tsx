import { Code2, FileText, Mail, MessageCircle, Network } from 'lucide-react'
import type { ContactIconName, ContactLink } from '../../../types'
import { ActionButton } from '../../ui/ActionButton'

interface ContactCardProps {
  link: ContactLink
}

const iconByName: Record<ContactIconName, typeof Code2> = {
  github: Code2,
  linkedin: Network,
  mail: Mail,
  whatsapp: MessageCircle,
  file: FileText,
}

export function ContactCard({ link }: ContactCardProps) {
  const Icon = iconByName[link.icon]

  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/50 p-3">
      <div className="mb-3 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-lg bg-teal-300/12 text-teal-200">
          <Icon size={19} aria-hidden="true" />
        </span>
        <p className="font-semibold text-white">{link.label}</p>
      </div>
      <ActionButton {...link} variant={link.href ? 'secondary' : 'ghost'} />
    </div>
  )
}
