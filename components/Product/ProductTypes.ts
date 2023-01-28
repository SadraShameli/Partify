export interface IProductVariant {
    Name: string;
    Color: string;
    InStock: boolean;
}

export interface IProduct {
    Id: number;
    Name: string;
    Price: string;
    MainImage: string;
    OtherImages: string[];
    Details: string;
    Description: string;
    Categories: string[];
    Highlights: string[];
    StarCount: number;
    ReviewCount: number;
    InStock: boolean;
    Variants: IProductVariant[];
}
