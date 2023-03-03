import argon2 from 'argon2';
import { Prisma } from '@prisma/client';
import { type GetServerSidePropsContext } from 'next';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { getServerSession, type NextAuthOptions, type DefaultSession } from 'next-auth';

import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';
import TwitchProvider from 'next-auth/providers/twitch';
import CredentialsProvider from 'next-auth/providers/credentials';

import { prisma } from './db';
import { env } from '~/env.mjs';
import Routes from '~/utils/routes';

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
        newUser: '/',
        verifyRequest: Routes.verifyRequest,
    },
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async session({ session, token }) {
            if (!session.user.image && token.email) {
                const user = await prisma.user.findUnique({
                    select: {
                        image: true,
                    },
                    where: {
                        email: token.email,
                    },
                });

                if (user?.image) {
                    session.user.image = user.image;
                }
            }
            return session;
        },
        async signIn({ user, profile, account }) {
            if (account?.type === 'oauth' && profile && 'picture' in profile && profile.picture && user.email) {
                try {
                    await prisma.user.update({
                        data: {
                            image: profile.picture,
                        },
                        where: {
                            email: user.email,
                        },
                    });
                } catch (e) {
                    if (e instanceof Prisma.PrismaClientKnownRequestError) {
                        if (e.code === 'P2025') {
                            return true;
                        }
                    }
                }
            }

            return true;
        },
    },
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
        AppleProvider({
            clientId: env.APPLE_ID,
            clientSecret: env.APPLE_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
        TwitchProvider({
            clientId: env.TWITCH_CLIENT_ID,
            clientSecret: env.TWITCH_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
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
                    throw new Error('No password exists for the email. Please set a password in your account dashboard.');
                }

                const authorized = await argon2.verify(user.password, credentials?.password as string);

                if (authorized) {
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
