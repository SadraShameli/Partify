import { Resolver, Query, Ctx, Arg } from 'type-graphql';
import { Product } from '../entities/product';
import { MyContext } from '../utils/interfaces/context';

@Resolver(Product)
export class ProductResolver {
    @Query(() => [Product])
    getAllProducts(@Ctx() { em }: MyContext): Promise<Product[]> {
        return em.find(Product, {});
    }

    @Query(() => [Product])
    async getProductsByType(@Arg('productTypes', () => [String]) options: string[], @Ctx() { em }: MyContext): Promise<Product[]> {
        return await em.find(Product, { productTypes: options });
    }

    @Query(() => Product, { nullable: true })
    async getProductById(@Arg('id') option: number, @Ctx() { em }: MyContext): Promise<Product | null> {
        return await em.findOne(Product, { id: option });
    }
}
