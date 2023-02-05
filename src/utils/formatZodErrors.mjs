export default function formatZodErrors(error) {
    const errors = error.format();

    return Object.entries(errors)
        .map(([name, value]) => {
            if (value && '_errors' in value) return `${name}: ${value._errors.toString()}`;
        })
        .filter(Boolean);
}
