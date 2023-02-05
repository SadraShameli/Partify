import { prisma } from '../../server/db';

export default async function SeedVariant() {
    const variant = await prisma.variant.createMany({
        data: [
            {
                name: 'Razer Basilisk Ultimate',
                stock: 0,
                productId: 1,
            },
            {
                name: 'Razer Basilisk Ultimate + Docking Station',
                stock: 6,
                productId: 1,
            },
        ],
    });

    console.log(variant);
}
