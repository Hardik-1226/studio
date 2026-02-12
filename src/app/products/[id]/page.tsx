
'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { PRODUCTS } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ShoppingCart, ShieldCheck, Truck, RefreshCw, Plus, Minus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(product?.imageUrl || '');

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4 text-slate-800">Product Not Found</h1>
        <Button onClick={() => router.push('/products')} className="rounded-full bg-primary text-white">Back to Catalog</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to order",
      description: `${quantity}x ${product.name} added to your basket.`
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        className="mb-8 pl-0 hover:pl-2 transition-all text-primary font-bold group"
        onClick={() => router.back()}
      >
        <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Catalog
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-white border-8 border-slate-50 shadow-2xl">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {product.images && product.images.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "relative aspect-square rounded-2xl overflow-hidden cursor-pointer border-4 transition-all",
                    activeImage === img ? "border-primary shadow-lg" : "border-transparent hover:border-primary/30"
                  )}
                  onClick={() => setActiveImage(img)}
                >
                  <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-10 py-4">
          <div className="space-y-4">
            <Badge className="bg-primary/10 text-primary border-none uppercase text-xs font-bold tracking-[0.2em] px-4 py-1.5 rounded-full">
              {product.category}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight">{product.name}</h1>
            <p className="text-4xl font-black text-primary">₹{product.price.toFixed(2)}</p>
          </div>

          <div className="prose prose-sm max-w-none text-slate-600">
            <h3 className="text-slate-800 font-bold text-2xl mb-4">Description</h3>
            <p className="leading-relaxed text-lg">{product.description}</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Select Quantity</span>
              <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-full border border-slate-200">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 rounded-full bg-white shadow-sm hover:bg-slate-50"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center font-bold text-xl text-slate-800">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 rounded-full bg-white shadow-sm hover:bg-slate-50"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <Button 
                size="lg" 
                className="flex-1 h-16 text-xl bg-primary text-white hover:bg-primary/90 rounded-full font-bold shadow-xl shadow-primary/20"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-6 w-6 mr-3" /> Add to Basket
              </Button>
              <Button size="lg" variant="outline" className="flex-1 h-16 text-xl rounded-full border-primary/20 hover:bg-primary/5 text-primary font-bold">
                Bulk Inquiry
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-100">
            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <ShieldCheck className="h-10 w-10 text-primary shrink-0" />
              <span>Certified Quality</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <Truck className="h-10 w-10 text-primary shrink-0" />
              <span>Priority Supply</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <RefreshCw className="h-10 w-10 text-primary shrink-0" />
              <span>Batch Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
