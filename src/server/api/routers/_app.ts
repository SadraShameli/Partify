import { createTRPCRouter } from '../trpc';
import { productsRouter } from './products';

export const appRouter = createTRPCRouter({
    products: productsRouter,
});

export type AppRouter = typeof appRouter;
