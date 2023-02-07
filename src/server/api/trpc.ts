import { Session } from 'next-auth';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';

import { prisma } from '../db';
import { getServerAuthSession } from '../auth';

type CreateContextOptions = {
    session: Session | null;
};

const createInnerTRPCContext = (opts: CreateContextOptions) => {
    return {
        prisma,
        session: opts.session,
    };
};

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
    const { req, res } = opts;

    const session = await getServerAuthSession({ req, res });

    return createInnerTRPCContext({
        session,
    });
};

import superjson from 'superjson';
import { initTRPC, TRPCError } from '@trpc/server';

const t = initTRPC.context<typeof createTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape }) {
        return shape;
    },
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    return next({
        ctx: {
            session: { ...ctx.session, user: ctx.session.user },
        },
    });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
