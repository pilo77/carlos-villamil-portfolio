import { clsx } from 'clsx'

type StatusTone = 'accent' | 'neutral' | 'success' | 'warning' | 'muted'

interface StatusBadgeProps {
  label: string
  tone?: StatusTone
}

const toneClass: Record<StatusTone, string> = {
  accent: 'border-teal-300/25 bg-teal-300/12 text-teal-100',
  neutral: 'border-white/10 bg-white/6 text-slate-200',
  success: 'border-emerald-300/25 bg-emerald-300/12 text-emerald-100',
  warning: 'border-amber-300/25 bg-amber-300/12 text-amber-100',
  muted: 'border-slate-700 bg-slate-900/85 text-slate-300',
}

export function StatusBadge({ label, tone = 'neutral' }: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] leading-none',
        toneClass[tone],
      )}
    >
      {label}
    </span>
  )
}
