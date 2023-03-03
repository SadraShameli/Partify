import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const categoriesRouter = createTRPCRouter({
    getAllCategories: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.category.findMany();
    }),

    getAllCategoryProducts: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.category.findMany({
            where: {
                id: input.id,
            },
            include: {
                mainCategories: true,
                productRange: true,
            },
        });
    }),
});
