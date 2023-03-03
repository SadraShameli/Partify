import { type ZodError } from 'zod';

export default function formatErrors(error: ZodError<{ [x: string]: unknown }>) {
    const errors = error.format();

    return Object.entries(errors)
        .map(([name, value]) => {
            if (value && '_errors' in value) return `${name}: ${value._errors.toString()}`;
        })
        .filter(Boolean);
}
