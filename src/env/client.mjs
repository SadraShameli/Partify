import { clientEnv, clientSchema } from './schema.mjs';
import formatErrors from '../utils/zod/formatErrors.mjs';

const _clientEnv = clientSchema.safeParse(clientEnv);

if (!_clientEnv.success) {
    formatErrors(_clientEnv.error).forEach((e) => {
        console.error(e);
    });

    throw new Error('Invalid client environment variables');
}

export const env = _clientEnv.data;
