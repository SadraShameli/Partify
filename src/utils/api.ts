import superjson from 'superjson';
import { createTRPCNext } from '@trpc/next';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';

import { type AppRouter } from '~/server/api/root';

const getBaseUrl = () => {
    if (typeof window !== 'undefined') return '';
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return `http://localhost:${process.env.PORT ?? 3000}`;
};

// export const api = createTRPCNext<AppRouter>({
//     config() {
//         return {
//             transformer: superjson,
//             links: [
//                 loggerLink({
//                     enabled: (opts) => process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
//                 }),
//                 httpBatchLink({
//                     url: `${getBaseUrl()}/api/trpc`,
//                 }),
//             ],
//         };
//     },
//     ssr: false,
// });

export const api = createTRPCNext<AppRouter>({
    config({ ctx }) {
        if (typeof window !== 'undefined') {
            return {
                transformer: superjson,
                links: [
                    loggerLink({
                        enabled: (opts) => process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
                    }),
                    httpBatchLink({
                        url: `${getBaseUrl()}/api/trpc`,
                    }),
                ],
            };
        }

        return {
            transformer: superjson,
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                    headers() {
                        if (ctx?.req) {
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            const { connection: _connection, ...headers } = ctx.req.headers;
                            return headers;
                        }
                        return {};
                    },
                }),
            ],
        };
    },
    ssr: true,
});

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
