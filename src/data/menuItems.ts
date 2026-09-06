export interface MenuItem {
  id: string;
  name: string;
  category: 'Coffee' | 'Cold' | 'Tea' | 'Matcha' | 'Signature';
  description: string;
  price: string;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const menuItems: MenuItem[] = [
  // Coffee
  {
    id: 'espresso-menu',
    name: 'Espresso',
    category: 'Coffee',
    description: 'A single shot of our house blend. Dark, rich and intensely aromatic.',
    price: '₹180',
    image: '/images/espresso.png',
    isBestseller: true,
  },
  {
    id: 'cappuccino-menu',
    name: 'Cappuccino',
    category: 'Coffee',
    description: 'Equal thirds of espresso, steamed milk and silky microfoam.',
    price: '₹210',
    image: '/images/cappuccino.png',
    isBestseller: true,
  },
  {
    id: 'latte-menu',
    name: 'Latte',
    category: 'Coffee',
    description: 'Double espresso with steamed milk and a light layer of foam.',
    price: '₹230',
    image: '/images/latte.png',
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'Coffee',
    description: 'Ristretto shots with velvety steamed whole milk. Strong and smooth.',
    price: '₹240',
    image: '/images/cappuccino.png',
  },
  {
    id: 'pour-over',
    name: 'Pour Over',
    category: 'Coffee',
    description: 'Single origin beans, hand-poured. Clean, bright and complex.',
    price: '₹280',
    image: '/images/espresso.png',
    isNew: true,
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'Coffee',
    description: 'Espresso with hot water. Long and smooth with full coffee character.',
    price: '₹190',
    image: '/images/espresso.png',
  },
  // Cold
  {
    id: 'cold-brew-menu',
    name: 'Cold Brew',
    category: 'Cold',
    description: '18-hour cold steep. Smooth, never bitter, served over ice.',
    price: '₹240',
    image: '/images/cold-brew.png',
    isBestseller: true,
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    category: 'Cold',
    description: 'Espresso over ice with chilled whole milk. Classic and refreshing.',
    price: '₹230',
    image: '/images/latte.png',
  },
  {
    id: 'iced-matcha',
    name: 'Iced Matcha',
    category: 'Cold',
    description: 'Ceremonial matcha with cold oat milk poured over ice.',
    price: '₹260',
    image: '/images/matcha.png',
    isNew: true,
  },
  // Tea
  {
    id: 'iced-tea-menu',
    name: 'Iced Tea',
    category: 'Tea',
    description: 'Slow-brewed black tea with lemon and fresh mint over ice.',
    price: '₹190',
    image: '/images/iced-tea.png',
  },
  {
    id: 'chamomile',
    name: 'Chamomile Honey',
    category: 'Tea',
    description: 'Whole chamomile flowers steeped with a touch of raw honey.',
    price: '₹200',
    image: '/images/iced-tea.png',
  },
  {
    id: 'darjeeling',
    name: 'First Flush Darjeeling',
    category: 'Tea',
    description: 'Delicate first harvest Darjeeling with muscatel notes.',
    price: '₹220',
    image: '/images/iced-tea.png',
    isNew: true,
  },
  // Matcha
  {
    id: 'matcha-menu',
    name: 'Matcha Latte',
    category: 'Matcha',
    description: 'Ceremonial grade matcha with steamed oat milk. Vibrant and earthy.',
    price: '₹220',
    image: '/images/matcha.png',
    isBestseller: true,
  },
  {
    id: 'matcha-espresso',
    name: 'Matcha Espresso',
    category: 'Matcha',
    description: 'The ultimate fusion — matcha meets a ristretto shot over ice.',
    price: '₹270',
    image: '/images/matcha.png',
    isNew: true,
  },
  // Signature
  {
    id: 'croustille-cloud',
    name: 'Croustille Cloud',
    category: 'Signature',
    description: 'Cold brew topped with sweet cream foam and a dusting of cinnamon.',
    price: '₹290',
    image: '/images/cold-brew.png',
    isBestseller: true,
  },
  {
    id: 'caramel-sunrise',
    name: 'Caramel Sunrise',
    category: 'Signature',
    description: 'Iced latte layered with house-made caramel and vanilla oat milk.',
    price: '₹310',
    image: '/images/latte.png',
    isNew: true,
  },
];

export type MenuCategory = 'All' | 'Coffee' | 'Cold' | 'Tea' | 'Matcha' | 'Signature';
export const menuCategories: MenuCategory[] = ['All', 'Coffee', 'Cold', 'Tea', 'Matcha', 'Signature'];

export default menuItems;
