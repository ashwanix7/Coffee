import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { CoffeeProduct } from '../../data/coffeeProducts';

interface CoffeeCarouselProps {
  products: CoffeeProduct[];
  autoplayInterval?: number;
}

/**
 * CoffeeCarousel — Mobile-first touch/swipe carousel for the coffee showcase.
 * Supports autoplay, touch gestures, and previous/next controls.
 */
export function CoffeeCarousel({
  products,
  autoplayInterval = 4500,
}: CoffeeCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number, dir: 'left' | 'right') => {
      setDirection(dir);
      setCurrent((index + products.length) % products.length);
    },
    [products.length]
  );

  const next = useCallback(() => {
    goTo(current + 1, 'right');
    setIsPaused(true);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1, 'left');
    setIsPaused(true);
  }, [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (isPaused) {
      // Resume after 6 seconds of no interaction
      timerRef.current = setTimeout(() => setIsPaused(false), 6000);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    const interval = setInterval(() => {
      setDirection('right');
      setCurrent((c) => (c + 1) % products.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [isPaused, autoplayInterval, products.length]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  const product = products[current];

  const variants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? '80%' : '-80%',
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? '-80%' : '80%',
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: product.bgColor,
        minHeight: '100dvh',
        transition: 'background-color 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
      aria-label="Coffee product carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Product slide */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={product.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.55,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-24 pb-24"
        >
          {/* Category */}
          <span
            className="font-sans text-xs tracking-[0.3em] uppercase mb-4 block text-center"
            style={{ color: product.accentColor }}
          >
            — {product.category} —
          </span>

          {/* Image */}
          <div className="relative mb-6 w-56 sm:w-72 lg:w-96">
            <div
              className="absolute -inset-8 rounded-full opacity-15"
              style={{ backgroundColor: product.accentColor }}
            />
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="relative w-full object-cover"
              style={{
                aspectRatio: '3/4',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
              }}
            />
          </div>

          {/* Name */}
          <h2
            className="font-serif text-center leading-tight mb-0"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.5rem, 14vw, 7.5rem)',
              color: product.textColor,
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            {product.name}
          </h2>

          {/* Tagline */}
          <p
            className="text-center mb-3 -mt-1"
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)',
              color: product.accentColor,
              fontWeight: 300,
              letterSpacing: '0.05em',
            }}
          >
            {product.tagline}
          </p>

          {/* Desktop Left: Description */}
          <div className="hidden lg:flex absolute left-12 xl:left-24 top-1/2 -translate-y-1/2 w-64 xl:w-80 items-center">
            <p
              className="font-sans text-left leading-relaxed text-lg xl:text-xl"
              style={{
                color: product.textColor,
                opacity: 0.75,
              }}
            >
              {product.description}
            </p>
          </div>

          {/* Desktop Right: Price + CTA */}
          <div className="hidden lg:flex absolute right-12 xl:right-24 top-1/2 -translate-y-1/2 w-64 xl:w-80 flex-col items-end gap-6 justify-center">
            <span
              className="font-sans text-3xl xl:text-4xl"
              style={{ fontFamily: 'var(--font-body)', color: product.textColor, fontWeight: 400 }}
            >
              {product.price}
            </span>
            <a
              href="/our-menu"
              className="font-sans text-sm tracking-widest uppercase py-3 px-8 xl:py-4 xl:px-10 transition-all duration-300 hover:opacity-70"
              style={{
                border: `1px solid ${product.accentColor}`,
                color: product.accentColor,
              }}
            >
              Order Now
            </a>
          </div>

          {/* Mobile Bottom: Description & Price (hidden on lg) */}
          <div className="flex lg:hidden flex-col items-center justify-center w-full max-w-sm mt-8 gap-6">
            <p
              className="font-sans text-center leading-relaxed"
              style={{
                fontSize: 'clamp(0.8rem, 3vw, 1rem)',
                color: product.textColor,
                opacity: 0.65,
              }}
            >
              {product.description}
            </p>
            <div className="flex items-center gap-5">
              <span
                className="font-sans text-lg"
                style={{ fontFamily: 'var(--font-body)', color: product.textColor, fontWeight: 400 }}
              >
                {product.price}
              </span>
              <a
                href="/our-menu"
                className="font-sans text-xs tracking-widest uppercase py-2 px-5 transition-all duration-300"
                style={{
                  border: `1px solid ${product.accentColor}`,
                  color: product.accentColor,
                }}
              >
                Order Now
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Previous Button */}
      <button
        onClick={prev}
        aria-label="Previous drink"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-80 active:scale-90"
        style={{
          color: product.textColor,
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <ChevronLeft size={18} />
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        aria-label="Next drink"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-80 active:scale-90"
        style={{
          color: product.textColor,
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {products.map((p, i) => (
          <button
            key={p.id}
            onClick={() => {
              goTo(i, i > current ? 'right' : 'left');
              setIsPaused(true);
            }}
            aria-label={`Go to ${p.name}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              backgroundColor: i === current ? product.accentColor : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>

      {/* Autoplay indicator */}
      {!isPaused && (
        <div
          className="absolute bottom-6 right-5 opacity-30 z-20"
          aria-hidden="true"
        >
          <div
            className="w-1 h-1 rounded-full"
            style={{
              backgroundColor: product.textColor,
              animation: 'pulseGlow 1.5s ease infinite',
            }}
          />
        </div>
      )}
    </section>
  );
}

export default CoffeeCarousel;
