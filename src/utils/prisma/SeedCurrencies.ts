import { prisma } from '../../server/db';

export default async function SeedCurrencies() {
    const currency = await prisma.currency.createMany({
        data: [
            {
                currency: 'euro',
            },
            {
                currency: 'dollar',
            },
            {
                currency: 'pound',
            },
        ],
    });

    console.log(currency);
}
