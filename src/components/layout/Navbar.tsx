import { Code2 } from 'lucide-react'

const navItems = [
  ['Sobre mí', '#sobre-mi'],
  ['Proyectos', '#proyectos'],
  ['Habilidades', '#habilidades'],
  ['Certificaciones', '#certificaciones'],
  ['Contacto', '#contacto'],
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/78 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Navegación principal"
      >
        <a className="flex items-center gap-3 text-sm font-semibold text-white" href="#inicio">
          <span className="grid size-9 place-items-center rounded-lg bg-teal-300 text-slate-950">
            <Code2 size={20} aria-hidden="true" />
          </span>
          <span>CAVY</span>
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
      </nav>
    </header>
  )
}
