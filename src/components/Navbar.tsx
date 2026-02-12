
'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, Search, Menu, User, Instagram, Twitter, Facebook, Phone, Mail, FileDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Top Contact Bar */}
      <div className="w-full bg-primary text-primary-foreground py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3" /> +91 (123) 456-7890
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3 w-3" /> info@hpi.co.in
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" target="_blank" className="hover:opacity-80 transition-opacity">
              <Facebook className="h-3.5 w-3.5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:opacity-80 transition-opacity">
              <Twitter className="h-3.5 w-3.5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:opacity-80 transition-opacity">
              <Instagram className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-20 items-center justify-between gap-4">
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
                  <Button variant="outline" className="mt-4 gap-2">
                    <FileDown className="h-4 w-4" /> Download Brochure
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-2xl">H</span>
              </div>
              <span className="font-headline font-bold text-3xl tracking-tighter hidden sm:inline-block">
                Health<span className="text-primary">Plus</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <Link href="/products" className="transition-colors hover:text-primary">Products</Link>
            <Link href="/about" className="transition-colors hover:text-primary">About Us</Link>
            <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="outline" className="hidden lg:flex gap-2 rounded-full border-primary/30 hover:bg-primary/10">
              <FileDown className="h-4 w-4 text-primary" /> Brochure
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
      </div>
    </header>
  );
};
