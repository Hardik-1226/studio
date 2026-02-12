
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function SuccessPage() {
  const orderNumber = Math.floor(Math.random() * 90000000) + 10000000;

  return (
    <div className="container mx-auto px-4 py-20 text-center space-y-12">
      <div className="space-y-6">
        <div className="h-24 w-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent-foreground">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-headline font-bold">Order Placed Successfully!</h1>
          <p className="text-xl text-muted-foreground">Thank you for choosing MediShop. Your health is our priority.</p>
        </div>
      </div>

      <div className="max-w-md mx-auto p-8 bg-white border rounded-2xl shadow-sm space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between text-sm py-2 border-b">
            <span className="text-muted-foreground">Order Number</span>
            <span className="font-bold">#MS-{orderNumber}</span>
          </div>
          <div className="flex justify-between text-sm py-2 border-b">
            <span className="text-muted-foreground">Order Status</span>
            <span className="text-accent-foreground font-bold uppercase">Processing</span>
          </div>
          <div className="flex justify-between text-sm py-2 border-b">
            <span className="text-muted-foreground">Estimated Delivery</span>
            <span className="font-bold">24-48 Hours</span>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground">
          A confirmation email has been sent to your registered email address with the full invoice details.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/products">
          <Button size="lg" className="h-12 px-8 font-semibold gap-2">
            <ShoppingBag className="h-5 w-5" /> Continue Shopping
          </Button>
        </Link>
        <Link href="/">
          <Button size="lg" variant="outline" className="h-12 px-8 font-semibold gap-2">
            Go to Homepage <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
