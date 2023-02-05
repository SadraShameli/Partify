import { prisma } from '../../server/db';

export default async function SeedProductRange() {
    const productRange = await prisma.productRange.createMany({
        data: [
            {
                name: 'Computers & tablets',
            },
            {
                name: 'Image & sound',
            },
            {
                name: 'Photo & video',
            },
            {
                name: 'Telephones',
            },
            {
                name: 'Household & living',
            },
            {
                name: 'Kitchen',
            },
            {
                name: 'Garden & tools',
            },
            {
                name: 'Navigation, travel & fashion',
            },
            {
                name: 'Sports & care',
            },
        ],
    });

    console.log(productRange);
}
