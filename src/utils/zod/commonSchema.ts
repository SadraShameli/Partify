import { z } from 'zod';

export const commonSchema = {
    name: z
        .string()
        .min(1, { message: 'This field is required' })
        .regex(/^[a-zA-Z ]+$/, { message: 'Letters and spaces only' }),
    email: z.string().min(1, { message: 'Email is required' }).trim().email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(8, {
            message: 'At least 8 characters long',
        })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/, {
            message: 'At least one lowercase letter, one uppercase letter, one number, and one special character',
        }),
    terms: z.literal(true, {
        errorMap: () => ({ message: 'You must accept Terms and Conditions' }),
    }),
    phone: z.string().regex(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/, {
        message: 'Invalid phone number',
    }),
    address: z.string().min(1, { message: 'This field is required' }),
    city: z
        .string()
        .min(1, { message: 'This field is required' })
        .regex(/^[A-Za-z ]+$/, { message: 'Invalid city' }),
    country: z
        .string()
        .min(1, { message: 'This field is required' })
        .regex(/^[A-Z][A-Za-z\s]*$/, { message: 'Invalid country' }),
    postcode: z
        .string()
        .min(1, { message: 'This field is required' })
        .regex(/^[A-Za-z0-9 ]+$/, { message: 'Invalid post code' }),
};
