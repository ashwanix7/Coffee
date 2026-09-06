import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { QuoteCarousel } from '../components/quotes/QuoteCarousel';
import { Footer } from '../components/layout/Footer';
import menuItems, { menuCategories } from '../data/menuItems';
import type { MenuCategory } from '../data/menuItems';

export function OurMenu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <PageTransition>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ backgroundColor: 'var(--color-coffee-dark)' }}
        aria-labelledby="menu-hero-heading"
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
        <div className="relative z-10 container text-center pb-8">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-5" style={{ color: 'var(--color-caramel)' }}>
            What we serve
          </p>
          <h1
            id="menu-hero-heading"
            className="font-serif leading-tight"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              color: 'var(--color-cream)',
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Our Menu.
          </h1>
        </div>
      </section>

      {/* Menu */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: 'var(--color-white)' }}
        aria-labelledby="menu-heading"
      >
        <div className="container">
          {/* Category Filter */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12 lg:mb-16" role="tablist" aria-label="Menu categories">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className="font-sans text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-300 focus-visible:outline-2"
                style={{
                  backgroundColor: activeCategory === cat ? 'var(--color-coffee-dark)' : 'transparent',
                  color: activeCategory === cat ? 'var(--color-cream)' : 'var(--color-text-muted)',
                  border: activeCategory === cat ? '1px solid var(--color-coffee-dark)' : '1px solid var(--color-beige)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5"
            >
              {filtered.map((item) => (
                <article
                  key={item.id}
                  className="flex w-full max-w-sm flex-col card-hover overflow-hidden text-center"
                  style={{ border: '1px solid var(--color-beige)' }}
                >
                  {/* Image */}
                  <div className="relative img-zoom overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {/* Badges */}
                    {(item.isNew || item.isBestseller) && (
                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        {item.isNew && (
                          <span
                            className="font-sans text-xs px-2.5 py-1 tracking-wider"
                            style={{ backgroundColor: 'var(--color-caramel)', color: 'var(--color-white)' }}
                          >
                            New
                          </span>
                        )}
                        {item.isBestseller && (
                          <span
                            className="font-sans text-xs px-2.5 py-1 tracking-wider"
                            style={{ backgroundColor: 'var(--color-coffee-dark)', color: 'var(--color-cream)' }}
                          >
                            Bestseller
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col items-center flex-1 p-5">
                    <span
                      className="font-sans text-xs tracking-widest uppercase mb-2"
                      style={{ color: 'var(--color-caramel)', opacity: 0.8 }}
                    >
                      {item.category}
                    </span>
                    <h3
                      className="font-serif text-xl mb-2"
                      style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-coffee-dark)', fontWeight: 400, lineHeight: 1.2 }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="font-sans text-sm leading-relaxed flex-1 mb-5 max-w-xs"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center gap-5 w-full">
                      <span
                        className="font-sans text-lg"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-coffee-dark)', fontWeight: 500, letterSpacing: '0.01em' }}
                      >
                        {item.price}
                      </span>
                      <button
                        aria-label={`Order ${item.name}`}
                        className="font-sans text-xs tracking-widest uppercase py-2 px-4 transition-all duration-300 hover:opacity-80 active:scale-95 focus-visible:outline-2"
                        style={{
                          border: '1px solid var(--color-coffee-dark)',
                          color: 'var(--color-coffee-dark)',
                        }}
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p
              className="text-center font-sans py-20"
              style={{ color: 'var(--color-text-muted)' }}
            >
              No items in this category yet.
            </p>
          )}
        </div>
      </section>

      <QuoteCarousel />
      <Footer />
    </PageTransition>
  );
}

export default OurMenu;
