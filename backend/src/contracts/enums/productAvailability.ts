import { registerEnumType } from 'type-graphql';

export enum ProductAvailability {
    inStock,
    outOfStock,
    preOrder,
    backOrder,
}

registerEnumType(ProductAvailability, {
    name: 'ProductAvailability',
});
