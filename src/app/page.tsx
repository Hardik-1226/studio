import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS } from '@/lib/products';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Eye, ArrowRight, Heart, Pill, Plus, Activity, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');

  const partners = [
    { name: "Max Gurgaon", text: "Hospital Partner" },
    { name: "Max BLK", text: "Hospital Partner" },
    { name: "Max Saket", text: "Hospital Partner" },
    { name: "Yatharth Faridabad", text: "Hospital Partner" },
    { name: "Yatharth Sector 110", text: "Hospital Partner" },
    { name: "Yatharth Bisrakh", text: "Hospital Partner" },
    { name: "Yatharth Greater Noida", text: "Hospital Partner" },
    { name: "Fortis Mohali", text: "Hospital Partner" },
    { name: "Accord Faridabad", text: "Hospital Partner" },
    { name: "Marengo Asia Faridabad", text: "Hospital Partner" },
    { name: "Indian Spinal Injuries Centre", text: "Hospital Partner" },
    { name: "CK Birla Hospital, Gurgaon", text: "Hospital Partner" },
    { name: "Paras Hospital, Gurgaon", text: "Hospital Partner" },
    { name: "Paras Hospital, Panchkula", text: "Hospital Partner" },
    { name: "Artemis Hospital", text: "Hospital Partner" },
    { name: "Fortis NCR (Total Health)", text: "Hospital Partner" },
    { name: "Manipal Hospital, Ghaziabad", text: "Hospital Partner" },
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Visual Themed Hero Section */}
      <section className="relative hero-gradient min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-16 pb-20">
        {/* Decorative Hanging Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-0 left-[10%] animate-bounce duration-[3000ms]"><div className="h-16 w-[1px] bg-primary mx-auto"></div><Heart className="text-primary h-5 w-5" /></div>
          <div className="absolute top-0 left-[25%] animate-bounce duration-[4000ms]"><div className="h-24 w-[1px] bg-accent mx-auto"></div><Star className="text-accent h-5 w-5" /></div>
          <div className="absolute top-0 left-[40%] animate-bounce duration-[3500ms]"><div className="h-20 w-[1px] bg-primary mx-auto"></div><Heart className="text-primary h-4 w-4" /></div>
          <div className="absolute top-0 left-[60%] animate-bounce duration-[4500ms]"><div className="h-28 w-[1px] bg-accent mx-auto"></div><Star className="text-accent h-6 w-6" /></div>
          <div className="absolute top-0 left-[75%] animate-bounce duration-[3200ms]"><div className="h-20 w-[1px] bg-primary mx-auto"></div><Pill className="text-primary h-5 w-5" /></div>
          <div className="absolute top-0 left-[90%] animate-bounce duration-[3800ms]"><div className="h-14 w-[1px] bg-accent mx-auto"></div><Heart className="text-accent h-4 w-4" /></div>

          <div className="absolute top-10 left-10 animate-pulse"><Activity className="text-primary h-6 w-6" /></div>
          <div className="absolute top-40 left-[15%] animate-pulse duration-[3000ms]"><Star className="text-accent h-4 w-4" /></div>
          <div className="absolute bottom-20 left-[5%] animate-pulse duration-[4000ms]"><Heart className="text-primary h-8 w-8" /></div>
          <div className="absolute top-20 right-20 animate-pulse"><Plus className="text-accent h-8 w-8" /></div>
          <div className="absolute bottom-40 right-[10%] animate-pulse duration-[3500ms]"><Star className="text-primary h-10 w-10" /></div>
          <div className="absolute top-[60%] right-[30%] animate-pulse duration-[5000ms]"><Heart className="text-accent h-6 w-6" /></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
            <div className="hidden lg:block relative w-1/4 h-[200px]">
               <Image 
                src="https://picsum.photos/seed/doc1/400/600" 
                alt="Healthcare Professionals" 
                width={200} 
                height={300} 
                className="object-contain"
                data-ai-hint="doctor image"
              />
            </div>

            <div className="flex-1 space-y-3">
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-800 leading-tight uppercase">
                Empowering<br />
                <span className="text-primary">Wellness</span> Through<br />
                Innovation
              </h1>
              <p className="text-base md:text-lg text-slate-600 max-w-lg mx-auto font-medium">
                Reliable pharmaceutical products for hospitals, clinics & healthcare professionals across India.
              </p>
              <div className="pt-4">
                <Link href="/products">
                  <Button size="lg" className="rounded-full px-8 h-12 text-base bg-primary text-white hover:bg-primary/90 shadow-lg transition-all font-bold">
                    Explore Our Products
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-3 w-1/4 items-center">
              <div className="h-24 w-24 rounded-full border-4 border-white shadow-md overflow-hidden">
                <Image src="https://picsum.photos/seed/lab1/300/300" alt="Lab" width={100} height={100} className="object-cover" data-ai-hint="laboratory" />
              </div>
              <div className="h-28 w-28 rounded-full border-4 border-white shadow-md overflow-hidden translate-x-4">
                <Image src="https://picsum.photos/seed/lab2/300/300" alt="Research" width={120} height={120} className="object-cover" data-ai-hint="research" />
              </div>
            </div>
          </div>
        </div>

        <div className="wave-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 lg:pl-10">
              <div className="inline-block">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 relative">
                  About Health Plus Innovation
                  <span className="absolute -bottom-1.5 left-0 w-16 h-1 bg-primary rounded-full" />
                </h2>
              </div>
              <p className="text-base text-slate-600 leading-relaxed text-justify">
                <span className="font-bold text-slate-800">Health Plus Innovation Pvt. Ltd.</span> is a pharmaceutical company founded in 2020 with a strong commitment to improving healthcare through <span className="font-bold text-slate-800">safe, reliable, and innovative medicines</span>. We focus on providing high-quality pharmaceutical products to hospitals, clinics, and healthcare professionals across India.
              </p>
              <p className="text-base text-slate-600 leading-relaxed text-justify">
                What makes <span className="font-bold text-slate-800">Health Plus Innovation</span> different is our focus on <span className="font-bold text-slate-800">trust, quality, and consistency</span>. We believe in building <span className="font-bold text-slate-800">long-term relationships</span> with healthcare providers by offering exceptional service.
              </p>
              <div className="pt-2">
                <Link href="/about">
                  <Button variant="outline" className="rounded-full px-8 h-12 text-base border-primary text-primary hover:bg-primary/10 transition-all font-bold">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[350px] rounded-[3rem] overflow-hidden shadow-xl border-4 border-slate-50 mx-auto w-full max-w-sm">
              <Image
                src={aboutImage?.imageUrl || ''}
                alt="HPI Quality Control"
                fill
                className="object-cover"
                data-ai-hint="quality control"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 md:p-8 border-none shadow-lg bg-white rounded-[2rem] hover:translate-y-[-5px] transition-transform duration-300">
               <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Our Vision</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
                Our vision is to become a <span className="font-bold text-slate-800">recognized and respected leader</span> in the pharmaceutical marketing industry, known for our dedication to <span className="font-bold text-slate-800">quality, innovation, and patient-centric solutions</span>. What makes <span className="font-bold text-slate-800">Health Plus Innovation</span> different is our unwavering focus on <span className="font-bold text-slate-800">trust, quality, and consistency</span>. We believe in building <span className="font-bold text-slate-800">long-term relationships</span> with healthcare providers by offering not only good products but also strong support.
              </p>
            </Card>
            <Card className="p-6 md:p-8 border-none shadow-lg bg-white rounded-[2rem] hover:translate-y-[-5px] transition-transform duration-300">
               <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Our Mission</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
                At <span className="font-bold text-slate-800">Health Plus Innovation (HPI)</span>, our mission is to deliver <span className="font-bold text-slate-800">high-quality, effective, and affordable pharmaceutical products</span> to healthcare professionals and institutions through <span className="font-bold text-slate-800">ethical marketing and reliable distribution</span>. We aim to bridge the gap between pharmaceutical manufacturers and hospitals by ensuring that <span className="font-bold text-slate-800">trusted medicines</span> reach the patients who need them most.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-8 flex justify-between items-end lg:pl-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Therapeutic Products</h2>
            <p className="text-slate-500 text-sm mt-1 font-medium">Quality medicines for healthcare settings.</p>
          </div>
          <Link href="/products">
            <Button variant="link" className="text-primary text-sm font-bold flex items-center gap-2 group p-0">
              View Catalog <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="container mx-auto px-4 lg:pl-10">
          <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
            <CarouselContent className="-ml-4">
              {PRODUCTS.map((product) => (
                <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Link href={`/products/${product.id}`}>
                    <Card className="hover:shadow-xl transition-all duration-500 h-full border-none shadow-md rounded-[1.5rem] overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="relative h-28 w-full overflow-hidden">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            data-ai-hint="medicine product"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-white/90 text-primary font-bold px-2 py-0.5 rounded-full shadow-sm border-none text-[8px]">
                              {product.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-1 text-slate-800 group-hover:text-primary transition-colors">{product.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary font-black text-base">₹{product.price.toFixed(2)}</span>
                            <span className="text-slate-400 line-through text-[10px] font-bold">₹{product.mrp.toFixed(2)}</span>
                          </div>
                          <Button variant="outline" className="w-full rounded-full h-8 border border-primary text-primary font-bold text-[10px] group-hover:bg-primary group-hover:text-white transition-all">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:flex -left-12" />
            <CarouselNext className="hidden xl:flex -right-12" />
          </Carousel>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Our Hospital Network</h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto font-medium">Collaborating with India's leading healthcare institutions.</p>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white rounded-[1.5rem] shadow-sm hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300 text-center space-y-2 group border border-slate-100">
                <div className="relative h-12 w-20 opacity-100 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={`https://picsum.photos/seed/partner${index}/400/200`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    data-ai-hint="hospital logo"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-800 leading-tight group-hover:text-primary transition-colors">{partner.name}</h4>
                  <p className="text-[9px] text-primary font-black uppercase tracking-widest mt-1">{partner.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
