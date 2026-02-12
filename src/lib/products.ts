
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    category: 'Pain Relief',
    description: 'Effective relief from fever and mild to moderate pain including headache, migraine, muscle ache, and toothache.',
    price: 4.99,
    imageUrl: 'https://picsum.photos/seed/p1/400/400'
  },
  {
    id: '2',
    name: 'Vitamin C 1000mg',
    category: 'Supplements',
    description: 'Supports immune health and provides antioxidant protection. Great for daily wellness.',
    price: 12.50,
    imageUrl: 'https://picsum.photos/seed/p2/400/400'
  },
  {
    id: '3',
    name: 'First Aid Kit - Essential',
    category: 'First Aid',
    description: 'A comprehensive kit containing bandages, antiseptic wipes, scissors, and more for emergency care.',
    price: 24.99,
    imageUrl: 'https://picsum.photos/seed/p3/400/400'
  },
  {
    id: '4',
    name: 'Digital Thermometer',
    category: 'Medical Devices',
    description: 'Fast and accurate temperature reading with a clear digital display and fever alert.',
    price: 15.00,
    imageUrl: 'https://picsum.photos/seed/p4/400/400'
  },
  {
    id: '5',
    name: 'Hand Sanitizer 500ml',
    category: 'Hygiene',
    description: 'Kills 99.9% of germs without water. Contains 70% alcohol for effective sanitization.',
    price: 8.75,
    imageUrl: 'https://picsum.photos/seed/p5/400/400'
  },
  {
    id: '6',
    name: '3-Ply Surgical Masks (Pack of 50)',
    category: 'Protective Gear',
    description: 'High filtration capacity surgical masks with comfortable ear loops and adjustable nose bridge.',
    price: 19.99,
    imageUrl: 'https://picsum.photos/seed/p6/400/400'
  }
];

export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)));
