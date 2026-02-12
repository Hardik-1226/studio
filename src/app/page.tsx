
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/med1/1200/600"
            alt="Pharmacy shelf"
            fill
            className="object-cover opacity-20"
            priority
            data-ai-hint="pharmacy shelf"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 space-y-6">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground">
              Your Health, <span className="text-primary-foreground bg-primary px-2">Our Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Reliable access to quality healthcare essentials. Browse our wide range of medicines, supplements, and medical devices.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/products">
                <Button size="lg" className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Shop All Medicines
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Verified Medicines</h3>
              <p className="text-muted-foreground text-sm">100% genuine products sourced from certified manufacturers.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">Same-day or next-day delivery across major cities.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">Expert pharmacists available for consultations any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-headline font-bold">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((category) => (
            <Link key={category} href={`/products?category=${category}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer text-center">
                <CardContent className="pt-6 pb-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl">💊</span>
                  </div>
                  <span className="font-medium text-sm">{category}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-headline font-bold">Featured Products</h2>
          <Link href="/products" className="text-primary font-semibold flex items-center gap-1 hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="group overflow-hidden h-full flex flex-col border shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint="medical product"
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {product.category}
                  </span>
                  <h3 className="font-headline font-semibold text-lg mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                    <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Trusted by 10,000+ Families</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing only the best for your family. Our expert pharmacists review every order before dispatch.
          </p>
          <div className="pt-4">
            <Button className="h-12 px-8 font-semibold">Join Our Community</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
