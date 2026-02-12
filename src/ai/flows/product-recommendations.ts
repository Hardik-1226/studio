'use server';
/**
 * @fileOverview An AI agent for providing product recommendations based on cart contents.
 *
 * - recommendProducts - A function that handles the product recommendation process.
 * - ProductRecommendationsInput - The input type for the recommendProducts function.
 * - ProductRecommendationsOutput - The return type for the recommendProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationsInputSchema = z.object({
  cartItems: z.array(
    z.object({
      name: z.string().describe('The name of the product in the cart.'),
    })
  ).describe('A list of items currently in the user\'s shopping cart. Include names only.'),
});
export type ProductRecommendationsInput = z.infer<typeof ProductRecommendationsInputSchema>;

const RecommendedProductSchema = z.object({
  name: z.string().describe('The name of the recommended product.'),
  description: z.string().describe('A brief description of the recommended product.'),
  price: z.number().describe('The price of the recommended product.'),
  imageUrl: z.string().describe('A URL or path to the image of the recommended product. Use a placeholder if a real image is not available.'),
});

const ProductRecommendationsOutputSchema = z.object({
  recommendations: z.array(RecommendedProductSchema).describe('A list of 3 to 5 recommended products based on the cart items.'),
});
export type ProductRecommendationsOutput = z.infer<typeof ProductRecommendationsOutputSchema>;

export async function recommendProducts(input: ProductRecommendationsInput): Promise<ProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const productRecommendationsPrompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: ProductRecommendationsInputSchema},
  output: {schema: ProductRecommendationsOutputSchema},
  prompt: `You are an expert in medicine e-commerce, capable of suggesting relevant products to customers.

Based on the following items in the user's shopping cart, provide 3 to 5 product recommendations that are similar in category, medical use, or frequently bought together. Focus on suggesting common over-the-counter medicines or related health products.
Ensure each recommendation includes its name, a short description, its price (as a number, e.g., 10.99), and a placeholder image URL.

Current cart items:
{{#each cartItems}}
- Name: {{{name}}}
{{/each}}`,
});

const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: ProductRecommendationsInputSchema,
    outputSchema: ProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await productRecommendationsPrompt(input);
    return output!;
  }
);
