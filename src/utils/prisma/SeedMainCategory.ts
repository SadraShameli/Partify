import { prisma } from '../../server/db';

export default async function SeedMainCategory() {
    const mainCategory = await prisma.mainCategory.createMany({
        data: [
            {
                name: 'Laptops',
                categoryId: 1,
            },
            {
                name: 'Gaming laptops',
                categoryId: 1,
            },
            {
                name: 'Desktops',
                categoryId: 1,
            },
            {
                name: 'Gaming desktops',
                categoryId: 1,
            },
            {
                name: 'Apple MacBook',
                categoryId: 1,
            },
            {
                name: 'Apple MacStudio',
                categoryId: 1,
            },
            {
                name: 'TV',
                categoryId: 2,
            },
            {
                name: '4K TV',
                categoryId: 2,
            },
            {
                name: 'Gaming TV',
                categoryId: 2,
            },
            {
                name: 'Monitors',
                categoryId: 2,
            },
            {
                name: 'Gaming monitors',
                categoryId: 2,
            },
            {
                name: 'Mouses',
                categoryId: 3,
            },
            {
                name: 'Keyboards',
                categoryId: 3,
            },
            {
                name: 'Speakers',
                categoryId: 3,
            },
            {
                name: 'CPU',
                categoryId: 3,
            },
            {
                name: 'GPU',
                categoryId: 3,
            },
            {
                name: 'RAM',
                categoryId: 3,
            },
            {
                name: 'Hard drives',
                categoryId: 4,
            },
            {
                name: 'Internal hard drives',
                categoryId: 4,
            },
            {
                name: 'Solid state drives',
                categoryId: 4,
            },
            {
                name: 'Internal Solid state drives',
                categoryId: 4,
            },
            {
                name: 'SD cards',
                categoryId: 4,
            },
            {
                name: 'NAS',
                categoryId: 4,
            },
            {
                name: 'WiFi boosters',
                categoryId: 5,
            },
            {
                name: 'Access points',
                categoryId: 5,
            },
            {
                name: 'Network routers',
                categoryId: 5,
            },
            {
                name: 'Mesh WiFi routers',
                categoryId: 5,
            },
            {
                name: 'Network switches',
                categoryId: 5,
            },
            {
                name: 'Powerline adapters',
                categoryId: 5,
            },
        ],
    });

    console.log(mainCategory);
}
