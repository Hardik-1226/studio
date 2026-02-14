'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ClipboardList, ShieldCheck, Mail, Phone, ChevronLeft, Building2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default function InquiryPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    notes: ''
  });

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/cart');
    }
  }, [cart.length, router]);

  if (cart.length === 0) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.institutionName || !formData.contactPerson) return "Please enter institution and contact name.";
    if (!formData.email.includes('@')) return "Please enter a valid email address.";
    if (formData.phone.length < 10) return "Please enter a valid phone number.";
    return null;
  };

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: error
      });
      return;
    }

    setLoading(true);

    // Simulate sending inquiry
    setTimeout(() => {
      toast({
        title: "Inquiry Sent Successfully",
        description: "Our institutional team will contact you within 24 hours."
      });
      clearCart();
      router.push('/success');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-2">
            <Button 
              variant="ghost" 
              onClick={() => router.push('/cart')} 
              className="pl-0 text-primary font-black uppercase tracking-widest text-[10px] hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Basket
            </Button>
            <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight">Institutional Inquiry</h1>
            <p className="text-sm text-slate-500 font-medium">Please provide your details for a professional procurement quote.</p>
          </div>

          <form onSubmit={handleSubmitInquiry} className="space-y-10">
            <Card className="border shadow-2xl rounded-[3rem] overflow-hidden bg-white">
              <CardHeader className="p-10 pb-4">
                <CardTitle className="text-2xl font-black text-slate-800 uppercase tracking-tight">Your Details</CardTitle>
              </CardHeader>
              <CardContent className="p-10 pt-0 space-y-8">
                {/* Institution & Person */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="institutionName" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Institution Name</Label>
                    <Input id="institutionName" name="institutionName" required value={formData.institutionName} onChange={handleInputChange} placeholder="Max Hospital / MedClinic" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="contactPerson" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Contact Person</Label>
                    <Input id="contactPerson" name="contactPerson" required value={formData.contactPerson} onChange={handleInputChange} placeholder="Dr. Rajesh Singh" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Official Email</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="procurement@hospital.com" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} placeholder="+91 92669 03156" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                </div>

                <div className="space-y-3">
                    <Label htmlFor="city" className="text-[10px] font-black uppercase tracking-widest text-slate-500">City</Label>
                    <Input id="city" name="city" required value={formData.city} onChange={handleInputChange} placeholder="New Delhi" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                </div>

                <div className="space-y-3">
                    <Label htmlFor="notes" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Inquiry Notes / Specific Requirements</Label>
                    <Textarea id="notes" name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Enter any specific batch or supply requirements..." className="rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all min-h-[120px] p-6" />
                </div>

                <div className="pt-8">
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full h-16 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all"
                  >
                    {loading ? 'Processing Inquiry...' : (
                      <>
                        Submit Inquiry Request <Send className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <div>
                <p className="font-black text-slate-800 text-sm uppercase tracking-tight">Direct Professional Channel</p>
                <p className="text-[10px] text-slate-500 font-medium">Your request goes directly to our institutional procurement team.</p>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-32 border shadow-2xl rounded-[3rem] overflow-hidden bg-white">
            <CardHeader className="bg-slate-800 p-8">
              <CardTitle className="flex items-center gap-3 text-xl font-black text-white uppercase tracking-tight">
                <ClipboardList className="h-6 w-6 text-primary" /> Inquiry List
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[450px] overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 items-start pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                    <div className="relative h-20 w-20 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-100">
                      <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow space-y-1">
                      <p className="font-black text-slate-800 text-sm uppercase tracking-tight">{item.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Qty: {item.quantity}</p>
                      <p className="text-[9px] text-primary font-black uppercase tracking-widest">Quote Requested</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-8 bg-slate-50/50 border-t border-slate-100 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">+91 9266903156</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">innovateplushealth@gmail.com</span>
                  </div>
                </div>
                <Separator className="opacity-10" />
                <p className="text-[8px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest">
                  Our experts will review the list and provide technical details and institutional pricing directly to your email.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
