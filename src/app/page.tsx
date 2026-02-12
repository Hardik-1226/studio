import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS } from '@/lib/products';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Eye, ArrowRight, Heart, Pill, Plus, Activity, Star, Stethoscope } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');
  const doc1 = PlaceHolderImages.find(img => img.id === 'doctor-1');
  const doc2 = PlaceHolderImages.find(img => img.id === 'doctor-2');
  const circle1 = PlaceHolderImages.find(img => img.id === 'med-circle-1');
  const circle2 = PlaceHolderImages.find(img => img.id === 'med-circle-2');

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
      <section className="relative bg-[#f0f9fa] min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-16 pb-20 overflow-hidden">
        
        {/* Hanging Icons - Slow Professional Animations */}
        <div className="absolute top-0 inset-x-0 h-full pointer-events-none z-0 hidden md:flex justify-around opacity-40">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center animate-bounce" 
              style={{ 
                animationDuration: `${12 + i * 2}s`, 
                animationDelay: `${i * 0.5}s`,
                marginTop: `${-20 + (i % 5) * 10}px` 
              }}
            >
              <div className="h-24 md:h-64 w-[1px] bg-slate-300"></div>
              {i % 5 === 0 ? (
                <Plus className="h-4 w-4 text-primary" />
              ) : i % 5 === 1 ? (
                <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" style={{ animationDuration: '6s' }} />
              ) : i % 5 === 2 ? (
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              ) : i % 5 === 3 ? (
                <Activity className="h-4 w-4 text-primary" />
              ) : (
                <Pill className="h-4 w-4 text-slate-400" />
              )}
            </div>
          ))}
        </div>

        <div className="container relative z-10 mx-auto">
          {/* Main Hero Content */}
          <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-800 leading-[1.1] uppercase">
              EMPOWERING<br />
              <span className="text-slate-800">WELLNESS THROUGH</span><br />
              <span className="text-primary">INNOVATION</span>
            </h1>
            <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed px-4">
              Reliable pharmaceutical products for hospitals, clinics & healthcare professionals across India.
            </p>
            <div className="pt-4">
              <Link href="/products">
                <Button size="lg" className="rounded-full px-10 h-14 text-md bg-[#3AB8C5] text-white hover:bg-[#32a2ae] shadow-xl transition-all font-black uppercase tracking-widest">
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </div>

          {/* Left Side - Doctor Illustrations */}
          <div className="absolute bottom-0 left-[-5%] hidden xl:flex items-end pointer-events-none opacity-60 hover:opacity-100 transition-opacity duration-700">
            <div className="relative h-[250px] w-[180px] animate-in slide-in-from-left duration-1000">
              <Image 
                src={doc1?.imageUrl || ''} 
                alt="Doctor 1" 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="relative h-[300px] w-[220px] -ml-16 animate-in slide-in-from-left duration-1000 delay-200">
              <Image 
                src={doc2?.imageUrl || ''} 
                alt="Doctor 2" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>

          {/* Right Side - Medical Circles */}
          <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 pointer-events-none opacity-60 hover:opacity-100 transition-opacity duration-700">
            <div className="h-28 w-28 rounded-full border-4 border-white shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-1000 delay-500">
              <Image 
                src={circle1?.imageUrl || ''} 
                alt="Medical Feature 1" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="h-36 w-36 rounded-full border-4 border-white shadow-2xl overflow-hidden relative mr-12 animate-in fade-in zoom-in duration-1000 delay-700">
              <Image 
                src={circle2?.imageUrl || ''} 
                alt="Medical Feature 2" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:pl-16">
              <h2 className="text-3xl font-black text-slate-800 tracking-tight uppercase">
                About <span className="text-primary">Health Plus Innovation</span>
              </h2>
              <div className="h-1.5 w-16 bg-primary rounded-full" />
              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                <strong>Health Plus Innovation Pvt. Ltd.</strong> is a leading pharmaceutical company founded in 2020. We are dedicated to delivering <strong>safe, effective, and high-quality medicines</strong> to healthcare providers and institutions across the nation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                Our operations are built on a foundation of <strong>trust and professional ethics</strong>, ensuring that every product in our catalog meets rigorous clinical standards for patient safety and well-being.
              </p>
            </div>
            <div className="relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50 group">
              <Image
                src={aboutImage?.imageUrl || ''}
                alt="HPI Quality Commitment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:pl-16">
            <Card className="p-10 border-none shadow-xl bg-white rounded-[2.5rem] hover:translate-y-[-8px] transition-all duration-500">
               <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-6 uppercase tracking-tight">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed text-justify">
                To be the <strong>pioneering force</strong> in pharmaceutical innovation, recognized for our <strong>unwavering commitment to quality</strong> and our role in shaping a healthier future for the Indian healthcare landscape.
              </p>
            </Card>
            <Card className="p-10 border-none shadow-xl bg-white rounded-[2.5rem] hover:translate-y-[-8px] transition-all duration-500">
               <div className="h-20 w-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                <Target className="h-10 w-10 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-6 uppercase tracking-tight">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed text-justify">
                At <strong>Health Plus Innovation</strong>, we bridge the gap between <strong>scientific advancement and patient care</strong> by providing affordable, clinical-grade formulations through ethical distribution networks.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Hospital Network */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4 uppercase tracking-tight">Trusted Institutional Network</h2>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto">Providing essential supplies to India's most prestigious healthcare centers.</p>
        </div>
        
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.slice(0, 12).map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-8 bg-slate-50 rounded-[2rem] shadow-sm hover:shadow-xl hover:translate-y-[-6px] transition-all duration-500 text-center space-y-4 group border border-slate-100">
                <div className="relative h-20 w-32 opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={`https://picsum.photos/seed/hpi-p${index}/400/200`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 leading-tight group-hover:text-primary transition-colors line-clamp-1">{partner.name}</h4>
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
