import { CurrencyTypes } from '../Product/ProductTypes';

export interface IContactInformation {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes?: string;
}

export interface IShippingInformation {
    address: string;
    city: string;
    country: string;
    postcode: string;
}

export interface IDeliveryMethod {
    method: string;
    description: string;
    cost: number;
    currency: CurrencyTypes;
}

export const DeliveryMethods: IDeliveryMethod[] = [
    {
        method: 'Standard',
        description: '4-10 business days',
        cost: 5,
        currency: '$',
    },
    {
        method: 'Express',
        description: '2-5 business days',
        cost: 10,
        currency: '$',
    },
];
