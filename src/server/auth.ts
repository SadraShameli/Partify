import { type GetServerSidePropsContext } from 'next';
import AppleProvdier from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { getServerSession, type NextAuthOptions, type DefaultSession } from 'next-auth';

import { prisma } from './db';
import { env } from '../env/server.mjs';

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
        } & DefaultSession['user'];
    }
}

export const authOptions: NextAuthOptions = {
    callbacks: {
        session({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
            }
            return session;
        },
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_ID,
            clientSecret: env.GOOGLE_SECRET,
        }),
        AppleProvdier({
            clientId: env.APPLE_ID,
            clientSecret: env.APPLE_SECRET,
        }),
    ],
};

export const getServerAuthSession = (ctx: { req: GetServerSidePropsContext['req']; res: GetServerSidePropsContext['res'] }) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};
