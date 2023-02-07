import { prisma } from '../../server/db';

export default async function SeedMainCategory() {
    const mainCategory = await prisma.mainCategory.createMany({
        data: [
            {
                name: 'Laptops',
                categoryName: 'Laptops, desktops & monitors',
            },
            {
                name: 'Gaming laptops',
                categoryName: 'Laptops, desktops & monitors',
            },
            {
                name: 'Desktops',
                categoryName: 'Laptops, desktops & monitors',
            },
            {
                name: 'Gaming desktops',
                categoryName: 'Laptops, desktops & monitors',
            },
            {
                name: 'Apple MacBook',
                categoryName: 'Laptops, desktops & monitors',
            },
            {
                name: 'Apple MacStudio',
                categoryName: 'Laptops, desktops & monitors',
            },
            {
                name: 'Mouses',
                categoryName: 'Computer parts & peripherals',
            },
            {
                name: 'Keyboards',
                categoryName: 'Computer parts & peripherals',
            },
            {
                name: 'Speakers',
                categoryName: 'Computer parts & peripherals',
            },
            {
                name: 'CPU',
                categoryName: 'Computer parts & peripherals',
            },
            {
                name: 'GPU',
                categoryName: 'Computer parts & peripherals',
            },
            {
                name: 'RAM',
                categoryName: 'Computer parts & peripherals',
            },
            {
                name: 'Hard drives',
                categoryName: 'Memory & storage',
            },
            {
                name: 'Internal hard drives',
                categoryName: 'Memory & storage',
            },
            {
                name: 'Solid state drives',
                categoryName: 'Memory & storage',
            },
            {
                name: 'Internal Solid state drives',
                categoryName: 'Memory & storage',
            },
            {
                name: 'SD cards',
                categoryName: 'Memory & storage',
            },
            {
                name: 'NAS',
                categoryName: 'Memory & storage',
            },
            {
                name: 'WiFi boosters',
                categoryName: 'Internet & Network',
            },
            {
                name: 'Access points',
                categoryName: 'Internet & Network',
            },
            {
                name: 'Network routers',
                categoryName: 'Internet & Network',
            },
            {
                name: 'Mesh WiFi routers',
                categoryName: 'Internet & Network',
            },
            {
                name: 'Network switches',
                categoryName: 'Internet & Network',
            },
            {
                name: 'Powerline adapters',
                categoryName: 'Internet & Network',
            },
            {
                name: 'Tablets',
                categoryName: 'Tablet & e-readers',
            },
            {
                name: 'Apple iPad',
                categoryName: 'Tablet & e-readers',
            },
            {
                name: 'Samsung Tablets',
                categoryName: 'Tablet & e-readers',
            },
            {
                name: 'Lenovo Tablets',
                categoryName: 'Tablet & e-readers',
            },
            {
                name: 'Tablet covers',
                categoryName: 'Tablet & e-readers',
            },
            {
                name: 'E-readers',
                categoryName: 'Tablet & e-readers',
            },
            {
                name: 'Business laptops',
                categoryName: 'Business',
            },
            {
                name: 'Business monitors',
                categoryName: 'Business',
            },
            {
                name: 'Business printers',
                categoryName: 'Business',
            },
            {
                name: 'Desks',
                categoryName: 'Business',
            },
            {
                name: 'Desk chairs',
                categoryName: 'Business',
            },
            {
                name: 'Home Office Store',
                categoryName: 'Business',
            },
        ],
    });

    console.log(mainCategory);
}
