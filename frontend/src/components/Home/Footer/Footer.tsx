import { NavigationList, PaymentIcons, SocialIcons } from './FooterContent';

export default function Footer() {
    return (
        <div className='mt-32 border-t'>
            <footer className='container [&a]:text-dark2 test'>
                <div className='flex flex-wrap items-center justify-between gap-20 py-20'>
                    <div className='justify-items-center grid w-full'>
                        <h2>Partify</h2>

                        <div className='flex items-center content-center gap-5'>
                            {PaymentIcons.map((value, index) => {
                                return (
                                    <div key={index} className='w-14 h-14 relative' title={value.Title}>
                                        {value.Icon}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5'>
                        {NavigationList.map((value, index) => {
                            return (
                                <div key={index}>
                                    <p className='font-bold'>{value.Title}</p>

                                    <ul className='mt-3 space-y-2'>
                                        {value.Items.map((value, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={value.Url}>{value.Title}</a>
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
                    <p>Copyright © 2023 Partify</p>

                    <div className='flex gap-10'>
                        {SocialIcons.map((value, index) => {
                            return (
                                <a key={index} href={value.Url} title={value.Title} className='w-6 h-6'>
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
