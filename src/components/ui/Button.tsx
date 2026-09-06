import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 cursor-pointer select-none';

  const sizes: Record<string, string> = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  const variants: Record<string, string> = {
    primary:
      'bg-[var(--color-coffee-dark)] text-[var(--color-cream)] hover:bg-[var(--color-coffee)] active:scale-95',
    secondary:
      'bg-[var(--color-caramel)] text-[var(--color-white)] hover:bg-[var(--color-caramel-light)] active:scale-95',
    ghost:
      'bg-transparent text-[var(--color-coffee-dark)] hover:bg-[var(--color-cream)] active:scale-95',
    outline:
      'border border-current bg-transparent text-[var(--color-coffee-dark)] hover:bg-[var(--color-coffee-dark)] hover:text-[var(--color-cream)] active:scale-95',
  };

  const classes = [base, sizes[size], variants[variant], className].join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
