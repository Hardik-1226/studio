
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
      <section className="bg-white pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground to-primary drop-shadow-sm">
              Health Plus Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Revolutionizing healthcare with safe, reliable, and <span className="text-primary font-bold">visionary medical solutions</span> across India.
          </p>
        </div>
      </section>

      {/* Hero Slider */}
      <section className="container mx-auto px-4 mb-20">
        <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {heroImages.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[450px] md:h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src={img?.imageUrl || ''}
                    alt={img?.description || ''}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-16" />
          <CarouselNext className="hidden md:flex -right-16" />
        </Carousel>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <h2 className="text-4xl font-bold text-foreground relative">
                  About HPI
                  <span className="absolute -bottom-2 left-0 w-24 h-1.5 bg-primary rounded-full" />
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Health Plus Innovation Pvt. Ltd. is a pharmaceutical company founded in 2020 with a strong commitment to improving healthcare through safe, reliable, and innovative medicines. We focus on providing high-quality pharmaceutical products to hospitals, clinics, and healthcare professionals across India.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our goal is to ensure that the right medicines reach the right hands — helping patients recover better, faster, and safer. Trust, quality, and consistency are at the core of everything we do.
              </p>
              <div className="pt-4">
                <Link href="/about">
                  <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-lg hover:shadow-primary/20 transition-all">
                    Discover Our Journey
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl transform lg:rotate-2 transition-transform hover:rotate-0 duration-500">
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border rounded-[3rem] overflow-hidden shadow-xl">
            <div className="p-16 bg-primary/5 border-r border-muted flex flex-col items-center text-center space-y-6">
              <div className="h-20 w-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 transform -rotate-12">
                <Eye className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Our Vision</h2>
              <p className="text-muted-foreground text-xl leading-relaxed">
                To become the most trusted and innovative pharmaceutical partner in India, ensuring accessible healthcare solutions for every patient through excellence in quality and service.
              </p>
            </div>
            <div className="p-16 bg-accent/5 flex flex-col items-center text-center space-y-6">
              <div className="h-20 w-20 bg-accent/20 rounded-2xl flex items-center justify-center mb-4 transform rotate-12">
                <Target className="h-10 w-10 text-accent-foreground" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-muted-foreground text-xl leading-relaxed">
                To build long-term relationships with healthcare providers by offering high-quality products, consistent support, and innovative solutions that help patients recover safer and faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Slider */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold tracking-tight">Therapeutic Excellence</h2>
            <p className="text-muted-foreground text-lg mt-2 font-medium">Precision medicines crafted for institutional healthcare.</p>
          </div>
          <Link href="/products">
            <Button variant="link" className="text-primary text-lg font-bold flex items-center gap-2 group p-0">
              Explore All Medicines <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="container mx-auto px-4">
          <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
            <CarouselContent className="-ml-6">
              {PRODUCTS.map((product) => (
                <CarouselItem key={product.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <Link href={`/products/${product.id}`}>
                    <Card className="hover:shadow-xl transition-all duration-300 h-full border-none shadow-sm rounded-[2rem] overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="relative h-72 w-full overflow-hidden">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-white/90 text-primary-foreground font-bold px-4 py-1.5 rounded-full shadow-sm border-none">
                              {product.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-8">
                          <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                          <Button variant="outline" className="w-full rounded-full h-12 border-primary/20 text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all">
                            Clinical Specifications
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6" />
            <CarouselNext className="hidden md:flex -right-6" />
          </Carousel>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Strategic Partners</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">Uniting with industry leaders to maintain the highest standards in the pharmaceutical supply chain.</p>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-8 bg-muted/20 rounded-[2.5rem] border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-300 text-center space-y-5 group">
                <div className="relative h-24 w-40 grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100 transform group-hover:scale-110 duration-500">
                  <Image
                    src={`https://picsum.photos/seed/partner${index}/300/150`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground">{partner.name}</h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mt-2">{partner.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
