import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { QuoteCarousel } from '../components/quotes/QuoteCarousel';
import { Footer } from '../components/layout/Footer';
import whatsNewItems from '../data/whatsNew';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const categoryColors: Record<string, string> = {
  'New Drink': 'var(--color-caramel)',
  Seasonal: 'var(--color-matcha)',
  Event: 'var(--color-coffee-mid)',
  Beans: 'var(--color-tea)',
  Shop: 'var(--color-caramel-light)',
};

export function WhatsNew() {
  const pageRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.wn-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          delay: i * 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  // Feature items (large) and regular items
  const features = whatsNewItems.filter((item) => item.isFeature);
  const regular = whatsNewItems.filter((item) => !item.isFeature);

  return (
    <PageTransition>
      <div ref={pageRef}>
        {/* Hero */}
        <section
          className="relative pt-32 pb-16 overflow-hidden"
          style={{ backgroundColor: 'var(--color-coffee-dark)' }}
          aria-labelledby="wn-hero-heading"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'url(/images/hero-bg.jpg)', backgroundSize: 'cover' }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(26,3,4,0.8) 0%, rgba(26,3,4,1) 100%)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 container">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-5" style={{ color: 'var(--color-caramel)' }}>
              September 2026
            </p>
            <h1
              id="wn-hero-heading"
              className="font-serif leading-tight max-w-3xl"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3rem, 8vw, 8rem)',
                color: 'var(--color-cream)',
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              What's New.
            </h1>
          </div>
        </section>

        {/* Featured Items */}
        {features.length > 0 && (
          <section
            className="py-16 lg:py-20"
            style={{ backgroundColor: 'var(--color-white)' }}
            aria-labelledby="featured-heading"
          >
            <div className="container">
              <p
                className="font-sans text-xs tracking-[0.3em] uppercase mb-10"
                style={{ color: 'var(--color-caramel)' }}
              >
                Featured
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {features.map((item) => (
                  <article
                    key={item.id}
                    className="wn-card flex flex-col overflow-hidden card-hover"
                    style={{ border: '1px solid var(--color-beige)' }}
                  >
                    <div className="img-zoom overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 lg:p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="font-sans text-xs px-2.5 py-1 tracking-wider"
                          style={{
                            backgroundColor: categoryColors[item.category] ?? 'var(--color-caramel)',
                            color: 'var(--color-white)',
                          }}
                        >
                          {item.category}
                        </span>
                        <span className="font-sans text-xs" style={{ color: 'var(--color-text-muted)' }}>
                          {item.date}
                        </span>
                      </div>
                      <h2
                        className="font-serif text-2xl lg:text-3xl mb-3"
                        style={{
                          fontFamily: 'var(--font-serif)',
                          color: 'var(--color-coffee-dark)',
                          fontWeight: 400,
                          lineHeight: 1.2,
                          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        }}
                      >
                        {item.title}
                      </h2>
                      <p
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Items */}
        <section
          className="py-16 lg:py-20"
          style={{ backgroundColor: 'var(--color-cream)' }}
          aria-labelledby="updates-heading"
        >
          <div className="container">
            <p
              className="font-sans text-xs tracking-[0.3em] uppercase mb-10"
              id="updates-heading"
              style={{ color: 'var(--color-caramel)' }}
            >
              All Updates
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map((item, index) => (
                <motion.article
                  key={item.id}
                  className="wn-card flex flex-col overflow-hidden card-hover"
                  style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-beige)' }}
                  initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                  whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.07, duration: 0.55 }}
                >
                  <div className="img-zoom overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="font-sans text-xs px-2.5 py-1 tracking-wider"
                        style={{
                          backgroundColor: categoryColors[item.category] ?? 'var(--color-caramel)',
                          color: 'var(--color-white)',
                        }}
                      >
                        {item.category}
                      </span>
                      <span className="font-sans text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {item.date}
                      </span>
                    </div>
                    <h3
                      className="font-serif text-xl mb-2"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        color: 'var(--color-coffee-dark)',
                        fontWeight: 400,
                        lineHeight: 1.2,
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <QuoteCarousel />
        <Footer />
      </div>
    </PageTransition>
  );
}

export default WhatsNew;
