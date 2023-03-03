import { useSession } from 'next-auth/react';
import UserSignUp from '~/components/User/UserSignUp';
import AccountDashboard from '~/components/Home/Account/AccountDashboard';

export default function Account() {
    const { data: session } = useSession();

    if (!session) {
        return <UserSignUp />;
    }

    return (
        <main className='container mt-hero'>
            <AccountDashboard name={session.user.name} email={session.user.email} image={session.user.image} />
        </main>
    );
}
