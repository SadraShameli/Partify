import argon2 from 'argon2';
import Cookies from 'cookies';
import { v4 as uuidv4 } from 'uuid';
import { GetServerSidePropsContext } from 'next';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { getServerSession, NextAuthOptions, DefaultSession } from 'next-auth';

import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';
import TwitchProvider from 'next-auth/providers/twitch';
import CredentialsProvider from 'next-auth/providers/credentials';

import { prisma } from './db';
import { env } from '../env/server.mjs';
import Routes from '../utils/routes';

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
        } & DefaultSession['user'];
    }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: Routes.signIn,
        newUser: Routes.account,
        verifyRequest: Routes.verifyRequest,
    },
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        session({ session }) {
            return session;
        },
        jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }

            return token;
        },
    },
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
        CredentialsProvider({
            name: 'Sign in',
            credentials: { username: { label: 'Email', type: 'email' }, password: { label: 'Password', type: 'password' } },
            async authorize(credentials) {
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials?.username,
                    },
                });

                if (!user) {
                    throw new Error("Email address doesn't exist");
                }

                if (!user.password) {
                    throw new Error('No password exists for the email');
                }

                const authorized = await argon2.verify(user.password, credentials?.password as string);

                if (authorized) {
                    // const sessionToken = uuidv4();
                    // const sessionExpiry = '2592000';

                    // await prisma.session.create({
                    //     data: {
                    //         sessionToken: sessionToken,
                    //         userId: user.id,
                    //         expires: sessionExpiry,
                    //     },
                    // });

                    // const cookies = new Cookies(req);

                    // cookies.set('next-auth.session-token', sessionToken, {
                    //     expires: sessionExpiry,
                    // });

                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    };
                }

                return null;
            },
        }),
    ],
};

export const getServerAuthSession = (ctx: { req: GetServerSidePropsContext['req']; res: GetServerSidePropsContext['res'] }) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};
