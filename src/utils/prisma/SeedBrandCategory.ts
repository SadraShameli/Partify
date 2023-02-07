import { prisma } from '../../server/db';

export default async function SeedBrandCategory() {
    const brandCategory = await prisma.brandCategory.createMany({
        data: [
            {
                name: 'Razer',
                subCategoryName: 'Gaming Mouses',
            },
        ],
    });

    console.log(brandCategory);
}
