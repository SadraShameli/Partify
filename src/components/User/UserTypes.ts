import { z } from 'zod';
import { commonSchema } from '~/utils/zod/commonSchema';

export const UserSignInSchema = z.object({
    email: commonSchema.email,
    password: commonSchema.password,
});

export type UserSignInForm = z.infer<typeof UserSignInSchema>;

export const UserSignUpSchema = z
    .object({
        firstName: commonSchema.name,
        lastName: commonSchema.name,
        email: commonSchema.email,
        password: commonSchema.password,
        confirmPassword: commonSchema.password,
        terms: commonSchema.terms,
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: "Passwords don't match",
    });

export type UserSignUpForm = z.infer<typeof UserSignUpSchema>;
