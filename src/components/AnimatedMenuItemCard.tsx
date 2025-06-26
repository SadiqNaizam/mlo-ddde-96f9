import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { toast } from 'sonner';

interface AnimatedMenuItemCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  tags?: string[];
}

const AnimatedMenuItemCard: React.FC<AnimatedMenuItemCardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  tags = [],
}) => {
  console.log('AnimatedMenuItemCard loaded for:', name);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent card click event if any
    toast.success(`${name} has been added to your cart!`);
    console.log(`Added product ${id} to cart.`);
  };

  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="group"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="w-full bg-slate-900/50 border border-slate-800 overflow-hidden shadow-lg hover:shadow-[0_8px_30px_rgba(0,255,255,0.2)] hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full">
        <CardHeader className="p-0 relative">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || 'https://via.placeholder.com/400x225/0F172A/FFFFFF?text=Luxe+Dish'}
              alt={name}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </CardHeader>
        
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-xl font-bold text-white mb-2 line-clamp-1">{name}</CardTitle>
          <p className="text-slate-400 text-sm mb-4 line-clamp-2 h-10">{description}</p>
          {tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-slate-800 text-cyan-400 border-slate-700">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="p-4 flex justify-between items-center mt-auto bg-slate-900/70">
          <p className="text-2xl font-light text-cyan-400">${price.toFixed(2)}</p>
          <Button
            onClick={handleAddToCart}
            aria-label={`Add ${name} to cart`}
            className="bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-all duration-300 transform-gpu scale-0 group-hover:scale-100 origin-right"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AnimatedMenuItemCard;