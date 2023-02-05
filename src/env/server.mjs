import { env as clientEnv } from './client.mjs';
import { serverSchema, serverEnv } from './schema.mjs';
import formatZodErrors from '../utils/formatZodErrors.mjs';

const _serverEnv = serverSchema.safeParse(serverEnv);

if (!_serverEnv.success) {
    formatZodErrors(_serverEnv.error).forEach((e) => {
        console.error(e);
    });

    throw new Error('Invalid server environment variables');
}

export const env = { ..._serverEnv.data, ...clientEnv };
