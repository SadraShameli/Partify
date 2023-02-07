import Link from 'next/link';
import { NavigationList, PaymentIcons, SocialIcons } from './FooterContent';

export default function Footer() {
    return (
        <div className='mt-32 border-t'>
            <footer className='container text-sm'>
                <div className='flex flex-wrap items-center justify-between gap-20 py-20'>
                    <div className='grid w-full justify-items-center'>
                        <h1>Partify</h1>

                        <div className='flex content-center items-center gap-5'>
                            {PaymentIcons.map((value, index) => {
                                return (
                                    <div key={index} className='relative h-14 w-14' title={value.Title}>
                                        {value.Icon}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='grid w-full grid-cols-2 gap-5 sm:grid-cols-4'>
                        {NavigationList.map((value, index) => {
                            return (
                                <div key={index}>
                                    <p className='font-bold'>{value.Title}</p>

                                    <ul className='mt-3 space-y-2 font-light'>
                                        {value.Items.map((value, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link className='hover:underline' href={value.Url} title={value.Title}>
                                                        {value.Title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-between gap-8 border-t py-10'>
                    <p>Copyright © 2023 Partify. All rights reserved.</p>

                    <div className='flex gap-10'>
                        {SocialIcons.map((value, index) => {
                            return (
                                <Link className='h-6 w-6 hover:text-primary' key={index} href={value.Url} title={value.Title}>
                                    {value.Icon}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </footer>
        </div>
    );
}
