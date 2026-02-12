
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="font-headline font-bold text-2xl tracking-tight">Health Plus</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Health Plus Innovation Pvt. Ltd. - Committed to improving healthcare through safe, reliable, and innovative medicines since 2020.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary">Our Products</Link></li>
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Therapeutic Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=Analgesics" className="hover:text-primary">Analgesics</Link></li>
              <li><Link href="/products?category=Antibiotics" className="hover:text-primary">Antibiotics</Link></li>
              <li><Link href="/products?category=Cardiovascular" className="hover:text-primary">Cardiovascular</Link></li>
              <li><Link href="/products?category=Gastrointestinal" className="hover:text-primary">Gastrointestinal</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Corporate Hub, Pharmaceutical District, New Delhi, India</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 (123) 456-7890</span>
              </li>
              <li className="flex gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@hpi.co.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Health Plus Innovation Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
