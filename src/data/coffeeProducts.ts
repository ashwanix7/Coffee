export interface CoffeeProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  tagline: string;
  price: string;
  image: string;
  accentColor: string;
  bgColor: string;
  textColor: string;
  direction: 'left' | 'right';
}

const coffeeProducts: CoffeeProduct[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'Coffee',
    description: 'Deep, bold and beautifully uncomplicated. A single shot of pure intention.',
    tagline: 'Pure. Precise. Perfect.',
    price: '₹180',
    image: '/images/espresso.png',
    accentColor: '#8C2226',
    bgColor: '#1A0304',
    textColor: '#FAF4EB',
    direction: 'right',
  },
  {
    id: 'matcha',
    name: 'Matcha',
    category: 'Signature',
    description: 'Fresh energy, quietly served. Ceremonial grade leaves, steamed oat milk.',
    tagline: 'Still. Vibrant. Alive.',
    price: '₹220',
    image: '/images/matcha.png',
    accentColor: '#6b7c45',
    bgColor: '#192110',
    textColor: '#FAF4EB',
    direction: 'left',
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    category: 'Cold',
    description: 'Cool, bright and refreshing. Brewed slow, served cold with citrus and mint.',
    tagline: 'Light. Bright. Effortless.',
    price: '₹190',
    image: '/images/iced-tea.png',
    accentColor: '#b5864a',
    bgColor: '#21170A',
    textColor: '#FAF4EB',
    direction: 'right',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'Coffee',
    description: 'Equal thirds of something wonderful. Espresso, milk and foam in harmony.',
    tagline: 'Balanced. Warm. Iconic.',
    price: '₹210',
    image: '/images/cappuccino.png',
    accentColor: '#8C2226',
    bgColor: '#260B0D',
    textColor: '#FAF4EB',
    direction: 'left',
  },
  {
    id: 'latte',
    name: 'Latte',
    category: 'Coffee',
    description: 'Silky steamed milk poured over a double shot. Long, warm and comforting.',
    tagline: 'Soft. Smooth. Satisfying.',
    price: '₹230',
    image: '/images/latte.png',
    accentColor: '#A8363A',
    bgColor: '#331113',
    textColor: '#FAF4EB',
    direction: 'right',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    category: 'Cold',
    description: 'Steeped for 18 hours in cold water. Smooth, never bitter — never rushed.',
    tagline: 'Patient. Dark. Powerful.',
    price: '₹240',
    image: '/images/cold-brew.png',
    accentColor: '#7A0C10',
    bgColor: '#0F0203',
    textColor: '#FAF4EB',
    direction: 'left',
  },
];

export default coffeeProducts;
