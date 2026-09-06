import coffeeProducts from '../../data/coffeeProducts';
import { CoffeeCarousel } from './CoffeeCarousel';

/**
 * CoffeeShowcase — The heart of the Croustille homepage.
 *
 * Previously a complex GSAP scroll showcase, now uses the
 * CoffeeCarousel globally across all screen sizes for a cleaner experience.
 */
export function CoffeeShowcase() {
  return <CoffeeCarousel products={coffeeProducts} />;
}

export default CoffeeShowcase;
