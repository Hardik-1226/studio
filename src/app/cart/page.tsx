'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShoppingCart, Tag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-6">
        <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800">Your basket is empty</h1>
        <p className="text-slate-500 max-w-sm mx-auto text-md">
          Explore our range of medicines and healthcare essentials to start your order.
        </p>
        <Link href="/products">
          <Button size="lg" className="h-14 px-8 rounded-full text-md font-bold bg-primary text-white shadow-lg hover:bg-primary/90">
            Explore Products
          </Button>
        </Link>
      </div>
    );
  }

  const totalSavings = cart.reduce((acc, item) => acc + (item.mrp - item.price) * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-black text-slate-800 tracking-tighter">Your Basket</h1>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{cart.length} items</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border shadow-xl rounded-[2.5rem] overflow-hidden bg-white">
             <CardHeader className="bg-slate-800 p-8">
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-white">
                <ShoppingCart className="h-6 w-6" /> Order Items
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 divide-y divide-slate-100">
              {cart.map((item) => (
                <div key={item.id} className="py-8 flex flex-col md:flex-row gap-6 border-b last:border-0 border-slate-50">
                  <div className="relative h-28 w-28 bg-slate-50 rounded-[2rem] overflow-hidden shrink-0 border border-slate-100 mx-auto md:mx-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <h3 className="font-bold text-xl text-slate-800">{item.name}</h3>
                        <p className="text-xs text-primary font-black uppercase tracking-widest">{item.category}</p>
                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-10 w-10 text-slate-300 hover:text-destructive hover:bg-destructive/5 rounded-full shrink-0"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mt-6 gap-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-black text-slate-800">₹{item.price.toFixed(2)}</span>
                          <span className="text-xs text-slate-400 line-through font-bold">₹{item.mrp.toFixed(2)}</span>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-none font-bold px-2 py-0.5 rounded-full text-[10px] w-fit">
                          Save {Math.round(((item.mrp - item.price) / item.mrp) * 100)}%
                        </Badge>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 bg-slate-50 p-1 rounded-full border border-slate-200">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-full bg-white shadow-sm hover:bg-slate-50"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center font-bold text-lg text-slate-800">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-full bg-white shadow-sm hover:bg-slate-50"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Item Total</p>
                          <p className="font-black text-xl text-primary">₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="sticky top-32 border shadow-xl rounded-[2.5rem] overflow-hidden bg-white">
            <CardHeader className="bg-slate-800 p-8">
              <CardTitle className="text-xl font-bold text-white">Payment Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between text-slate-400 font-bold uppercase text-[11px] tracking-widest">
                  <span>Gross Subtotal</span>
                  <span className="text-slate-800 text-md">₹{cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center bg-primary/5 p-4 rounded-2xl border border-primary/10">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-[11px] font-bold text-primary uppercase tracking-widest">Total Savings</span>
                  </div>
                  <span className="text-md font-black text-primary">
                    ₹{totalSavings.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-slate-400 font-bold uppercase text-[11px] tracking-widest pt-2">
                  <span>Distribution Fee</span>
                  <span className="text-primary font-black">FREE</span>
                </div>
                
                <Separator className="my-6 opacity-50" />
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-slate-800">Grand Total</span>
                  <span className="text-3xl font-black text-primary">₹{cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Link href="/checkout">
                  <Button className="w-full h-16 rounded-full text-lg font-black bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20">
                    Proceed to Checkout <ArrowRight className="h-6 w-6 ml-2" />
                  </Button>
                </Link>
                <Link href="/products" className="block text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
                  Continue Procurement
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}