import { prisma } from '~/server/db';

export default async function SeedCurrencies() {
    const currency = await prisma.currency.createMany({
        data: [
            {
                symbol: 'euro',
            },
            {
                symbol: 'dollar',
            },
            {
                symbol: 'pound',
            },
        ],
    });

    console.log(currency);
}
