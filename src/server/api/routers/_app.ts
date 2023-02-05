import { createTRPCRouter } from '../trpc';
import { userRouter } from './user';
import { productsRouter } from './products';

export const appRouter = createTRPCRouter({
    products: productsRouter,
    user: userRouter,
});

export type AppRouter = typeof appRouter;
