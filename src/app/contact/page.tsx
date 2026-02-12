'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. Our team will contact you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="bg-primary/5 py-16 md:py-24 text-center px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter mb-6 leading-tight">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Have questions about our pharmaceutical products or distribution network? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-none shadow-lg rounded-[2.5rem] bg-slate-50">
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call Us</p>
                        <p className="text-lg font-bold text-slate-800">+91 9266903156</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</p>
                        <p className="text-lg font-bold text-slate-800">info@hpi.co.in</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Visit Us</p>
                        <p className="text-sm font-bold text-slate-800 leading-relaxed">
                          D-4/1 1st floor okhla phase 2<br />Delhi-110020
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-3 text-slate-500 mb-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest">Business Hours</span>
                    </div>
                    <ul className="space-y-2 text-sm font-medium text-slate-600">
                      <li className="flex justify-between"><span>Mon - Fri</span> <span>09:00 - 18:00</span></li>
                      <li className="flex justify-between"><span>Saturday</span> <span>10:00 - 14:00</span></li>
                      <li className="flex justify-between"><span>Sunday</span> <span className="text-primary font-bold">Closed</span></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border shadow-xl rounded-[3rem] overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</Label>
                        <Input 
                          id="fullName" 
                          placeholder="Dr. Rajesh Kumar" 
                          required 
                          className="h-14 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all text-md"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="rajesh@hospital.com" 
                          required 
                          className="h-14 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all text-md"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Your Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your requirements or inquiry..." 
                        required 
                        rows={6}
                        className="rounded-3xl border-slate-100 bg-slate-50 focus:bg-white transition-all text-md p-6 min-h-[180px]"
                      />
                    </div>
                    <Button 
                      disabled={loading}
                      className="w-full h-16 rounded-full text-lg font-black bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 group transition-all"
                    >
                      {loading ? 'Sending Inquiry...' : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
