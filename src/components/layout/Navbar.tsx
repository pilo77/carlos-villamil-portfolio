import { useState } from 'react'
import { Code2, Menu, X } from 'lucide-react'

const navItems = [
  ['Sobre mí', '#sobre-mi'],
  ['Proyectos', '#proyectos'],
  ['Habilidades', '#habilidades'],
  ['Certificaciones', '#certificaciones'],
  ['Contacto', '#contacto'],
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/78 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Navegación principal"
      >
        <a
          className="flex items-center gap-3 text-sm font-semibold text-white"
          href="#inicio"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-lg bg-teal-300 text-slate-950">
            <Code2 size={20} aria-hidden="true" />
          </span>
          <span>CAVY.dev</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, href]) => (
            <a
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </div>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/8 text-white transition hover:border-teal-300/50 hover:bg-white/12 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>
      {isOpen ? (
        <div
          className="border-t border-white/10 bg-slate-950/95 px-5 py-4 shadow-2xl shadow-slate-950/40 md:hidden"
          id="mobile-navigation"
        >
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map(([label, href]) => (
              <a
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/8 hover:text-white"
                href={href}
                key={href}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
