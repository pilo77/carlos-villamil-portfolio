import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { getButtonClassName, type ButtonVariant } from './buttonStyles'

type ButtonSize = 'sm' | 'md'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: ButtonSize
  variant?: ButtonVariant
}

export function Button({ children, className, size, variant, ...props }: ButtonProps) {
  return (
    <button className={getButtonClassName({ className, size, variant })} type="button" {...props}>
      {children}
    </button>
  )
}

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  size?: ButtonSize
  variant?: ButtonVariant
}

export function AnchorButton({ children, className, size, variant, ...props }: AnchorButtonProps) {
  return (
    <a className={getButtonClassName({ className, size, variant })} {...props}>
      {children}
    </a>
  )
}
