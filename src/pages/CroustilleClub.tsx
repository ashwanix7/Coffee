import PageTransition from '../components/layout/PageTransition';
import { QuoteCarousel } from '../components/quotes/QuoteCarousel';
import { Footer } from '../components/layout/Footer';

const benefits = [
  { title: 'Exclusive Drinks', description: 'Members-only seasonal specials and first access to new drinks.' },
  { title: 'Monthly Rewards', description: 'Earn points on every visit. Redeem for free drinks and merchandise.' },
  { title: 'Priority Seating', description: 'Reserve your favourite table before anyone else.' },
  { title: 'Birthday Perks', description: 'Your coffee is on us on your birthday, plus a free pastry.' },
  { title: 'Secret Menu', description: 'Order from our exclusive unlisted menu of experimental brews.' },
  { title: 'Community Events', description: 'Invites to tastings, brewing classes, and club meetups.' },
];

const memberTiers = [
  {
    name: 'Piccolo',
    price: '₹499',
    period: '/month',
    description: 'For the occasional visitor who wants a little more.',
    perks: [
      '1 free drink per month',
      'Member discount (5%)',
      'Early menu access',
      'Digital membership card',
    ],
    cta: 'Start with Piccolo',
    highlight: false,
  },
  {
    name: 'Lungo',
    price: '₹999',
    period: '/month',
    description: 'For the regulars. Everything you need, and a little extra.',
    perks: [
      '3 free drinks per month',
      'Member discount (10%)',
      'Priority seating',
      'Event invitations',
      'Monthly mystery drink',
    ],
    cta: 'Join as Lungo',
    highlight: true,
  },
  {
    name: 'Reserve',
    price: '₹2499',
    period: '/month',
    description: 'For the devoted. An entirely elevated Croustille experience.',
    perks: [
      'Unlimited drinks (daily 1 free)',
      'Member discount (15%)',
      'Private table reserved',
      'All events + exclusive tastings',
      'Roastery access',
      'Personal barista consultation',
    ],
    cta: 'Join Reserve',
    highlight: false,
  },
];

export function CroustilleClub() {
  return (
    <PageTransition>
      {/* Hero */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center py-32 overflow-hidden"
        style={{ backgroundColor: 'var(--color-coffee-dark)' }}
        aria-labelledby="club-hero-heading"
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,3,4,1) 0%, rgba(26,3,4,0.5) 100%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 container flex flex-col items-center text-center">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-5" style={{ color: 'var(--color-caramel)' }}>
            Membership
          </p>
          <h1
            id="club-hero-heading"
            className="font-serif leading-tight mb-5 max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              color: 'var(--color-cream)',
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Welcome to the Croustille Club.
          </h1>
          <p
            className="font-sans leading-relaxed max-w-md mx-auto"
            style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', color: 'var(--color-beige)', opacity: 0.65 }}
          >
            A members-only community for people who take their coffee seriously — and their time even more so.
          </p>
        </div>
      </section>

      {/* What is Croustille Club */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase mb-5" style={{ color: 'var(--color-caramel)' }}>
            What is the Club?
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
            Your favourite café, with a few extra privileges.
          </h2>
          <p
            className="font-sans leading-relaxed"
            style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.9 }}
          >
            The Croustille Club is our way of saying thank you to the people who make this place what it is. As a member, you get early access to new drinks, exclusive seasonal specials, invitations to private events and rewards that grow with every visit.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: 'var(--color-cream)' }}
        aria-labelledby="benefits-heading"
      >
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-caramel)' }}>
              Member Benefits
            </p>
            <h2
              id="benefits-heading"
              className="font-serif"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                color: 'var(--color-coffee-dark)',
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              What you get when you join.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ title, description }) => (
              <div
                key={title}
                className="p-8 card-hover text-center flex flex-col items-center"
                style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-beige)' }}
              >
                <div className="mb-2">
                  <span className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--color-caramel)' }}>
                    0{benefits.indexOf(benefits.find(b => b.title === title)!) + 1}
                  </span>
                </div>
                <h3
                  className="font-serif text-lg mb-3"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-coffee-dark)', fontWeight: 400 }}
                >
                  {title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: 'var(--color-coffee-dark)' }}
        aria-labelledby="tiers-heading"
      >
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-caramel)' }}>
              Membership Tiers
            </p>
            <h2
              id="tiers-heading"
              className="font-serif"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                color: 'var(--color-cream)',
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              Choose your level.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {memberTiers.map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col p-8 lg:p-10 transition-all duration-300"
                style={{
                  backgroundColor: tier.highlight ? 'var(--color-caramel)' : 'rgba(255,255,255,0.04)',
                  border: tier.highlight ? 'none' : '1px solid rgba(245, 237, 224, 0.1)',
                  transform: tier.highlight ? 'translateY(-8px)' : undefined,
                }}
              >
                {/* Card Header */}
                <p
                  className="font-sans text-xs tracking-widest uppercase mb-4"
                  style={{ color: tier.highlight ? 'rgba(255,255,255,0.7)' : 'var(--color-caramel)' }}
                >
                  {tier.name}
                </p>

                {/* Price row */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className="font-sans text-4xl"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: tier.highlight ? 'var(--color-white)' : 'var(--color-cream)',
                      fontWeight: 600,
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className="font-sans text-sm"
                    style={{ color: tier.highlight ? 'rgba(255,255,255,0.6)' : 'var(--color-beige)', opacity: 0.6 }}
                  >
                    {tier.period}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="font-sans text-sm leading-relaxed mb-7"
                  style={{ color: tier.highlight ? 'rgba(255,255,255,0.75)' : 'var(--color-beige)', opacity: 0.65 }}
                >
                  {tier.description}
                </p>

                {/* Perks list — left-aligned */}
                <ul className="flex flex-col gap-3 mb-8">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: tier.highlight ? 'rgba(255,255,255,0.4)' : 'var(--color-caramel)', opacity: 0.7 }}
                        aria-hidden="true"
                      >
                        —
                      </span>
                      <span
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: tier.highlight ? 'rgba(255,255,255,0.85)' : 'var(--color-cream)', opacity: 0.75 }}
                      >
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button — always at the bottom */}
                <button
                  className="mt-auto w-full py-3 font-sans text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-80 active:scale-95 focus-visible:outline-2"
                  style={{
                    backgroundColor: tier.highlight ? 'var(--color-coffee-dark)' : 'transparent',
                    color: tier.highlight ? 'var(--color-cream)' : 'var(--color-caramel)',
                    border: tier.highlight ? 'none' : '1px solid rgba(192, 126, 58, 0.5)',
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <p
            className="text-center font-sans text-xs mt-10 opacity-40"
            style={{ color: 'var(--color-cream)' }}
          >
            No lock-in. Cancel or change tier at any time.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center flex flex-col items-center">
              <p className="font-sans text-xs tracking-[0.3em] uppercase mb-5" style={{ color: 'var(--color-caramel)' }}>
                Events
              </p>
              <h2
                className="font-serif leading-tight mb-5"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: 'var(--color-coffee-dark)',
                  fontWeight: 300,
                }}
              >
                Coffee is better when it's shared.
              </h2>
              <p
                className="font-sans leading-relaxed mb-6"
                style={{ color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: '440px', marginInline: 'auto' }}
              >
                Club members receive exclusive invitations to cupping sessions, roastery tours, launch nights and private tastings. Events are small by design — intimate and educational.
              </p>
              <p className="font-sans text-sm" style={{ color: 'var(--color-text-muted)', opacity: 0.7 }}>
                Next event: <strong style={{ color: 'var(--color-coffee-dark)' }}>Club Launch Night — September 15, 2026</strong>
              </p>
            </div>
            <div className="relative img-zoom">
              <img
                src="/images/hero-bg.jpg"
                alt="Croustille members event"
                loading="lazy"
                className="w-full object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-coffee-dark)' }}>
        <div className="container text-center">
          <h2
            className="font-serif mb-6 mx-auto"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: 'var(--color-cream)',
              fontWeight: 300,
              maxWidth: '560px',
            }}
          >
            Ready to join the club?
          </h2>
          <button
            id="join-club-btn"
            className="inline-flex items-center font-sans text-sm tracking-wide px-10 py-4 transition-all duration-300 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: 'var(--color-caramel)', color: 'var(--color-white)' }}
          >
            Join the Club
          </button>
        </div>
      </section>

      <QuoteCarousel />
      <Footer />
    </PageTransition>
  );
}

export default CroustilleClub;
