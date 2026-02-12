
'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ShoppingCart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Button onClick={() => router.push('/products')}>Back to Products</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your basket.`
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-8 pl-0 hover:pl-2 transition-all"
        onClick={() => router.back()}
      >
        <ChevronLeft className="h-4 w-4 mr-1" /> Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted border shadow-sm">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            priority
            data-ai-hint="medical product detail"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <Badge className="bg-primary/20 text-primary border-none uppercase text-xs font-bold tracking-widest px-3">
              {product.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-headline font-bold">{product.name}</h1>
            <p className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</p>
          </div>

          <div className="prose prose-sm max-w-none text-muted-foreground">
            <h3 className="text-foreground font-semibold text-lg mb-2">Description</h3>
            <p className="leading-relaxed text-base">{product.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="flex-1 h-14 text-lg bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1 h-14 text-lg">
              Buy Now
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t">
            <div className="flex items-center gap-3 text-sm">
              <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
              <span>Genuine Product Guarantee</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Truck className="h-8 w-8 text-primary shrink-0" />
              <span>Fast 24h Express Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <RefreshCw className="h-8 w-8 text-primary shrink-0" />
              <span>15 Days Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
