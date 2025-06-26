import React from 'react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MultiStepCheckoutForm from '@/components/MultiStepCheckoutForm';

// shadcn/ui Components for layout and order summary
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Placeholder data for the order summary
const orderItems = [
  { id: 1, name: 'Truffle Risotto', quantity: 1, price: 28.00 },
  { id: 2, name: 'Seared Scallops', quantity: 1, price: 35.50 },
  { id: 3, name: 'Artisan Sourdough', quantity: 2, price: 4.50 },
];

const CheckoutPage = () => {
  console.log('CheckoutPage loaded');

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 5.00;
  const total = subtotal + shippingFee;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Checkout Form Section */}
          <div className="lg:col-span-2">
            <MultiStepCheckoutForm />
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {orderItems.map((item) => (
                    <li key={item.id} className="flex justify-between">
                      <span>{item.name} (x{item.quantity})</span>
                      <span className="font-medium text-foreground">${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shippingFee.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                 <div className="flex justify-between w-full font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;