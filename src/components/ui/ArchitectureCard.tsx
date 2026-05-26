import type { LucideIcon } from 'lucide-react'
import { clsx } from 'clsx'
import type { ButtonVariant } from './buttonStyles'
import { ExternalLinkButton } from './ExternalLinkButton'
import { StatusBadge } from './StatusBadge'

interface ArchitectureCardProps {
  icon: LucideIcon
  title: string
  description: string
  state: string
  href?: string
  ctaLabel?: string
  ctaVariant?: ButtonVariant
}

export function ArchitectureCard({
  icon: Icon,
  title,
  description,
  state,
  href,
  ctaLabel,
  ctaVariant = 'secondary',
}: ArchitectureCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/52 p-4 shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:border-teal-300/30 hover:bg-slate-950/70">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/6 text-teal-200 transition group-hover:border-teal-300/30 group-hover:bg-teal-300/10">
            <Icon size={18} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-white">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
          </div>
        </div>
        <StatusBadge label={state} tone="accent" />
      </div>

      <div className={clsx('mt-auto pt-4', href && ctaLabel ? 'flex' : 'hidden')}>
        {href && ctaLabel ? (
          <ExternalLinkButton
            href={href}
            label={ctaLabel}
            newTab={!href.startsWith('#')}
            variant={ctaVariant}
          />
        ) : null}
      </div>
    </article>
  )
}
