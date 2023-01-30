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

export const ValidationPatterns = {
    charSpace: /^[A-Za-z ]+$/,
    charNumSpace: /^[A-Za-z0-9 ]+$/,
    email: /^[a-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[a-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-zA-Z]{2,}$/i,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    phone: /^\d+$/,
};
