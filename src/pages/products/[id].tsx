import superjson from 'superjson';
import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next/types';

import { api } from '../../utils/api';
import { prisma } from '../../server/db';
import { appRouter } from '../../server/api/routers/_app';
import ProductOverView from '../../components/Product/ProductOverView';

export async function getServerSideProps(context: GetServerSidePropsContext<{ id: string }>) {
    const id = context.params?.id as string;

    const trcpSSG = createProxySSGHelpers({
        router: appRouter,
        ctx: {
            prisma,
            session: null,
        },
        transformer: superjson,
    });

    await trcpSSG.products.getProductById.fetch({ id: id });

    return {
        props: {
            trpcState: trcpSSG.dehydrate(),
            id,
        },
    };
}

export default function ProductViewPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { id } = props;

    const { data: product } = api.products.getProductById.useQuery({ id: id });

    return <main className='container mt-hero'>{product && <ProductOverView product={product} />}</main>;
}
