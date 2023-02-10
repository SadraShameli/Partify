import { getServerSession } from 'next-auth';
import { GetServerSidePropsContext } from 'next/types';

import { authOptions } from '../../server/auth';
import UserSignIn from '../../components/User/UserSignIn';

export default function SignIn() {
    return (
        <main className='container'>
            <UserSignIn />
        </main>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);

    if (session) {
        return { redirect: { destination: '/' } };
    }

    return {
        props: {},
    };
}
