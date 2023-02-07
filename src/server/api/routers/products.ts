import { z } from 'zod';
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc';

export const productsRouter = createTRPCRouter({
    getAllProducts: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.product.findMany();
    }),

    getProductById: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.product.findFirst({
            where: {
                id: input.id,
            },
            include: {
                brand: true,
                variants: true,
                currency: true,
            },
        });
    }),

    getHighestRatedProduct: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.product.findFirst({
            orderBy: {
                reviewCount: 'desc',
            },
            include: {
                variants: true,
                brand: true,
                currency: true,
            },
        });
    }),

    hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
        return {
            greeting: `Hello ${input.text}`,
        };
    }),

    getSecretMessage: protectedProcedure.query(() => {
        return 'you can now see this secret message!';
    }),
});
