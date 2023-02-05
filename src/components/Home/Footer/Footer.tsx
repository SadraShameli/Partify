import Link from 'next/link';
import { NavigationList, PaymentIcons, SocialIcons } from './FooterContent';

export default function Footer() {
    return (
        <div className='mt-32 border-t'>
            <footer className='[&a]:text-dark2 test container'>
                <div className='flex flex-wrap items-center justify-between gap-20 py-20'>
                    <div className='grid w-full justify-items-center'>
                        <h2>Partify</h2>

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

                                    <ul className='mt-3 space-y-2'>
                                        {value.Items.map((value, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={value.Url} title={value.Title}>
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
                    <p>Copyright © 2023 Partify</p>

                    <div className='flex gap-10'>
                        {SocialIcons.map((value, index) => {
                            return (
                                <a key={index} href={value.Url} title={value.Title} className='h-6 w-6'>
                                    {value.Icon}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </footer>
        </div>
    );
}
