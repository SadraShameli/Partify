import { prisma } from '../../server/db';

export default async function SeedCategory() {
    const category = await prisma.category.createMany({
        data: [
            {
                name: 'Laptops, desktops',
                productRangeId: 1,
            },
            {
                name: 'TV & monitors',
                productRangeId: 1,
            },
            {
                name: 'Computer parts & peripherals',
                productRangeId: 1,
            },
            {
                name: 'Memory & storage',
                productRangeId: 1,
            },
            {
                name: 'Internet & Network',
                productRangeId: 1,
            },
            {
                name: 'Tablet & e-readers',
                productRangeId: 1,
            },
            {
                name: 'Gaming',
                productRangeId: 1,
            },
            {
                name: 'Business',
                productRangeId: 1,
            },
        ],
    });

    console.log(category);
}
