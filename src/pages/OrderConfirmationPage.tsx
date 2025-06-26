import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Clock } from 'lucide-react';

// Placeholder data for the order summary
const orderDetails = {
  confirmationNumber: 'CKL-8B3D9F2A',
  items: [
    { name: 'Truffle Risotto', price: 28.50, quantity: 1 },
    { name: 'Seared Scallops', price: 34.00, quantity: 1 },
    { name: 'Artisan Bread Basket', price: 8.00, quantity: 1 },
  ],
  subtotal: 70.50,
  deliveryFee: 5.00,
  total: 75.50,
  estimatedDelivery: '30-45 minutes',
};

const OrderConfirmationPage = () => {
  console.log('OrderConfirmationPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Thank You for Your Order!</h1>
          <p className="text-muted-foreground mb-8">
            Your order has been placed successfully. We are now preparing your meal with the utmost care.
          </p>

          <Card className="text-left shadow-lg">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Order #{orderDetails.confirmationNumber}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {orderDetails.items.map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-sm">
                    <span className="text-foreground">{item.name} (x{item.quantity})</span>
                    <span className="font-medium">${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <Separator className="my-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${orderDetails.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>${orderDetails.deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-base text-foreground">
                  <span>Total</span>
                  <span>${orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 p-4 flex items-center justify-center text-sm">
              <Clock className="h-4 w-4 mr-2" />
              <span>Estimated Delivery: <strong>{orderDetails.estimatedDelivery}</strong></span>
            </CardFooter>
          </Card>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/menu">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/user-profile">View My Orders</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmationPage;