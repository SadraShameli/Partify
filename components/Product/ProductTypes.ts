export interface IProduct {
    Id: number;
    Name: string;
    Price: string;
    Image: string;
    Details: string;
    Description: string;
    Categories: string[];
    Highlights: string[];
    StarCount: number;
    ReviewCount: number;
    InStock: boolean;
    Variants: {
        Title: string;
        InStock: boolean;
    }[];
}
