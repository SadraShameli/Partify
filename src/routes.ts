import { z } from 'zod';
import formatZodErrors from './utils/formatZodErrors.mjs';

const Routes = {
    about: '/about/',
    privacyPolicy: '/legal/privacy-policy/',
    termsAndConditions: '/legal/terms-and-conditions/',
    resetPassword: '/reset-password/',
    signin: '/signin/',
    signup: '/signup/',
    checkout: '/checkout/',
};

function createSchema(obj: Record<string, string>): z.ZodObject<z.ZodRawShape> {
    const urlType = z.string().startsWith('/').endsWith('/').min(2);

    const schema = {} as Record<string, z.ZodString>;

    for (const key in obj) {
        schema[key] = urlType;
    }

    return z.object(schema);
}

const schema = createSchema(Routes);
const result = schema.safeParse(Routes);

if (!result.success) {
    formatZodErrors(result.error).forEach((e) => {
        console.error(e);
    });

    throw new Error('Routes contains invalid routes');
}

export default Routes;
