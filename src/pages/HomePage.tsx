import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page-Specific Components
import ParallaxHeroSection from '@/components/ParallaxHeroSection';
import AnimatedMenuItemCard from '@/components/AnimatedMenuItemCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Placeholder data for featured dishes
const featuredDishes = [
  {
    id: 'dish-1',
    name: 'Artisanal Truffle Risotto',
    description: 'Creamy Arborio rice infused with black truffle, finished with aged Parmesan and a hint of white wine.',
    price: 28.50,
    imageUrl: 'https://images.unsplash.com/photo-1595295333158-4742f28f5de8?q=80&w=1974&auto=format&fit=crop',
    tags: ['Vegetarian', 'Signature'],
  },
  {
    id: 'dish-2',
    name: 'Pan-Seared Diver Scallops',
    description: 'Perfectly seared scallops served on a bed of saffron cauliflower puree with a citrus buerre blanc.',
    price: 34.00,
    imageUrl: 'https://images.unsplash.com/photo-1625944015147-3a47a15a3b96?q=80&w=1974&auto=format&fit=crop',
    tags: ['Seafood', 'Best Seller'],
  },
  {
    id: 'dish-3',
    name: 'Wagyu Beef Medallions',
    description: 'Melt-in-your-mouth Wagyu medallions with a red wine reduction, served with potato gratin.',
    price: 55.75,
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop',
    tags: ['Premium', 'Beef'],
  },
];

const HomePage: React.FC = () => {
  console.log('HomePage loaded');

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <ParallaxHeroSection />

        {/* Featured Dishes Section */}
        <section className="bg-slate-950/50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Signature Selections
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">
                A curated taste of the masterpieces from our kitchen.
              </p>
            </div>

            {/* Grid of Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDishes.map((dish) => (
                <AnimatedMenuItemCard
                  key={dish.id}
                  id={dish.id}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                  imageUrl={dish.imageUrl}
                  tags={dish.tags}
                />
              ))}
            </div>

            {/* Call to Action to full menu */}
            <div className="mt-16 text-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
                <Link to="/menu">
                  View The Full Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;