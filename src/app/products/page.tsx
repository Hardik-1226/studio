
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Search, ShoppingCart, ArrowRight, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast({
      title: "Added to order",
      description: `${product.name} added to your basket.`
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <div className="space-y-6">
        <h1 className="text-6xl font-black text-slate-800 tracking-tighter">HPI Catalog</h1>
        <p className="text-xl text-slate-500 max-w-2xl font-medium">
          Professional pharmaceutical procurement. High-quality medicines for clinics, hospitals, and pharmacies across India.
        </p>
      </div>

      {/* Featured Products Slider */}
      <section className="bg-primary/5 rounded-[4rem] p-12 overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Zap className="h-8 w-8 text-accent-foreground animate-pulse" />
            <h2 className="text-3xl font-bold text-slate-800">New Arrivals</h2>
          </div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">Slide to explore</p>
        </div>
        
        <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
          <CarouselContent className="-ml-6">
            {PRODUCTS.slice(0, 4).map((product) => (
              <CarouselItem key={`featured-${product.id}`} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Link href={`/products/${product.id}`}>
                  <Card className="hover:shadow-2xl transition-all duration-500 h-full border-none shadow-lg rounded-[2.5rem] overflow-hidden group bg-white">
                    <CardContent className="p-0">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-slate-800 line-clamp-1">{product.name}</h3>
                        <p className="text-primary font-black text-lg">₹{product.price.toFixed(2)}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="relative inset-0 h-12 w-12 rounded-full border-primary/20 text-primary" />
            <CarouselNext className="relative inset-0 h-12 w-12 rounded-full border-primary/20 text-primary" />
          </div>
        </Carousel>
      </section>

      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between pt-8">
        <div className="relative w-full md:max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search catalog..." 
            className="pl-12 h-14 rounded-full border-slate-100 shadow-sm focus:ring-primary/20 text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Button 
            variant={selectedCategory === null ? 'default' : 'outline'} 
            className="rounded-full px-8 h-12 font-bold shadow-sm"
            onClick={() => setSelectedCategory(null)}
          >
            All Areas
          </Button>
          {CATEGORIES.map(category => (
            <Button 
              key={category} 
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="rounded-full px-8 h-12 font-bold shadow-sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredProducts.map(product => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="group flex flex-col h-full border-none shadow-lg rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative aspect-square overflow-hidden bg-slate-50">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/95 text-primary border-none font-black px-4 py-1.5 rounded-full shadow-sm text-[10px] uppercase tracking-widest">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <h3 className="font-bold text-2xl mb-2 line-clamp-1 text-slate-800 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-3xl font-black text-slate-800">
                      ₹{product.price.toFixed(2)}
                    </span>
                    <Button 
                      size="icon" 
                      className="bg-primary text-white hover:bg-primary/90 rounded-2xl h-14 w-14 shadow-lg shadow-primary/20"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <ShoppingCart className="h-6 w-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-slate-50 rounded-[4rem] border-4 border-dashed border-slate-100">
          <p className="text-2xl text-slate-400 font-bold">No pharmaceutical products found.</p>
          <Button variant="link" className="text-primary font-bold mt-2 text-lg" onClick={() => { setSearch(''); setSelectedCategory(null); }}>
            Reset Catalog Filters
          </Button>
        </div>
      )}
    </div>
  );
}
