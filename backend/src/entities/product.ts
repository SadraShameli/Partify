import { Field, ObjectType } from 'type-graphql';
import { Entity, Enum, Property } from '@mikro-orm/core';

import { Base } from '../utils/entities/base';
import { Price, PriceScalar } from '../contracts/types/price';
import { ProductAvailability } from '../contracts/enums/productAvailability';

@ObjectType()
@Entity()
export class Product extends Base<Product> {
    @Field()
    @Property()
    title!: string;

    @Field()
    @Property({ type: 'text' })
    description!: string;

    @Field()
    @Property()
    imageLink!: string;

    @Field(() => [String], { nullable: true })
    @Property()
    additionalImageLinks?: string[];

    @Field(() => ProductAvailability)
    @Enum(() => ProductAvailability)
    availability!: ProductAvailability;

    @Field(() => PriceScalar)
    @Property()
    price!: Price;

    @Field(() => String)
    @Property()
    brand!: string;

    @Field(() => [String])
    @Property()
    highlights!: string[];

    @Field(() => [String])
    @Property()
    productTypes!: string[];

    @Field()
    @Property()
    stockCount!: number;

    @Field()
    @Property()
    starCount!: number;

    @Field()
    @Property()
    reviewCount!: number;
}
