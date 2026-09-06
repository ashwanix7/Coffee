import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import quotes from '../../data/quotes';

/**
 * QuoteCarousel — Auto-rotating quote display with smooth fade/slide transitions.
 * Placed immediately above the footer on all pages.
 */
export function QuoteCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % quotes.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoplay();
  };

  const quote = quotes[current];

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-cream)' }}
      aria-label="Quotes"
    >
      <div className="container flex flex-col items-center text-center">
        {/* Decorative mark */}
        <span
          className="font-serif leading-none mb-2 select-none"
          style={{
            color: 'var(--color-caramel)',
            opacity: 0.25,
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(6rem, 12vw, 10rem)',
            lineHeight: 0.8,
          }}
          aria-hidden="true"
        >
          "
        </span>

        {/* Quote */}
        <div className="relative min-h-[200px] flex items-center justify-center w-full max-w-lg">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={quote.id}
              custom={direction}
              initial={{ opacity: 0, y: direction > 0 ? 20 : -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction > 0 ? -20 : 20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute font-serif text-center w-full"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: 'var(--color-coffee-dark)',
                fontWeight: 400,
                lineHeight: 1.4,
              }}
            >
              {quote.text}
              {quote.author && (
                <footer
                  className="font-sans text-sm mt-3 not-italic block"
                  style={{ color: 'var(--color-caramel)', fontWeight: 400 }}
                >
                  — {quote.author}
                </footer>
              )}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2 mt-10" role="tablist" aria-label="Quote navigation">
          {quotes.map((q, i) => (
            <button
              key={q.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Quote ${i + 1}`}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? '24px' : '6px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: i === current ? 'var(--color-caramel)' : 'var(--color-beige)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuoteCarousel;
