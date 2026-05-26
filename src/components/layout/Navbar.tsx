import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, FileText, Menu, Network, X } from 'lucide-react'
import { SocialIconButton } from '../ui/SocialIconButton'

const navItems = [
  ['Proyectos', '#proyectos'],
  ['RematePOS', '#caso-rematepos'],
  ['Habilidades', '#habilidades'],
  ['Certificaciones', '#certificaciones'],
  ['Formación', '#experiencia'],
  ['Contacto', '#contacto'],
]

const quickLinks = [
  {
    href: 'https://github.com/pilo77',
    icon: Code2,
    label: 'GitHub',
    newTab: true,
  },
  {
    href: 'https://www.linkedin.com/in/carlos-andres-villamil-yusunguaira',
    icon: Network,
    label: 'LinkedIn',
    newTab: true,
  },
  {
    href: '/cv/CV_Carlos_Andres_Villamil_Yusunguaira_ES.pdf',
    icon: FileText,
    label: 'CV Español',
    newTab: true,
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/72 shadow-lg shadow-slate-950/15 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <a
          className="flex items-center gap-3 text-sm font-semibold text-white"
          href="#inicio"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-xl bg-teal-300 text-xs font-black tracking-tight text-slate-950 shadow-[0_12px_35px_rgba(45,212,191,0.22)]">
            CAV
          </span>
          <span>Carlos Villamil</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {quickLinks.map(({ href, icon: Icon, label, newTab }) => (
            <SocialIconButton
              href={href}
              icon={Icon}
              key={label}
              label={label}
              newTab={newTab}
              size="sm"
            />
          ))}
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/8 text-white transition hover:border-teal-300/50 hover:bg-white/12 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-slate-950/95 px-5 py-4 shadow-2xl shadow-slate-950/40 md:hidden"
          id="mobile-navigation"
          initial={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map(([label, href]) => (
              <a
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/8 hover:text-white"
                href={href}
                key={href}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}

            <div className="mt-3 flex justify-between gap-3 border-t border-white/10 pt-4">
              {quickLinks.map(({ href, icon: Icon, label, newTab }) => (
                <SocialIconButton
                  href={href}
                  icon={Icon}
                  key={label}
                  label={label}
                  newTab={newTab}
                  onClick={() => setIsOpen(false)}
                  size="sm"
                />
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}
