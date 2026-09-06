import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import { CoffeeShowcase } from '../components/coffee/CoffeeShowcase';
import { QuoteCarousel } from '../components/quotes/QuoteCarousel';
import { Footer } from '../components/layout/Footer';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  // Hero entrance animation
  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6 })
        .from('.hero-title', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from('.hero-ctas', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  // Intro section scroll reveal
  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.intro-reveal', {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, introRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <PageTransition>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center min-h-screen overflow-hidden"
        style={{ backgroundColor: 'var(--color-coffee-dark)' }}
        aria-label="Hero"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30"
            aria-hidden="true"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(26,3,4,0.6) 0%, rgba(26,3,4,0.85) 60%, rgba(26,3,4,1) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container text-center">
          <p
            className="hero-eyebrow font-sans text-xs tracking-[0.4em] uppercase mb-6"
            style={{ color: 'var(--color-white)' }}
          >
            Croustille — Est. 2024
          </p>

          <h1
            className="hero-title font-serif leading-tight mb-6"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.2rem, 9vw, 9rem)',
              color: 'var(--color-cream)',
              fontWeight: 400,
              lineHeight: 1.15,
              maxWidth: '1000px',
              marginInline: 'auto',
            }}
          >
            Coffee, made to be remembered
          </h1>

          <div className="w-full flex justify-center mb-10">
            <p
              className="hero-subtitle font-sans text-center"
              style={{
                fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
                color: 'var(--color-beige)',
                opacity: 0.75,
                lineHeight: 1.8,
              }}
            >
              Fresh beans. Slow moments. Good company.
            </p>
          </div>

          <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/our-menu"
              id="hero-cta-menu"
              className="inline-flex items-center gap-3 font-sans text-sm tracking-wide px-8 py-3.5 transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{
                color: 'var(--color-white)',
              }}
            >
              Explore Our Menu
            </Link>
            <Link
              to="/our-story"
              id="hero-cta-story"
              className="inline-flex items-center gap-3 font-sans text-sm tracking-wide px-8 py-3.5 transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{
                borderBottom: '1px solid rgba(245, 237, 224, 0.35)',
                color: 'var(--color-cream)',
              }}
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          aria-hidden="true"
        >
          <div
            className="w-px h-12"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--color-cream))',
              animation: 'fadeInUp 1.8s ease-in-out infinite',
            }}
          />
        </div>
      </section>

      {/* Coffee Showcase (GSAP on desktop, carousel on mobile) */}
      <CoffeeShowcase />

      {/* Introduction Section */}
      <section
        ref={introRef}
        className="py-24 lg:py-32"
        style={{ backgroundColor: 'var(--color-white)' }}
        aria-labelledby="intro-heading"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p
                className="intro-reveal font-sans text-xs tracking-[0.3em] uppercase mb-5"
                style={{ color: 'var(--color-caramel)' }}
              >
                Who We Are
              </p>
              <h2
                id="intro-heading"
                className="intro-reveal font-serif leading-tight mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  color: 'var(--color-coffee-dark)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                More than coffee.<br />
                <em>A little ritual.</em>
              </h2>
              <p
                className="intro-reveal font-sans leading-relaxed mb-5"
                style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', maxWidth: '480px' }}
              >
                At Croustille, we believe great coffee deserves to be made carefully and enjoyed slowly.
                We source our beans from small farms, roast in small batches, and brew with intention.
              </p>
              <p
                className="intro-reveal font-sans leading-relaxed mb-8"
                style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', maxWidth: '480px' }}
              >
                Every cup that leaves our counter is a small act of care.
              </p>
              <Link
                to="/our-story"
                className="intro-reveal inline-flex items-center gap-3 font-sans text-sm tracking-wide transition-colors duration-300 hover:opacity-70"
                style={{ color: 'var(--color-caramel)' }}
              >
                Read Our Story
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="intro-reveal relative">
              <div
                className="absolute -top-6 -left-6 w-full h-full"
                style={{ border: '1px solid var(--color-beige)' }}
                aria-hidden="true"
              />
              <img
                src="/images/cappuccino.png"
                alt="Croustille barista crafting a cappuccino"
                loading="lazy"
                className="relative w-full object-cover img-zoom"
                style={{ aspectRatio: '4/3', maxHeight: '440px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: 'var(--color-cream)' }}
        aria-labelledby="experience-heading"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="w-full flex flex-col items-center justify-center mb-16 max-w-5xl mx-auto">
            <p className="font-sans text-center text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-caramel)' }}>
              The Experience
            </p>
            <h2
              id="experience-heading"
              className="font-serif text-center leading-tight"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4vw, 4rem)',
                color: 'var(--color-coffee-dark)',
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Every visit, every cup, every moment.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Fresh Beans',
                description: 'Sourced from small farms, roasted in small batches every week.',
              },
              {
                title: 'Slow Craft',
                description: 'We take our time. Every drink is brewed with full attention.',
              },
              {
                title: 'Warm Space',
                description: 'A place to think, talk, or simply sit and enjoy the quiet.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 lg:p-10 card-hover"
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-beige)',
                }}
              >
                <h3
                  className="font-serif text-xl mb-3"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-coffee-dark)', fontWeight: 400 }}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 lg:py-24"
        style={{ backgroundColor: 'var(--color-coffee-dark)' }}
        aria-labelledby="cta-heading"
      >
        <div className="container text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-white)' }}>
            Join Us
          </p>
          <div className="w-full flex justify-center mb-10">
            <h2
              id="cta-heading"
              className="font-serif text-center mx-auto"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                color: 'var(--color-cream)',
                fontWeight: 400,
                lineHeight: 1.2,
                maxWidth: '600px',
              }}
            >
              Ready for a cup worth remembering?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/croustille-club"
              id="home-club-cta"
              className="inline-flex items-center gap-3 font-sans text-sm tracking-wide px-8 py-3.5 transition-all duration-300 hover:opacity-90"
              style={{

                color: 'var(--color-white)',
              }}
            >
              Join Croustille Club
            </Link>
            <Link
              to="/our-menu"
              className="font-sans text-sm tracking-wide transition-colors duration-300 hover:opacity-70"
              style={{ color: 'var(--color-cream)', opacity: 0.7 }}
            >
              View the Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Carousel */}
      <QuoteCarousel />

      {/* Footer */}
      <Footer />
    </PageTransition>
  );
}

export default Home;
