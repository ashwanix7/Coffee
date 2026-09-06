export interface WhatsNewItem {
  id: string;
  title: string;
  category: 'New Drink' | 'Seasonal' | 'Event' | 'Beans' | 'Shop';
  description: string;
  date: string;
  image: string;
  isFeature?: boolean;
}

const whatsNewItems: WhatsNewItem[] = [
  {
    id: 'wn1',
    title: 'Introducing: Matcha Espresso Fusion',
    category: 'New Drink',
    description:
      'We\'ve been experimenting for months. The result? A ceremonial grade matcha shot pulled directly over a fresh ristretto. Bold, complex and surprisingly harmonious.',
    date: 'September 2026',
    image: '/images/matcha.png',
    isFeature: true,
  },
  {
    id: 'wn2',
    title: 'First Flush Darjeeling Has Arrived',
    category: 'Beans',
    description:
      'The first harvest Darjeeling leaves have just arrived at Croustille. Delicate, floral and utterly unique — available for a limited time only.',
    date: 'August 2026',
    image: '/images/iced-tea.png',
  },
  {
    id: 'wn3',
    title: 'Croustille Club Launch Night',
    category: 'Event',
    description:
      'Join us for an intimate evening of coffee tastings, live music and the official launch of the Croustille Club membership. Limited seats available.',
    date: 'September 15, 2026',
    image: '/images/hero-bg.jpg',
    isFeature: true,
  },
  {
    id: 'wn4',
    title: 'Autumn Seasonal Menu',
    category: 'Seasonal',
    description:
      'As the weather cools, we\'ve updated our seasonal offerings. Spiced Cardamom Latte, Pumpkin Cold Brew and a new Cinnamon Honey Matcha are now available.',
    date: 'September 2026',
    image: '/images/latte.png',
  },
  {
    id: 'wn5',
    title: 'The Croustille Cloud — Now Permanent',
    category: 'New Drink',
    description:
      'After overwhelming demand during our summer trial, the Croustille Cloud cold brew with sweet cream foam is officially joining our permanent menu.',
    date: 'August 2026',
    image: '/images/cold-brew.png',
  },
  {
    id: 'wn6',
    title: 'New Signature Espresso Blend',
    category: 'Beans',
    description:
      'Our roaster has crafted a new house blend — sourced from three origins, roasted in small batches. Tasting notes of dark chocolate, blackcurrant and toasted walnut.',
    date: 'July 2026',
    image: '/images/espresso.png',
  },
];

export default whatsNewItems;
