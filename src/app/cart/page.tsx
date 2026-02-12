
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center space-y-6">
        <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-headline font-bold">Your cart is empty</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Looks like you haven't added any medicines to your basket yet. Explore our products to find what you need.
        </p>
        <Link href="/products">
          <Button size="lg" className="h-12 px-8 font-semibold">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl border shadow-sm group">
                <div className="relative h-24 w-24 bg-muted rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-white rounded-xl border shadow-sm space-y-6 sticky top-24">
            <h2 className="text-xl font-bold">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="text-accent-foreground font-medium">FREE</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Estimated Tax</span>
                <span>$0.00</span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-primary-foreground bg-primary px-2">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Link href="/checkout">
                <Button className="w-full h-14 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
                  Proceed to Checkout <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/products" className="block text-center text-sm text-muted-foreground hover:underline">
                Continue Shopping
              </Link>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 p-2 rounded">
                <span>🔒 Secure checkout powered by Razorpay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
