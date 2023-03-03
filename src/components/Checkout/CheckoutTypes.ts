import { z } from 'zod';
import { commonSchema } from '~/utils/zod/commonSchema';

export const CheckoutSchema = z.object({
    firstName: commonSchema.name,
    lastName: commonSchema.name,
    email: commonSchema.email,
    phone: commonSchema.phone,
    notes: z.string().optional(),
    address: commonSchema.address,
    city: commonSchema.city,
    country: commonSchema.country,
    postcode: commonSchema.postcode,
});

export type Checkout = z.infer<typeof CheckoutSchema>;

export type DeliveryMethod = {
    method: string;
    description: string;
    price: number;
};

export const DeliveryMethods: DeliveryMethod[] = [
    {
        method: 'Standard',
        description: '4-10 business days',
        price: 4.99,
    },
    {
        method: 'Express',
        description: '2-5 business days',
        price: 9.99,
    },
];
