import { z } from 'zod';
import argon2 from 'argon2';
import { Prisma } from '@prisma/client';
import { createTRPCRouter, publicProcedure } from '../trpc';

import { commonSchema } from '~/utils/zod/commonSchema';
import { UserSignUpSchema } from '~/components/User/UserTypes';

export const userRouter = createTRPCRouter({
    authorizeUser: publicProcedure.input(z.object({ email: commonSchema.email, password: commonSchema.password })).query(async ({ ctx, input }) => {
        const user = await ctx.prisma.user.findFirst({
            where: {
                email: input.email,
            },
        });

        if (!user) {
            return { error: "Email address doesn't exist" };
        }

        if (!user.password) {
            return { error: 'No password exists for the email. Please set your password in the account dashboard.' };
        }

        const authorized = await argon2.verify(user.password, input.password);

        if (authorized) {
            return { status: true };
        }

        return { status: false };
    }),

    createUser: publicProcedure.input(UserSignUpSchema).mutation(async ({ ctx, input }) => {
        try {
            await ctx.prisma.user.create({
                data: {
                    email: input.email,
                    password: await argon2.hash(input.password),
                    name: `${input.firstName} ${input.lastName}`,
                },
            });
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    return {
                        error: 'This email has already been taken',
                    };
                }
            }
        }
    }),
});
