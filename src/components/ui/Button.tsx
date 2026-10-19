import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm shadow-primary/15 border border-transparent',
  secondary: 'bg-white text-primary border border-border hover:border-secondary/50 hover:bg-surface',
  ghost: 'bg-transparent text-primary hover:bg-surface border border-transparent',
}

type ButtonAsButton = { children: ReactNode; variant?: Variant; className?: string; href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>
type ButtonAsLink = { children: ReactNode; variant?: Variant; className?: string; href: string } & AnchorHTMLAttributes<HTMLAnchorElement>
export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-button)] px-6 py-2.5 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60'
  const classes = `${base} ${variantClasses[variant]} ${className}`
  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (<a href={href} className={classes} {...rest}>{children}</a>)
  }
  const { type = 'button', ...buttonProps } = props as ButtonAsButton
  return <button type={type} className={classes} {...buttonProps}>{children}</button>
}
