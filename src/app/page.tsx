
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS } from '@/lib/products';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Eye, ArrowRight, Heart, Pill, Plus, Activity } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage1 = PlaceHolderImages.find(img => img.id === 'hero-1');
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
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Visual Themed Hero Section */}
      <section className="relative hero-gradient min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-32">
        {/* Decorative Hanging Icons (Mocking the provided theme) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 animate-bounce duration-[3000ms]"><div className="h-20 w-[1px] bg-primary mx-auto"></div><Heart className="text-primary h-6 w-6" /></div>
          <div className="absolute top-0 left-1/2 animate-bounce duration-[4000ms]"><div className="h-32 w-[1px] bg-accent mx-auto"></div><Plus className="text-accent h-6 w-6" /></div>
          <div className="absolute top-0 left-3/4 animate-bounce duration-[3500ms]"><div className="h-24 w-[1px] bg-primary mx-auto"></div><Pill className="text-primary h-6 w-6" /></div>
          <div className="absolute top-10 left-10 animate-pulse"><Activity className="text-primary h-8 w-8" /></div>
          <div className="absolute top-20 right-20 animate-pulse"><Plus className="text-accent h-10 w-10" /></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-8">
            {/* Left Image Placeholder (Doctors) */}
            <div className="hidden lg:block relative w-1/4 h-[400px]">
               <Image 
                src="https://picsum.photos/seed/doc1/400/600" 
                alt="Healthcare Professionals" 
                width={400} 
                height={600} 
                className="object-contain"
              />
            </div>

            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-800 leading-tight">
                EMPOWERING<br />
                <span className="text-primary">WELLNESS</span> THROUGH<br />
                INNOVATION
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-medium">
                Reliable pharmaceutical products for hospitals, clinics & healthcare professionals across India.
              </p>
              <div className="pt-8">
                <Link href="/products">
                  <Button size="lg" className="rounded-full px-12 h-16 text-xl bg-primary text-white hover:bg-primary/90 shadow-xl transition-all font-bold">
                    Explore Our Products
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Images (Bubbles/Circles) */}
            <div className="hidden lg:flex flex-col gap-4 w-1/4 items-center">
              <div className="h-40 w-40 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <Image src="https://picsum.photos/seed/lab1/300/300" alt="Lab" width={300} height={300} className="object-cover" />
              </div>
              <div className="h-48 w-48 rounded-full border-4 border-white shadow-lg overflow-hidden translate-x-10">
                <Image src="https://picsum.photos/seed/lab2/300/300" alt="Research" width={300} height={300} className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Shape at bottom */}
        <div className="wave-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <h2 className="text-4xl font-bold text-slate-800 relative">
                  About Health Plus Innovation
                  <span className="absolute -bottom-2 left-0 w-24 h-1.5 bg-primary rounded-full" />
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Health Plus Innovation Pvt. Ltd. is a pharmaceutical company founded in 2020 with a strong commitment to improving healthcare through safe, reliable, and innovative medicines. We focus on providing high-quality pharmaceutical products to hospitals, clinics, and healthcare professionals across India.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                What makes Health Plus Innovation different is our focus on trust, quality, and consistency. We believe in building long-term relationships with healthcare providers by offering not only good products but also strong support.
              </p>
              <div className="pt-4">
                <Link href="/about">
                  <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg border-primary text-primary hover:bg-primary/10 transition-all">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <Image
                src={aboutImage?.imageUrl || ''}
                alt="HPI Quality Control"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-12 border-none shadow-xl bg-white rounded-[3rem] hover:translate-y-[-10px] transition-transform duration-300">
               <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To become the most trusted and innovative pharmaceutical partner in India, ensuring accessible healthcare solutions for every patient through excellence in quality and service.
              </p>
            </Card>
            <Card className="p-12 border-none shadow-xl bg-white rounded-[3rem] hover:translate-y-[-10px] transition-transform duration-300">
               <div className="h-16 w-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To build long-term relationships with healthcare providers by offering high-quality products, consistent support, and innovative solutions that help patients recover safer and faster.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-bold text-slate-800">Therapeutic Products</h2>
            <p className="text-slate-500 text-lg mt-2 font-medium">Quality medicines for professional healthcare settings.</p>
          </div>
          <Link href="/products">
            <Button variant="link" className="text-primary text-lg font-bold flex items-center gap-2 group p-0">
              View Catalog <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="container mx-auto px-4">
          <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
            <CarouselContent className="-ml-6">
              {PRODUCTS.map((product) => (
                <CarouselItem key={product.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <Link href={`/products/${product.id}`}>
                    <Card className="hover:shadow-2xl transition-all duration-500 h-full border-none shadow-lg rounded-[3rem] overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-white/90 text-primary font-bold px-4 py-1.5 rounded-full shadow-sm border-none">
                              {product.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-8">
                          <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-primary transition-colors">{product.name}</h3>
                          <p className="text-slate-500 mb-6 line-clamp-2">{product.description}</p>
                          <Button variant="outline" className="w-full rounded-full h-12 border-primary/20 text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Trusted Strategic Partners</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">Collaborating with leaders across the healthcare ecosystem.</p>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-8 bg-white rounded-[3rem] shadow-sm hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 text-center space-y-4 group border border-slate-100">
                <div className="relative h-20 w-32 opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={`https://picsum.photos/seed/partner${index}/300/150`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">{partner.name}</h4>
                  <p className="text-[10px] text-primary font-black uppercase tracking-widest mt-1">{partner.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
