import { ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiCredly } from 'react-icons/si'
import { socialLinks } from '../../data/profile'
import { SocialIconButton } from '../ui/SocialIconButton'

const socialIconByLabel = {
  Credly: SiCredly,
  Email: MdEmail,
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  WhatsApp: FaWhatsapp,
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-teal-300 text-xs font-black tracking-tight text-slate-950">
            CAV
          </span>
          <div>
            <p className="font-semibold text-slate-200">Carlos Villamil</p>
            <p>© 2026 Carlos Andrés Villamil Yusunguaira. Built with React, TypeScript and Vite.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => {
              const Icon = socialIconByLabel[link.label as keyof typeof socialIconByLabel]

              return Icon ? (
                <SocialIconButton
                  href={link.href}
                  icon={Icon}
                  key={link.label}
                  label={link.label}
                  newTab={link.newTab}
                  size="sm"
                />
              ) : null
            })}
          </div>
          <a
            className="inline-flex items-center gap-2 font-semibold text-teal-200 hover:text-teal-100"
            href="#inicio"
          >
            <ArrowUp size={16} aria-hidden="true" />
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  )
}
