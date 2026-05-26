import type { ReactNode } from 'react'
import type { ButtonVariant } from './buttonStyles'
import { ExternalLink } from 'lucide-react'
import { clsx } from 'clsx'
import { AnchorButton } from './Button'
import { getSafeAnchorProps } from '../../utils/links'

interface ExternalLinkButtonProps {
  href: string
  label: string
  newTab?: boolean
  variant?: ButtonVariant
  className?: string
  icon?: ReactNode
}

export function ExternalLinkButton({
  href,
  label,
  newTab = true,
  variant = 'secondary',
  className,
  icon,
}: ExternalLinkButtonProps) {
  return (
    <AnchorButton
      className={clsx('whitespace-nowrap', className)}
      href={href}
      size="sm"
      variant={variant}
      {...getSafeAnchorProps(href, newTab)}
    >
      {icon ?? <ExternalLink size={14} aria-hidden="true" />}
      {label}
    </AnchorButton>
  )
}
