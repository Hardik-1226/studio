
'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, Search, Menu, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const Navbar = () => {
  const { cartCount } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold hover:text-primary">Home</Link>
                <Link href="/products" className="text-lg font-semibold hover:text-primary">Products</Link>
                <Link href="/about" className="text-lg font-semibold hover:text-primary">About Us</Link>
                <Link href="/contact" className="text-lg font-semibold hover:text-primary">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="font-headline font-bold text-2xl tracking-tight hidden sm:inline-block">MediShop</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <Link href="/products" className="transition-colors hover:text-primary">Products</Link>
          <Link href="/about" className="transition-colors hover:text-primary">About Us</Link>
          <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-accent text-accent-foreground border-none">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
