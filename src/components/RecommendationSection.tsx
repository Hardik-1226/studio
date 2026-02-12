
'use client';

import { useState, useEffect } from 'react';
import { recommendProducts, ProductRecommendationsOutput } from '@/ai/flows/product-recommendations';
import { useCart } from '@/context/CartContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

export const RecommendationSection = () => {
  const { cart, addToCart } = useCart();
  const [recommendations, setRecommendations] = useState<ProductRecommendationsOutput['recommendations']>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (cart.length === 0) return;

    const fetchRecs = async () => {
      setLoading(true);
      try {
        const input = { cartItems: cart.map(item => ({ name: item.name })) };
        const result = await recommendProducts(input);
        setRecommendations(result.recommendations);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecs();
  }, [cart.length]);

  if (cart.length === 0) return null;

  const handleAddRec = (rec: any) => {
    addToCart({
      id: `rec-${Math.random()}`,
      name: rec.name,
      category: 'Suggested',
      description: rec.description,
      price: rec.price,
      imageUrl: rec.imageUrl
    });
    toast({
      title: "Added suggestion",
      description: `${rec.name} has been added based on your cart.`
    });
  };

  return (
    <div className="space-y-6 mt-12 bg-primary/5 p-6 rounded-2xl border border-primary/20">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">Frequently Bought Together</h2>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2 text-muted-foreground font-medium">Analyzing your cart for suggestions...</span>
        </div>
      ) : recommendations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map((rec, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0 flex items-center">
                <div className="relative h-24 w-24 shrink-0 bg-muted">
                  <Image
                    src={rec.imageUrl}
                    alt={rec.name}
                    fill
                    className="object-cover"
                    data-ai-hint="medical product suggestion"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h4 className="font-bold text-sm mb-1">{rec.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-1">${rec.price.toFixed(2)}</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-2 text-primary hover:bg-primary/10 w-full justify-start gap-1"
                    onClick={() => handleAddRec(rec)}
                  >
                    <PlusCircle className="h-3 w-3" /> Add to cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">Add more items to see personal suggestions.</p>
      )}
    </div>
  );
};
