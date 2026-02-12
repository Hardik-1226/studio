
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/products';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImages = [
    PlaceHolderImages.find(img => img.id === 'hero-1'),
    PlaceHolderImages.find(img => img.id === 'hero-2'),
  ];

  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');

  const partners = [
    { name: "Global Health Care", text: "Trusted Distributor" },
    { name: "PharmaLink India", text: "Logistics Partner" },
    { name: "MediCore Systems", text: "Technology Provider" },
    { name: "SafeCare Labs", text: "Quality Auditor" },
    { name: "Unity Hospitals", text: "Institutional Partner" },
    { name: "BioTech Solutions", text: "Innovation Partner" },
    { name: "Rapid Delivery Co", text: "Supply Chain" },
    { name: "HealthFirst Clinics", text: "Preferred Provider" },
    { name: "Nova Pharmaceuticals", text: "Manufacturing Partner" },
    { name: "Apex Medicals", text: "Regional Distributor" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Heading */}
      <section className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Health Plus Innovation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Improving healthcare through safe, reliable, and innovative medicines since 2020.
          </p>
        </div>
      </section>

      {/* Hero Slider */}
      <section className="container mx-auto px-4 mb-20">
        <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {heroImages.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden">
                  <Image
                    src={img?.imageUrl || ''}
                    alt={img?.description || ''}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground bg-primary inline-block px-4 py-1">About HPI</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Health Plus Innovation Pvt. Ltd. is a pharmaceutical company founded in 2020 with a strong commitment to improving healthcare through safe, reliable, and innovative medicines. We focus on providing high-quality pharmaceutical products to hospitals, clinics, and healthcare professionals across India.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our goal is to ensure that the right medicines reach the right hands — helping patients recover better, faster, and safer. Trust, quality, and consistency are at the core of everything we do.
              </p>
              <div className="pt-4">
                <Link href="/about">
                  <Button size="lg" className="rounded-full px-8">Learn More About Us</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={aboutImage?.imageUrl || ''}
                alt="About HPI"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border rounded-3xl overflow-hidden shadow-sm">
            <div className="p-12 bg-primary/5 border-r border-muted flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To become the most trusted and innovative pharmaceutical partner in India, ensuring accessible healthcare solutions for every patient through excellence in quality and service.
              </p>
            </div>
            <div className="p-12 bg-accent/5 flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To build long-term relationships with healthcare providers by offering high-quality products, consistent support, and innovative solutions that help patients recover safer and faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Slider */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold">Our Products</h2>
            <p className="text-muted-foreground mt-2">Quality medicines across multiple therapeutic areas.</p>
          </div>
          <Link href="/products" className="text-primary font-semibold flex items-center gap-2 hover:underline">
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="container mx-auto px-4">
          <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
            <CarouselContent className="-ml-4">
              {PRODUCTS.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link href={`/products/${product.id}`}>
                    <Card className="hover:shadow-md transition-shadow h-full">
                      <CardContent className="p-0">
                        <div className="relative h-64 w-full">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <div className="p-6">
                          <span className="text-xs font-bold text-primary uppercase tracking-wider">{product.category}</span>
                          <h3 className="text-xl font-bold mt-2 mb-4">{product.name}</h3>
                          <Button variant="outline" className="w-full rounded-full">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-muted-foreground text-lg">Collaborating with the best in healthcare to deliver excellence.</p>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-muted/20 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-muted/30 transition-all text-center space-y-4 group">
                <div className="relative h-20 w-32 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100">
                  <Image
                    src={`https://picsum.photos/seed/partner${index}/200/100`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{partner.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-tight mt-1">{partner.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
