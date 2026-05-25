import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Carlos Andrés Villamil Yusunguaira. Built with React, TypeScript and Vite.</p>
        <a
          className="inline-flex items-center gap-2 font-semibold text-teal-200 hover:text-teal-100"
          href="#inicio"
        >
          <ArrowUp size={16} aria-hidden="true" />
          Volver arriba
        </a>
      </div>
    </footer>
  )
}
