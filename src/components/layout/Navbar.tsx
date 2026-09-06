import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/croustille-club', label: 'Croustille Club' },
  { to: '/our-menu', label: 'Our Menu' },
  { to: '/whats-new', label: "What's New" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  const handleClose = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: isScrolled ? 'rgba(253, 250, 246, 0.96)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(232, 216, 196, 0.4)' : '1px solid transparent',
        }}
      >
        <div className="container grid grid-cols-[1fr_auto_1fr] items-center py-4">
          {/* Logo — brand image mark */}
          <Link
            to="/"
            className="flex-shrink-0 justify-self-start"
            aria-label="Croustille home"
          >
            <img
              src="/images/Logo.png"
              alt="Croustille"
              className="transition-all duration-300"
              style={{
                height: 'clamp(40px, 5vw, 60px)',
                width: 'auto',
                transform: 'scale(3.5)',
                transformOrigin: 'left center',
                filter: isScrolled
                  ? 'brightness(0) saturate(100%) invert(8%) sepia(60%) saturate(700%) hue-rotate(10deg) brightness(50%)'
                  : 'brightness(0) invert(1)',
              }}
            />
          </Link>

          {/* Desktop Navigation — perfectly centered */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link-underline font-sans text-sm tracking-wide transition-colors duration-300 ${isActive ? 'active' : ''
                  }`
                }
                style={({ isActive }) => ({
                  color: isScrolled
                    ? isActive
                      ? 'var(--color-caramel)'
                      : 'var(--color-coffee-dark)'
                    : 'var(--color-cream)',
                  fontWeight: isActive ? 500 : 400,
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Book a Seat CTA + Mobile Toggle */}
          <div className="flex items-center gap-4 justify-self-end">
            <Link
              to="/our-menu"
              className="hidden lg:inline-flex items-center px-6 py-2.5 text-xs font-sans tracking-widest uppercase transition-all duration-300 hover:opacity-80 active:scale-95"
              style={{
                border: isScrolled
                  ? '1px solid var(--color-coffee-dark)'
                  : '1px solid rgba(253, 250, 246, 0.6)',
                color: isScrolled ? 'var(--color-coffee-dark)' : 'var(--color-cream)',
              }}
            >
              Book a Seat
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 transition-colors duration-300"
              aria-label="Open menu"
              style={{ color: isScrolled ? 'var(--color-coffee-dark)' : 'var(--color-cream)' }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ backgroundColor: 'rgba(26,3,4, 0.6)' }}
              onClick={handleClose}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-80 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ backgroundColor: 'var(--color-coffee-dark)' }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: 'rgba(245, 237, 224, 0.1)' }}>
                <img
                  src="/images/logo.jpg"
                  alt="Croustille"
                  style={{
                    height: '36px',
                    width: 'auto',
                    filter: 'brightness(0) invert(1)',
                  }}
                />
                <button
                  onClick={handleClose}
                  className="flex items-center justify-center w-10 h-10 transition-colors hover:opacity-70"
                  aria-label="Close menu"
                  style={{ color: 'var(--color-cream)' }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col px-8 py-8 gap-6 flex-1" aria-label="Mobile navigation">
                {navLinks.map(({ to, label }, index) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      onClick={handleClose}
                      className={({ isActive }) =>
                        `font-sans text-2xl tracking-wide transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                        }`
                      }
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)', fontWeight: 300, letterSpacing: '0.04em' }}
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-8 pb-10">
                <Link
                  to="/our-menu"
                  onClick={handleClose}
                  className="block w-full text-center py-3 font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:opacity-80"
                  style={{
                    border: '1px solid rgba(245, 237, 224, 0.4)',
                    color: 'var(--color-cream)',
                  }}
                >
                  Book a Seat
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
