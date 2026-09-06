import type { CoffeeProduct } from '../../data/coffeeProducts';


interface CoffeeProductProps {
  product: CoffeeProduct;
  index: number;
}

export function CoffeeProductCard({ product, index }: CoffeeProductProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className="coffee-product-panel absolute inset-0 flex items-center justify-center"
      data-index={index}
      style={{ opacity: 0 }}
    >
      <div
        className={`container flex flex-col ${
          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } items-center gap-10 lg:gap-16 xl:gap-24`}
      >
        {/* Image Side */}
        <div
          className="coffee-product-image flex-shrink-0 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] xl:max-w-[480px]"
          style={{
            transform: isEven ? 'translateX(-60px)' : 'translateX(60px)',
          }}
        >
          <div className="relative">
            {/* Decorative circle behind image */}
            <div
              className="absolute -inset-8 rounded-full opacity-10"
              style={{ backgroundColor: product.accentColor }}
            />
            <img
              src={product.image}
              alt={`${product.name} — ${product.description}`}
              loading="lazy"
              className="relative w-full object-cover"
              style={{
                aspectRatio: '3/4',
                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))',
              }}
            />
          </div>
        </div>

        {/* Text Side */}
        <div
          className={`coffee-product-text flex-1 ${
            isEven ? 'lg:text-left' : 'lg:text-right'
          } text-center`}
          style={{
            transform: isEven ? 'translateX(40px)' : 'translateX(-40px)',
            opacity: 0,
          }}
        >
          {/* Category */}
          <span
            className="font-sans text-xs tracking-[0.3em] uppercase block mb-4"
            style={{ color: product.accentColor }}
          >
            {product.category}
          </span>

          {/* Product Name */}
          <h2
            className="font-serif leading-none mb-4"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              color: product.textColor,
              fontWeight: 300,
              letterSpacing: '-0.02em',
            }}
          >
            {product.name}
          </h2>

          {/* Tagline */}
          <p
            className="font-serif italic mb-5"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              color: product.accentColor,
              fontWeight: 300,
            }}
          >
            {product.tagline}
          </p>

          {/* Description */}
          <p
            className="font-sans leading-relaxed max-w-sm mb-8"
            style={{
              fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
              color: product.textColor,
              opacity: 0.7,
              marginInline: isEven ? undefined : 'auto',
            }}
          >
            {product.description}
          </p>

          {/* Price */}
          <div className={`flex items-center gap-6 ${isEven ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
            <span
              className="font-serif text-2xl"
              style={{
                fontFamily: 'var(--font-serif)',
                color: product.textColor,
                fontWeight: 400,
              }}
            >
              {product.price}
            </span>
            <a
              href="/our-menu"
              className="font-sans text-xs tracking-widest uppercase py-2 px-6 transition-all duration-300 hover:opacity-80"
              style={{
                border: `1px solid ${product.accentColor}`,
                color: product.accentColor,
              }}
            >
              Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeProductCard;
