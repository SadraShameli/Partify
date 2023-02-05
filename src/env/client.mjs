import { clientEnv, clientSchema } from './schema.mjs';
import formatZodErrors from '../utils/formatZodErrors.mjs';

const _clientEnv = clientSchema.safeParse(clientEnv);

if (!_clientEnv.success) {
    formatZodErrors(_clientEnv.error).forEach((e) => {
        console.error(e);
    });

    throw new Error('Invalid client environment variables');
}

export const env = _clientEnv.data;
