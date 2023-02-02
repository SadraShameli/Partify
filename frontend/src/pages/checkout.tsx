import dynamic from 'next/dynamic';
// import CheckoutForm from '../components/Checkout/CheckoutForm';

const CheckoutForm = dynamic(() => import('../components/Checkout/CheckoutForm'), { ssr: false });

export default function Checkout() {
    return (
        <main className='container isolate'>
            <CheckoutForm />
        </main>
    );
}
