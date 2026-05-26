import { clsx } from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

type ButtonSize = 'sm' | 'md'

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 disabled:pointer-events-none disabled:opacity-50'

const sizeClass: Record<ButtonSize, string> = {
  md: 'min-h-11 px-5 py-2.5 text-sm',
  sm: 'min-h-10 px-4 py-2 text-sm',
}

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-teal-300 text-slate-950 shadow-[0_16px_45px_rgba(45,212,191,0.18)] hover:-translate-y-0.5 hover:bg-teal-200 hover:shadow-[0_20px_60px_rgba(45,212,191,0.28)]',
  secondary:
    'border border-white/12 bg-white/10 text-white shadow-lg shadow-slate-950/20 hover:-translate-y-0.5 hover:border-teal-300/50 hover:bg-white/14',
  outline:
    'border border-teal-300/35 bg-teal-300/5 text-teal-100 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-300/12',
  ghost: 'text-slate-200 hover:-translate-y-0.5 hover:bg-white/8 hover:text-teal-100',
}

export function getButtonClassName({
  className,
  size = 'md',
  variant = 'secondary',
}: {
  className?: string
  size?: ButtonSize
  variant?: ButtonVariant
}) {
  return clsx(baseClass, sizeClass[size], variantClass[variant], className)
}
