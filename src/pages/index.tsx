export default function Home() {
    return <main className='container'>{/* <div className='container'>{product && <ProductOverView product={product} />}</div> */}</main>;
}

/*
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthShowcase: React.FC = () => {
    const hello = api.example.hello.useQuery({ text: 'from tRPC' });

    const { data: sessionData } = useSession();

    const { data: secretMessage } = api.example.getSecretMessage.useQuery(undefined, { enabled: sessionData?.user !== undefined });

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <p className='text-center text-2xl text-white'>
                {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
                {secretMessage && <span> - {secretMessage}</span>}
            </p>
            <button
                className='rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20'
                onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
                {sessionData ? 'Sign out' : 'Sign in'}
            </button>
        </div>
    );
};
*/
