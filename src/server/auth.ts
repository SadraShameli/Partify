import { GetServerSidePropsContext } from 'next';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { getServerSession, NextAuthOptions, DefaultSession } from 'next-auth';

import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';
import TwitchProvider from 'next-auth/providers/twitch';
import CredentialsProvider from 'next-auth/providers/credentials';

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
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
        AppleProvider({
            clientId: env.APPLE_ID,
            clientSecret: env.APPLE_SECRET,
        }),
        TwitchProvider({
            clientId: env.TWITCH_CLIENT_ID,
            clientSecret: env.TWITCH_CLIENT_SECRET,
        }),
    ],
};

export const getServerAuthSession = (ctx: { req: GetServerSidePropsContext['req']; res: GetServerSidePropsContext['res'] }) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};
