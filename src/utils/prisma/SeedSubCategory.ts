import { prisma } from '../../server/db';

export default async function SeedSubCategory() {
    const subCategory = await prisma.subCategory.createMany({
        data: [
            {
                name: 'Gaming Mouses',
                mainCategoryName: 'Mouses',
            },
        ],
    });

    console.log(subCategory);
}
