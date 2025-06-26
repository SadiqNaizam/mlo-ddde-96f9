import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ParallaxHeroSection: React.FC = () => {
  console.log('ParallaxHeroSection loaded');

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')`,
      }}
    >
      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Experience Culinary Art
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Discover a symphony of flavors crafted with passion. Our kitchen brings you an unforgettable dining experience, delivered to your door.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
            <Link to="/menu">
              Explore Our Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHeroSection;