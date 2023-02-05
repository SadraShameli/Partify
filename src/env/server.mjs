import { env as clientEnv } from './client.mjs';
import { serverSchema, serverEnv } from './schema.mjs';
import formatErrors from '../utils/zod/formatErrors.mjs';

const _serverEnv = serverSchema.safeParse(serverEnv);

if (!_serverEnv.success) {
    formatErrors(_serverEnv.error).forEach((e) => {
        console.error(e);
    });

    throw new Error('Invalid server environment variables');
}

export const env = { ..._serverEnv.data, ...clientEnv };
