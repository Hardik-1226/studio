
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CreditCard, Truck, ShieldCheck, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });

  if (cart.length === 0) {
    if (typeof window !== 'undefined') router.push('/cart');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast({
        variant: "destructive",
        title: "Missing Info",
        description: "Please fill in all required shipping details."
      });
      return;
    }

    setLoading(true);

    // Mock Razorpay Payment Flow (Since this is frontend-only)
    // In a real app, you'd call a backend to create an order first.
    try {
      if (typeof window.Razorpay !== 'undefined') {
        const options = {
          key: "rzp_test_dummy_key", // Dummy key for frontend demonstration
          amount: Math.round(cartTotal * 100), // Amount in paisa
          currency: "USD",
          name: "MediShop",
          description: "Healthcare Essentials",
          handler: function (response: any) {
            toast({
              title: "Payment Successful",
              description: `Transaction ID: ${response.razorpay_payment_id}`
            });
            clearCart();
            router.push('/success');
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone
          },
          theme: {
            color: "#ADD8E6"
          }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        // Fallback for demo if Razorpay script didn't load
        setTimeout(() => {
          toast({
            title: "Demo Mode",
            description: "Processing payment via secure demo gateway..."
          });
          setTimeout(() => {
            clearCart();
            router.push('/success');
          }, 1500);
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Payment Failed",
        description: "There was an error processing your transaction."
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-headline font-bold">Checkout</h1>
            <p className="text-muted-foreground">Complete your order by providing shipping and payment details.</p>
          </div>

          <form onSubmit={handlePayment} className="space-y-6">
            <Card className="border shadow-sm">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Truck className="h-5 w-5 text-primary" /> Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Textarea id="address" name="address" required rows={3} value={formData.address} onChange={handleInputChange} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" required value={formData.city} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP / Postal Code</Label>
                    <Input id="zip" name="zip" required value={formData.zip} onChange={handleInputChange} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CreditCard className="h-5 w-5 text-primary" /> Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-white rounded border flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Razorpay Secure Checkout</p>
                      <p className="text-xs text-muted-foreground">Cards, Netbanking, UPI & Wallets</p>
                    </div>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-accent-foreground" />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Your payment details are encrypted and securely processed by Razorpay. We do not store any sensitive data.
                </p>
              </CardContent>
            </Card>
          </form>
        </div>

        <div>
          <Card className="sticky top-24 border shadow-sm">
            <CardHeader className="bg-muted/30">
              <CardTitle className="flex items-center gap-2 text-lg">
                <ShoppingCart className="h-5 w-5 text-primary" /> Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 divide-y">
              {cart.map(item => (
                <div key={item.id} className="py-4 flex justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="relative h-12 w-12 bg-muted rounded overflow-hidden shrink-0">
                      <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm line-clamp-1">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              
              <div className="pt-6 space-y-3">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-accent-foreground">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between text-xl font-bold pt-2">
                  <span>Grand Total</span>
                  <span className="text-primary-foreground bg-primary px-2">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
