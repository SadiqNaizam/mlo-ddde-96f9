import React, { useState } from 'react';
import { useForm, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft, PartyPopper } from 'lucide-react';

// Define Zod schemas for each step
const deliverySchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  postalCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid postal code format"),
});

const paymentSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, "Invalid card number (must be 16 digits)"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date (MM/YY)"),
  cvc: z.string().regex(/^\d{3,4}$/, "Invalid CVC (must be 3 or 4 digits)"),
});

// Combine schemas for full form validation
const checkoutSchema = deliverySchema.extend(paymentSchema.shape);

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const steps = [
  { id: 1, name: 'Delivery Information', fields: ['fullName', 'address', 'city', 'postalCode'] as const },
  { id: 2, name: 'Payment Details', fields: ['cardNumber', 'expiryDate', 'cvc'] as const },
  { id: 3, name: 'Review & Confirm' },
];

const MultiStepCheckoutForm: React.FC = () => {
  console.log('MultiStepCheckoutForm loaded');
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '',
      address: '',
      city: '',
      postalCode: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    },
  });

  const handleNext = async () => {
    const fields = steps[currentStep - 1].fields;
    const output = await trigger(fields, { shouldFocus: true });
    if (!output) return;

    if (currentStep < steps.length) {
      setCurrentStep(step => step + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(step => step - 1);
    }
  };

  const processForm = (data: CheckoutFormValues) => {
    console.log('Form submitted:', data);
    toast.success("Order Placed!", {
      description: "Thank you for your purchase. Your order is on its way.",
      icon: <PartyPopper className="h-4 w-4" />,
    });
    // Simulate API call delay
    setTimeout(() => {
        navigate('/order-confirmation');
    }, 1500);
  };
  
  const FormError: React.FC<{ name: keyof FieldErrors<CheckoutFormValues> }> = ({ name }) => {
    return errors[name] && <p className="text-sm font-medium text-destructive mt-1">{errors[name]?.message}</p>;
  };

  const slideVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl">
      <CardHeader>
        <CardTitle>Checkout</CardTitle>
        <CardDescription>Step {currentStep} of {steps.length}: {steps[currentStep - 1].name}</CardDescription>
        {/* Stepper */}
        <div className="flex items-center gap-4 pt-4">
            {steps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${currentStep > index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        {step.id}
                    </div>
                    {index < steps.length - 1 && <div className={`h-1 w-16 transition-all duration-300 ${currentStep > index + 1 ? 'bg-primary' : 'bg-muted'}`} />}
                </div>
            ))}
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit(processForm)}>
        <CardContent className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" {...register('fullName')} placeholder="John Doe" />
                    <FormError name="fullName" />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" {...register('address')} placeholder="123 Luxe Lane" />
                    <FormError name="address" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" {...register('city')} placeholder="Metropolis" />
                      <FormError name="city" />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" {...register('postalCode')} placeholder="12345" />
                      <FormError name="postalCode" />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" {...register('cardNumber')} placeholder="**** **** **** 1234" />
                        <FormError name="cardNumber" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input id="expiryDate" {...register('expiryDate')} placeholder="MM/YY" />
                            <FormError name="expiryDate" />
                        </div>
                        <div>
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" {...register('cvc')} placeholder="123" />
                            <FormError name="cvc" />
                        </div>
                    </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Review Your Order</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Full Name:</strong> {getValues('fullName')}</p>
                    <p><strong>Address:</strong> {`${getValues('address')}, ${getValues('city')}, ${getValues('postalCode')}`}</p>
                    <hr className="my-2" />
                    <p><strong>Card Number:</strong> Ending in {getValues('cardNumber').slice(-4)}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={handlePrev} disabled={currentStep === 1}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            {currentStep < steps.length ? (
                <Button type="button" onClick={handleNext}>
                    Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            ) : (
                <Button type="submit">Confirm Order</Button>
            )}
        </CardFooter>
      </form>
    </Card>
  );
};

export default MultiStepCheckoutForm;