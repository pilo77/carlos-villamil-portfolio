import type { ActionLink } from '../../types'
import { clsx } from 'clsx'

interface ActionButtonProps extends ActionLink {
  variant?: 'primary' | 'secondary' | 'ghost'
}

const baseClass =
  'inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition'

const variantClass = {
  primary: 'bg-teal-300 text-slate-950 shadow-lg shadow-teal-950/20 hover:bg-teal-200',
  secondary:
    'border border-white/15 bg-white/10 text-white hover:border-teal-300/60 hover:bg-white/15',
  ghost: 'text-slate-200 hover:text-teal-200',
}

export function ActionButton({
  label,
  href,
  status = 'available',
  note,
  newTab,
  variant = 'secondary',
}: ActionButtonProps) {
  if (status === 'disabled' || status === 'pending' || !href) {
    return (
      <span
        aria-disabled="true"
        title={note}
        className={clsx(
          baseClass,
          'cursor-not-allowed border border-white/10 bg-white/5 text-slate-400',
        )}
      >
        {label}
      </span>
    )
  }

  return (
    <a
      className={clsx(baseClass, variantClass[variant])}
      href={href}
      target={newTab || href.startsWith('http') ? '_blank' : undefined}
      rel={newTab || href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {label}
    </a>
  )
}
