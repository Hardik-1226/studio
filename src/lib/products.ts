export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  mrp: number;
  imageUrl: string;
  images?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    category: 'Analgesics',
    description: 'High-quality analgesic for effective pain management in institutional settings. Used widely for fever and mild to moderate pain relief.',
    price: 45.00,
    mrp: 65.00,
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzfGVufDB8fHx8MTc3MDkyMjE3OHww&ixlib=rb-4.1.0&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1471864190281-ad5fe9ac0724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1631549916768-4119b295f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600'
    ]
  },
  {
    id: '2',
    name: 'Amoxicillin 250mg',
    category: 'Antibiotics',
    description: 'Reliable broad-spectrum antibiotic for bacterial infections. Essential for hospital formularies and primary care clinics.',
    price: 125.00,
    mrp: 180.00,
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306dca664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtZWRpY2luZSUyMGNhcHN1bGVzfGVufDB8fHx8MTc3MDkyMjE3OHww&ixlib=rb-4.1.0&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1576086213369-97a306dca664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1550572017-ed200f545dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1603398938378-e54eab446ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600'
    ]
  },
  {
    id: '3',
    name: 'Metformin 500mg',
    category: 'Antidiabetics',
    description: 'Essential management for Type 2 Diabetes with proven consistency. Manufactured under strict quality guidelines.',
    price: 85.00,
    mrp: 110.00,
    imageUrl: 'https://images.unsplash.com/photo-1626716493137-b67fe9501e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtZWRpY2luZSUyMHRhYmxldHN8ZW58MHx8fHwxNzcwOTIyMTc4fDA&ixlib=rb-4.1.0&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1626716493137-b67fe9501e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1576086213369-97a306dca664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1550572017-ed200f545dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600'
    ]
  },
  {
    id: '4',
    name: 'Atorvastatin 10mg',
    category: 'Cardiovascular',
    description: 'Effective lipid-lowering medication for cardiovascular health. Trusted by cardiologists for batch-to-batch reliability.',
    price: 180.00,
    mrp: 240.00,
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b295f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtZWRpY2F0aW9ufGVufDB8fHx8MTc3MDkyMjE3OHww&ixlib=rb-4.1.0&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1631549916768-4119b295f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1471864190281-ad5fe9ac0724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600'
    ]
  },
  {
    id: '5',
    name: 'Omeprazole 20mg',
    category: 'Gastrointestinal',
    description: 'Proton pump inhibitor for acid reflux and gastrointestinal care. Consistent bioavailability for hospital use.',
    price: 95.00,
    mrp: 135.00,
    imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtZWRpY2luZSUyMGJvdHRsZXxlbnwwfHx8fDE3NzA5MjIxNzh8MA&ixlib=rb-4.1.0&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1603398938378-e54eab446ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1626716493137-b67fe9501e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1576086213369-97a306dca664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600'
    ]
  },
  {
    id: '6',
    name: 'Cetirizine 10mg',
    category: 'Antihistamines',
    description: 'Second-generation antihistamine for seasonal allergy relief. Fast-acting and non-sedating formula.',
    price: 55.00,
    mrp: 80.00,
    imageUrl: 'https://images.unsplash.com/photo-1550572017-ed200f545dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtZWRpY2luZXxlbnwwfHx8fDE3NzA5MjIxNzh8MA&ixlib=rb-4.1.0&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1550572017-ed200f545dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1631549916768-4119b295f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600'
    ]
  }
];

export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)));
