import { prisma } from '../../server/db';

export default async function SeedVariant() {
    const variant = await prisma.variant.createMany({
        data: [
            {
                name: 'Razer Basilisk Ultimate',
                stock: 0,
                productName: 'Razer Basilisk Ultimate',
            },
            {
                name: 'Razer Basilisk Ultimate + Docking Station',
                stock: 6,
                productName: 'Razer Basilisk Ultimate',
            },
        ],
    });

    console.log(variant);
}
