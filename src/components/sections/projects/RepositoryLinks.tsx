import type { RepositoryLink } from '../../../types'
import { ActionButton } from '../../ui/ActionButton'

interface RepositoryLinksProps {
  repositories: RepositoryLink[]
}

export function RepositoryLinks({ repositories }: RepositoryLinksProps) {
  return (
    <div className="mt-5 rounded-lg border border-white/10 bg-slate-950/45 p-4">
      <p className="text-sm font-semibold text-white">Repositorios del proyecto</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {repositories.map((repo) =>
          repo.status === 'available' ? (
            <ActionButton
              href={repo.url}
              key={repo.label}
              label={repo.label}
              newTab
              variant="secondary"
            />
          ) : (
            <span
              aria-disabled="true"
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400"
              key={repo.label}
              title={repo.note}
            >
              {repo.label}: Repositorio pendiente
            </span>
          ),
        )}
      </div>
    </div>
  )
}
