import { GraphQLScalarType } from 'graphql/type';

export type Price = {
    value: number;
    currency: string;
};

export const PriceScalar = new GraphQLScalarType({
    name: 'Price',
});
