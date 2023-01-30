export type CurrencyTypes = '$' | '€' | '£';

export interface IProductSubVariant {
    id: number;
    name: string;
    price: number;
    color: string;
    images: string[];
    inStock: boolean;
    currency: CurrencyTypes;
}

export interface IProductVariant {
    id: number;
    name: string;
    price: number;
    color: string;
    images: string[];
    inStock: boolean;
    currency: CurrencyTypes;
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    details: string;
    description: string;
    categories: string[];
    highlights: string[];
    starCount: number;
    reviewCount: number;
    inStock: boolean;
    variants: IProductVariant[];
    currency: CurrencyTypes;
}
