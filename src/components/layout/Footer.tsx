import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/our-menu', label: 'Our Menu' },
  { to: '/croustille-club', label: 'Croustille Club' },
  { to: '/whats-new', label: "What's New" },
];

/* ─── Inline SVG icons to avoid external deps ─────────────────────────── */
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTelegram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.264 5.633L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--color-coffee-dark)', color: 'var(--color-cream)' }}>
      {/* Main Footer Grid */}
      <div className="container py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Logo + Socials */}
          <div className="flex flex-col">
            <Link to="/" aria-label="Croustille home" className="mb-6 block">
              <img
                src="/images/Logo.png"
                alt="Croustille"
                style={{
                  height: '44px',
                  width: 'auto',
                  transform: 'scale(2.4)',
                  transformOrigin: 'left center',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-10">
              {[
                { href: 'https://instagram.com', label: 'Instagram', icon: <IconInstagram /> },
                { href: 'https://t.me', label: 'Telegram', icon: <IconTelegram /> },
                { href: 'https://x.com', label: 'X', icon: <IconX /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Croustille on ${label}`}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:opacity-100"
                  style={{
                    border: '1px solid rgba(245, 237, 224, 0.25)',
                    color: 'var(--color-cream)',
                    opacity: 0.7,
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Main Office */}
          <div>
            <h3
              className="font-sans text-xs tracking-[0.22em] uppercase mb-5"
              style={{ color: 'var(--color-cream)', opacity: 0.5 }}
            >
              Main Office
            </h3>
            <div className="flex flex-col gap-2">
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: 'var(--color-cream)', opacity: 0.65 }}
              >
                12 Rue de la Café,<br />
                Bandra West, Mumbai — 400050
              </p>
              <a
                href="tel:+919876543210"
                className="font-sans text-sm transition-opacity duration-200 hover:opacity-100"
                style={{ color: 'var(--color-cream)', opacity: 0.65 }}
              >
                +91 98765 43210
              </a>
              <a
                href="mailto:hello@croustille.in"
                className="font-sans text-sm transition-opacity duration-200 hover:opacity-100"
                style={{ color: 'var(--color-cream)', opacity: 0.65 }}
              >
                hello@croustille.in
              </a>
            </div>

            <p
              className="font-sans text-xs mt-6"
              style={{ color: 'var(--color-cream)', opacity: 0.35 }}
            >
              © {new Date().getFullYear()} Croustille. All rights reserved.
            </p>
          </div>

          {/* Column 3 — Navigation */}
          <div>
            <h3
              className="font-sans text-xs tracking-[0.22em] uppercase mb-5"
              style={{ color: 'var(--color-cream)', opacity: 0.5 }}
            >
              Navigation
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-sans text-sm transition-opacity duration-200 hover:opacity-100 w-fit"
                  style={{ color: 'var(--color-cream)', opacity: 0.65 }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 — Subscribe */}
          <div>
            <h3
              className="font-sans text-xs tracking-[0.22em] uppercase mb-5"
              style={{ color: 'var(--color-cream)', opacity: 0.5 }}
            >
              Subscribe to News
            </h3>

            {submitted ? (
              <p className="font-sans text-sm" style={{ color: 'var(--color-cream)', opacity: 0.65 }}>
                Thank you for subscribing! ☕
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate>
                {/* Email input row */}
                <div
                  className="flex items-center mb-4"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(245, 237, 224, 0.15)',
                  }}
                >
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="flex-1 bg-transparent font-sans text-sm px-4 py-2.5 outline-none placeholder-opacity-40"
                    style={{
                      color: 'var(--color-cream)',
                      fontSize: '0.8rem',
                    }}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex items-center justify-center w-10 h-10 flex-shrink-0 transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                  >
                    <ArrowRight size={14} style={{ color: 'var(--color-cream)' }} />
                  </button>
                </div>

                {/* Privacy checkbox */}
                <label className="flex items-start gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 flex-shrink-0 cursor-pointer"
                    style={{ accentColor: 'var(--color-caramel)' }}
                  />
                  <span
                    className="font-sans text-xs leading-relaxed"
                    style={{ color: 'var(--color-cream)', opacity: 0.5 }}
                  >
                    I have read and agree with the{' '}
                    <Link
                      to="/privacy"
                      className="underline underline-offset-2 transition-opacity hover:opacity-100"
                      style={{ color: 'var(--color-cream)', opacity: 0.85 }}
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </form>
            )}

            {/* Privacy Policy link — bottom right */}
            <div className="mt-8 text-right">
              <Link
                to="/privacy"
                className="font-sans text-xs transition-opacity hover:opacity-100"
                style={{ color: 'var(--color-cream)', opacity: 0.4 }}
              >
                Privacy policy
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
