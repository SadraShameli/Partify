import { createTRPCRouter } from './trpc';
import { userRouter } from './routers/user';
import { productsRouter } from './routers/products';

export const appRouter = createTRPCRouter({
    products: productsRouter,
    user: userRouter,
});

export type AppRouter = typeof appRouter;
