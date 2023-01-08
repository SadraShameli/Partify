export interface IProduct {
    Name: string,
    Image: string,
    Price: string,
    InStock: boolean,
    Variants: {
        Title: string,
        InStock: boolean
    }[]
}