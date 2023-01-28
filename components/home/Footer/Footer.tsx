import Image from 'next/image';
import { NavigationList, PaymentIcons, SocialIcons } from './FooterContent';

export default function Footer() {
    return (
        <div className='mt-32 border-t'>
            <footer className='container divide-y'>
                <div className='md:justify-around flex py-20'>
                    <div className='justify-items-center grid'>
                        <p className='font-semibold'>Partify</p>
                        <div className='flex gap-4 pt-6'>
                            {PaymentIcons.map((value, index) => {
                                return (
                                    <div key={index} className='w-14 h-14 relative'>
                                        <Image src={value.Icon} alt={value.Name} fill loading='lazy' />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {NavigationList.map((value, index) => {
                        return (
                            <div key={index}>
                                <p className='font-semibold'>{value.Name}</p>
                                <ul className='mt-3 space-y-2'>
                                    {value.Items.map((value, index) => {
                                        return (
                                            <li key={index}>
                                                <a className='hover:text-slate-900 dark:hover:text-slate-300' href={value.Url}>
                                                    {value.Name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className='md:justify-between flex flex-wrap items-center justify-around gap-8 py-10'>
                    <p>Copyright © 2023 Partify</p>
                    <div className='flex gap-10'>
                        {SocialIcons.map((value, index) => {
                            return (
                                <a key={index} href={value.Url} title={value.Name} className='relative w-6 h-6'>
                                    <Image src={value.Icon} alt={value.Name} fill loading='lazy' />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </footer>
        </div>
    );
}
