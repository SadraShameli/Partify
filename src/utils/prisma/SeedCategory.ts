import { prisma } from '~/server/db';

export default async function SeedCategory() {
    const category = await prisma.category.createMany({
        data: [
            {
                name: 'Laptops, desktops & monitors',
                productRangeName: 'Computers & tablets',
            },
            {
                name: 'TV & monitors',
                productRangeName: 'Computers & tablets',
            },
            {
                name: 'Computer parts & peripherals',
                productRangeName: 'Computers & tablets',
            },
            {
                name: 'Memory & storage',
                productRangeName: 'Computers & tablets',
            },
            {
                name: 'Internet & Network',
                productRangeName: 'Computers & tablets',
            },
            {
                name: 'Tablet & e-readers',
                productRangeName: 'Computers & tablets',
            },
            {
                name: 'Gaming',
                productRangeName: 'Computers & tablets',
            },
            {
                name: 'Business',
                productRangeName: 'Computers & tablets',
            },
        ],
    });

    console.log(category);
}
