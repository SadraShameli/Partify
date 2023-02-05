import { z } from 'zod';
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc';

import { UserSignUpSchema } from './../../../components/User/UserTypes';

export const userRouter = createTRPCRouter({
    getAllusers: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findMany();
    }),

    // getUser: publicProcedure.input(z.object({ id: z.number() })).query(({ ctx, input }) => {
    //     return ctx.prisma.user.findFirst({
    //         where: {
    //             id: input.id,
    //         },
    //     });
    // }),

    // setUser: protectedProcedure.input(UserSignUpSchema).mutation(({ctx, input}) => {
    //     return ctx.prisma.user.create({
    //         data: {
    //             email: input.email,

    //         }
    //     })
    // });

    hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
        return {
            greeting: `Hello ${input.text}`,
        };
    }),

    getSecretMessage: protectedProcedure.query(() => {
        return 'you can now see this secret message!';
    }),
});
