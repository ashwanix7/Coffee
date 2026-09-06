import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import { QuoteCarousel } from '../components/quotes/QuoteCarousel';
import { Footer } from '../components/layout/Footer';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const storyChapters = [
  {
    eyebrow: 'Our Philosophy',
    title: 'Coffee should slow you down.',
    body: [
      'In a world that moves too fast, we believe the ritual of a good cup of coffee is one of the few reasons left to pause. At Croustille, we built everything around that pause.',
      'No shortcuts. No rushing. Just careful sourcing, careful roasting and careful brewing.',
    ],
    image: '/images/espresso.png',
    reverse: false,
  },
  {
    eyebrow: 'Fresh Beans',
    title: 'Made with lovely, fresh beans.',
    body: [
      'We work directly with small family farms across India, Ethiopia, Colombia and Guatemala. Every origin is selected not just for flavour, but for the story behind it.',
      'Our beans arrive within weeks of harvest and are roasted in small batches every week — never sitting, never stale.',
    ],
    image: '/images/latte.png',
    reverse: true,
  },
  {
    eyebrow: 'The Craft',
    title: 'Dialled in, every morning.',
    body: [
      'Our baristas dial in every machine every morning. Grind size, extraction time, water temperature — everything adjusted to the bean of the day.',
      'We believe this level of attention is the difference between a forgettable cup and one worth coming back for.',
    ],
    image: '/images/cappuccino.png',
    reverse: false,
  },
  {
    eyebrow: 'Community',
    title: 'A space for people.',
    body: [
      'Croustille has always been a neighbourhood place. We are proud to be part of people\'s daily rituals — the morning espresso, the after-work latte, the long Saturday brunch.',
      'We hope every visit feels like coming home.',
    ],
    image: '/images/cold-brew.png',
    reverse: true,
  },
];

export function OurStory() {
  const pageRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.story-hero-content > *', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.1,
      });

      // Chapter reveals
      gsap.utils.toArray<HTMLElement>('.story-chapter').forEach((chapter) => {
        const img = chapter.querySelector('.chapter-img');
        const content = chapter.querySelector('.chapter-content');
        const isReverse = chapter.dataset.reverse === 'true';

        if (img) {
          gsap.from(img, {
            opacity: 0,
            x: isReverse ? 60 : -60,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: chapter, start: 'top 75%', once: true },
          });
        }
        if (content) {
          gsap.from(content.children, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: chapter, start: 'top 75%', once: true },
          });
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <PageTransition>
      <div ref={pageRef}>
        {/* Hero */}
        <section
          className="relative min-h-[70vh] flex items-center justify-center py-32 overflow-hidden"
          style={{ backgroundColor: 'var(--color-coffee-dark)' }}
          aria-labelledby="story-hero-heading"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/images/hero-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(26,3,4,1) 0%, rgba(26,3,4,0.7) 60%, rgba(26,3,4,0.5) 100%)',
            }}
            aria-hidden="true"
          />

          <div className="story-hero-content relative z-10 container flex flex-col items-center text-center">
            <p
              className="font-sans text-xs tracking-[0.4em] uppercase mb-5"
              style={{ color: 'var(--color-caramel)' }}
            >
              Our Story
            </p>
            <h1
              id="story-hero-heading"
              className="font-serif leading-tight mb-5 max-w-4xl mx-auto"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3.5rem, 9vw, 9rem)',
                color: 'var(--color-cream)',
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              More than coffee.
            </h1>
            <p
              className="font-sans leading-relaxed max-w-lg mx-auto"
              style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                color: 'var(--color-beige)',
                opacity: 0.7,
              }}
            >
              Made with lovely, fresh beans. Served with care. Enjoyed slowly.
            </p>
          </div>
        </section>

        {/* Chapter sections */}
        {storyChapters.map((chapter, index) => (
          <section
            key={index}
            className="story-chapter py-20 lg:py-28 overflow-hidden"
            data-reverse={chapter.reverse ? 'true' : 'false'}
            style={{
              backgroundColor: index % 2 === 0 ? 'var(--color-white)' : 'var(--color-cream)',
            }}
          >
            <div
              className={`container flex flex-col items-center justify-center ${
                chapter.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-12 lg:gap-20`}
            >
              {/* Image */}
              <div className="chapter-img flex-shrink-0 w-full lg:w-2/5 flex justify-center">
                <div className="relative img-zoom">
                  <div
                    className="absolute -bottom-4 -right-4 w-full h-full"
                    style={{ border: '1px solid var(--color-beige)' }}
                    aria-hidden="true"
                  />
                  <img
                    src={chapter.image}
                    alt=""
                    loading="lazy"
                    className="relative w-full object-cover"
                    style={{ aspectRatio: '4/5' }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="chapter-content flex-1 text-center flex flex-col items-center">
                <p
                  className="font-sans text-xs tracking-[0.3em] uppercase mb-5"
                  style={{ color: 'var(--color-caramel)' }}
                >
                  {chapter.eyebrow}
                </p>
                <h2
                  className="font-serif leading-tight mb-6"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                    color: 'var(--color-coffee-dark)',
                    fontWeight: 400,
                    lineHeight: 1.15,
                  }}
                >
                  {chapter.title}
                </h2>
                {chapter.body.map((para, i) => (
                  <p
                    key={i}
                    className="font-sans leading-relaxed mb-4"
                    style={{
                      fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                      color: 'var(--color-text-muted)',
                      maxWidth: '480px',
                      marginInline: 'auto',
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Atmosphere Section */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: 'var(--color-coffee-dark)' }}
          aria-labelledby="atmosphere-heading"
        >
          <div className="container text-center">
            <p
              className="font-sans text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: 'var(--color-caramel)' }}
            >
              The Atmosphere
            </p>
            <h2
              id="atmosphere-heading"
              className="font-serif mb-6 mx-auto"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
                color: 'var(--color-cream)',
                fontWeight: 400,
                lineHeight: 1.15,
                maxWidth: '700px',
              }}
            >
              A place that feels like a deep breath.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-12 max-w-4xl mx-auto">
              <img
                src="/images/espresso.png"
                alt="Espresso at Croustille"
                loading="lazy"
                className="w-full object-cover img-zoom"
                style={{ aspectRatio: '4/5' }}
              />
              <img
                src="/images/hero-bg.jpg"
                alt="Croustille café interior"
                loading="lazy"
                className="w-full object-cover img-zoom md:mt-8"
                style={{ aspectRatio: '4/5' }}
              />
              <img
                src="/images/matcha.png"
                alt="Matcha latte at Croustille"
                loading="lazy"
                className="w-full object-cover img-zoom"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 lg:py-24"
          style={{ backgroundColor: 'var(--color-cream)' }}
        >
          <div className="container text-center">
            <h2
              className="font-serif mb-6 mx-auto"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                color: 'var(--color-coffee-dark)',
                fontWeight: 400,
                lineHeight: 1.15,
                maxWidth: '560px',
              }}
            >
              Come and taste what we've been working on.
            </h2>
            <Link
              to="/our-menu"
              className="inline-flex items-center gap-3 font-sans text-sm tracking-wide px-8 py-3.5 transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-coffee-dark)',
                color: 'var(--color-cream)',
              }}
            >
              View Our Menu
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <QuoteCarousel />
        <Footer />
      </div>
    </PageTransition>
  );
}

export default OurStory;
