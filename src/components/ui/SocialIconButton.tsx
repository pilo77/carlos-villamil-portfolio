import type { LucideIcon } from 'lucide-react'
import { clsx } from 'clsx'
import { getSafeAnchorProps } from '../../utils/links'

interface SocialIconButtonProps {
  disabled?: boolean
  href?: string
  icon: LucideIcon
  label: string
  newTab?: boolean
  note?: string
  onClick?: () => void
  size?: 'md' | 'sm'
}

const sizeClass = {
  md: 'size-12',
  sm: 'size-10',
}

const iconSize = {
  md: 19,
  sm: 17,
}

const baseClass =
  'group relative inline-grid shrink-0 place-items-center rounded-full border transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300'

export function SocialIconButton({
  disabled = false,
  href,
  icon: Icon,
  label,
  newTab,
  note,
  onClick,
  size = 'md',
}: SocialIconButtonProps) {
  const className = clsx(
    baseClass,
    sizeClass[size],
    disabled || !href
      ? 'cursor-not-allowed border-white/10 bg-white/5 text-slate-500'
      : 'border-white/12 bg-slate-950/55 text-slate-200 shadow-lg shadow-slate-950/20 hover:-translate-y-1 hover:border-teal-300/65 hover:bg-teal-300/10 hover:text-teal-100 hover:shadow-[0_18px_55px_rgba(45,212,191,0.18)]',
  )

  const content = (
    <>
      <Icon size={iconSize[size]} aria-hidden="true" />
      <span className="pointer-events-none absolute -bottom-9 left-1/2 z-20 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/95 px-2.5 py-1 text-xs font-medium text-slate-200 shadow-xl shadow-slate-950/40 group-hover:block group-focus-visible:block">
        {label}
      </span>
    </>
  )

  if (disabled || !href) {
    return (
      <span aria-disabled="true" aria-label={label} className={className} title={note ?? label}>
        {content}
      </span>
    )
  }

  return (
    <a
      aria-label={label}
      className={className}
      href={href}
      onClick={onClick}
      title={label}
      {...getSafeAnchorProps(href, newTab)}
    >
      {content}
    </a>
  )
}
