import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedMenuItemCard from '@/components/AnimatedMenuItemCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

// --- MOCK DATA ---

const menuItems = {
  appetizers: [
    {
      id: 'app-01',
      name: 'Charred Octopus & Saffron Aioli',
      description: 'Tender octopus grilled to perfection, served with a creamy saffron aioli and a hint of smoked paprika.',
      price: 22.50,
      imageUrl: 'https://images.unsplash.com/photo-1598565236691-e40358a649a2?q=80&w=800&auto=format&fit=crop',
      tags: ['Signature', 'Seafood'],
    },
    {
      id: 'app-02',
      name: 'Burrata with Prosciutto & Fig Jam',
      description: 'Creamy burrata cheese paired with aged prosciutto di parma, sweet fig jam, and toasted sourdough.',
      price: 18.00,
      imageUrl: 'https://images.unsplash.com/photo-1588105389667-6a8f1b637153?q=80&w=800&auto=format&fit=crop',
      tags: ['Best Seller'],
    },
    {
      id: 'app-03',
      name: 'Truffle & Parmesan Arancini',
      description: 'Crispy risotto balls filled with truffle oil and parmesan, served on a bed of rich marinara sauce.',
      price: 16.00,
      imageUrl: 'https://images.unsplash.com/photo-1627916928819-a4c4c877479c?q=80&w=800&auto=format&fit=crop',
      tags: ['Vegetarian'],
    },
  ],
  mainCourses: [
    {
      id: 'main-01',
      name: 'Pan-Seared Scallops with Sunchoke Purée',
      description: 'Jumbo scallops, seared golden brown, resting on a velvety sunchoke purée with brown butter vinaigrette.',
      price: 42.00,
      imageUrl: 'https://images.unsplash.com/photo-1625944022216-77685e139366?q=80&w=800&auto=format&fit=crop',
      tags: ['Signature', 'Gluten-Free'],
    },
    {
      id: 'main-02',
      name: 'Wagyu Ribeye Steak (12oz)',
      description: 'A5 Wagyu ribeye cooked to your preference, served with duck fat potatoes and asparagus.',
      price: 85.00,
      imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c7373014?q=80&w=800&auto=format&fit=crop',
      tags: ['Premium'],
    },
    {
      id: 'main-03',
      name: 'Handmade Lobster Ravioli',
      description: 'Delicate pasta pillows filled with fresh lobster meat, tossed in a light saffron cream sauce.',
      price: 38.00,
      imageUrl: 'https://images.unsplash.com/photo-1621996346565-e326e7e24c26?q=80&w=800&auto=format&fit=crop',
      tags: ['Best Seller', 'Pasta'],
    },
     {
      id: 'main-04',
      name: 'Miso-Glazed Black Cod',
      description: 'Buttery black cod marinated in a sweet miso glaze, broiled and served with shiitake mushrooms.',
      price: 45.00,
      imageUrl: 'https://images.unsplash.com/photo-1617347454434-88390745543c?q=80&w=800&auto=format&fit=crop',
      tags: ['Seafood'],
    },
  ],
  desserts: [
    {
      id: 'des-01',
      name: 'Deconstructed Tiramisu',
      description: 'An artistic take on the classic, with espresso-soaked ladyfingers, mascarpone cream, and cocoa dust.',
      price: 15.00,
      imageUrl: 'https://images.unsplash.com/photo-1571115332239-9a334648b134?q=80&w=800&auto=format&fit=crop',
      tags: ['Modern Classic'],
    },
    {
      id: 'des-02',
      name: 'Molten Chocolate Lava Cake',
      description: 'A rich, dark chocolate cake with a warm, gooey center, served with raspberry coulis and vanilla bean ice cream.',
      price: 14.00,
      imageUrl: 'https://images.unsplash.com/photo-1586985289936-76a03a742812?q=80&w=800&auto=format&fit=crop',
      tags: ['Indulgent'],
    },
  ],
  beverages: [
    {
      id: 'bev-01',
      name: 'Artisanal Mineral Water',
      description: 'Sourced from pristine mountain springs. Available still or sparkling.',
      price: 8.00,
      imageUrl: 'https://images.unsplash.com/photo-1554902225-aa6132924157?q=80&w=800&auto=format&fit=crop',
      tags: [],
    },
    {
      id: 'bev-02',
      name: 'Freshly Squeezed Citrus Blend',
      description: 'A refreshing mix of orange, grapefruit, and blood orange, squeezed to order.',
      price: 12.00,
      imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop',
      tags: ['Non-Alcoholic'],
    },
  ],
};


const MenuPage = () => {
  console.log('MenuPage loaded');

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4 sm:py-24">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-cyan-400">
              Our Culinary Creations
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Discover a symphony of flavors, crafted with the finest ingredients and an unwavering passion for perfection.
            </p>
          </motion.div>

          <Tabs defaultValue="mainCourses" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-xl mb-12 bg-slate-900/50 border border-slate-800">
              <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
              <TabsTrigger value="mainCourses">Main Courses</TabsTrigger>
              <TabsTrigger value="desserts">Desserts</TabsTrigger>
              <TabsTrigger value="beverages">Beverages</TabsTrigger>
            </TabsList>

            <TabsContent value="appetizers">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {menuItems.appetizers.map(item => <AnimatedMenuItemCard key={item.id} {...item} />)}
              </div>
            </TabsContent>

            <TabsContent value="mainCourses">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                {menuItems.mainCourses.map(item => <AnimatedMenuItemCard key={item.id} {...item} />)}
              </div>
            </TabsContent>

            <TabsContent value="desserts">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {menuItems.desserts.map(item => <AnimatedMenuItemCard key={item.id} {...item} />)}
              </div>
            </TabsContent>
            
            <TabsContent value="beverages">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {menuItems.beverages.map(item => <AnimatedMenuItemCard key={item.id} {...item} />)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;