interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionTitleProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className="font-sans text-xs tracking-[0.25em] uppercase"
          style={{ color: light ? 'var(--color-caramel-light)' : 'var(--color-caramel)' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-serif leading-tight"
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)',
          color: light ? 'var(--color-cream)' : 'var(--color-coffee-dark)',
          fontWeight: 400,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="font-sans max-w-xl leading-relaxed"
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
            color: light ? 'var(--color-beige)' : 'var(--color-text-muted)',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
