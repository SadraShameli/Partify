export type ContactInformation = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes?: string;
};

export type ShippingInformation = {
    address: string;
    city: string;
    country: string;
    postcode: string;
};

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
