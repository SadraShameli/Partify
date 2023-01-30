import Image from 'next/image';
import { NavigationList, PaymentIcons, SocialIcons } from './FooterContent';

export default function Footer() {
    return (
        <div className='mt-32 border-t'>
            <footer className='container [&a]:text-dark2 test'>
                <div className='footer flex flex-wrap items-center justify-between gap-20 py-20'>
                    <div className='justify-items-center grid w-full'>
                        <h2>Partify</h2>

                        <div className='flex items-center content-center gap-4'>
                            {PaymentIcons.map((value, index) => {
                                return (
                                    <div key={index} className='w-14 h-14 relative'>
                                        <Image src={value.Icon} alt={value.Name} fill />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='grid w-full grid-cols-2 gap-5'>
                        {NavigationList.map((value, index) => {
                            return (
                                <div key={index}>
                                    <p className='font-bold'>{value.Name}</p>

                                    <ul className='mt-3 space-y-2'>
                                        {value.Items.map((value, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={value.Url}>{value.Name}</a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-between gap-8 py-10 border-t'>
                    <a>Copyright © 2023 Partify</a>

                    <div className='flex gap-10'>
                        {SocialIcons.map((value, index) => {
                            return (
                                <a key={index} href={value.Url} title={value.Name} className='relative w-6 h-6'>
                                    <Image src={value.Icon} alt={value.Name} fill />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </footer>
        </div>
    );
}
