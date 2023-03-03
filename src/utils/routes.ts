const Routes = {
    about: '/about/',
    privacyPolicy: '/legal/privacy-policy/',
    termsAndConditions: '/legal/terms-and-conditions/',
    signIn: '/auth/signin/',
    resetPassword: '/auth/reset-password/',
    verifyRequest: '/auth/verify-request/',
    account: '/account/',
    checkout: '/checkout/',
    favorites: '/favorites/',
} as const;

import { z } from 'zod';
import formatErrors from './zod/formatErrors.js';

function createSchema(obj: Record<string, string>): z.ZodObject<z.ZodRawShape> {
    const urlType = z.string().min(2).startsWith('/').endsWith('/');

    const schema = {} as Record<string, z.ZodString>;

    for (const key in obj) {
        schema[key] = urlType;
    }

    return z.object(schema);
}

const routerSchema = createSchema(Routes);

const result = routerSchema.safeParse(Routes);

if (!result.success) {
    formatErrors(result.error).forEach((e) => {
        console.error(e);
    });

    throw new Error('Routes contains invalid routes');
}

export default Routes;
