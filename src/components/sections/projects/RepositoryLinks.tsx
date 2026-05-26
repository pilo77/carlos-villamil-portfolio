import { Code2 } from 'lucide-react'
import type { RepositoryLink } from '../../../types'
import { getSafeAnchorProps } from '../../../utils/links'

interface RepositoryLinksProps {
  repositories: RepositoryLink[]
}

export function RepositoryLinks({ repositories }: RepositoryLinksProps) {
  return (
    <details className="group/repos mt-5 rounded-xl border border-white/10 bg-slate-950/45">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-white transition hover:text-teal-100">
        <span className="inline-flex items-center gap-2">
          <Code2 size={16} aria-hidden="true" className="text-teal-200" />
          Repositorios
        </span>
        <span className="text-xs text-slate-400 group-open/repos:hidden">Ver opciones</span>
        <span className="hidden text-xs text-slate-400 group-open/repos:inline">Cerrar</span>
      </summary>
      <div className="grid gap-2 border-t border-white/10 p-3 sm:grid-cols-2">
        {repositories.map((repo) =>
          repo.status === 'available' ? (
            <a
              className="rounded-lg border border-white/10 bg-white/7 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-teal-300/45 hover:bg-teal-300/10 hover:text-teal-100"
              href={repo.url}
              key={repo.label}
              {...getSafeAnchorProps(repo.url, true)}
            >
              {repo.label}
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-500"
              key={repo.label}
              title={repo.note}
            >
              {repo.label}: pendiente
            </span>
          ),
        )}
      </div>
    </details>
  )
}
