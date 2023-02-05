import { prisma } from '../../server/db';

export default async function SeedSubCategory() {
    const subCategory = await prisma.subCategory.createMany({
        data: [
            {
                name: 'Gaming Mouses',
                mainCategoryId: 12,
            },
        ],
    });

    console.log(subCategory);
}
