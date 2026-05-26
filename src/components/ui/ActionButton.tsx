import type { ActionLink } from '../../types'
import { clsx } from 'clsx'
import { getSafeAnchorProps } from '../../utils/links'
import { AnchorButton } from './Button'
import { getButtonClassName, type ButtonVariant } from './buttonStyles'

interface ActionButtonProps extends ActionLink {
  variant?: ButtonVariant
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
          getButtonClassName({ variant }),
          'cursor-not-allowed border border-white/10 bg-white/5 text-slate-400',
        )}
      >
        {label}
      </span>
    )
  }

  return (
    <AnchorButton href={href} variant={variant} {...getSafeAnchorProps(href, newTab)}>
      {label}
    </AnchorButton>
  )
}
