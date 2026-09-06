export interface Quote {
  id: string;
  text: string;
  author?: string;
}

const quotes: Quote[] = [
  {
    id: 'q1',
    text: 'Good ideas start with good coffee.',
  },
  {
    id: 'q2',
    text: 'Take your time. Let the coffee do the talking.',
  },
  {
    id: 'q3',
    text: 'Fresh beans. Warm moments.',
  },
  {
    id: 'q4',
    text: 'Coffee tastes better when shared.',
  },
  {
    id: 'q5',
    text: 'Every cup has a little story.',
  },
  {
    id: 'q6',
    text: 'The best conversations happen over coffee.',
  },
  {
    id: 'q7',
    text: 'Slow down. Sip something beautiful.',
  },
  {
    id: 'q8',
    text: 'Made with care. Drunk with intention.',
  },
];

export default quotes;
