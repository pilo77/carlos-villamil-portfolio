import type { ActionLink } from '../../types'
import { clsx } from 'clsx'
import { getSafeAnchorProps } from '../../utils/links'
import { AnchorButton } from './Button'
import { getButtonClassName, type ButtonVariant } from './buttonStyles'

interface ActionButtonProps extends ActionLink {
  variant?: ButtonVariant
  className?: string
}

export function ActionButton({
  label,
  href,
  status = 'available',
  note,
  newTab,
  variant = 'secondary',
  className,
}: ActionButtonProps) {
  if (status === 'disabled' || status === 'pending' || !href) {
    return (
      <span
        aria-disabled="true"
        title={note}
        className={clsx(
          getButtonClassName({ variant }),
          className,
          'cursor-not-allowed border border-white/10 bg-white/5 text-slate-400',
        )}
      >
        {label}
      </span>
    )
  }

  return (
    <AnchorButton className={className} href={href} variant={variant} {...getSafeAnchorProps(href, newTab)}>
      {label}
    </AnchorButton>
  )
}
