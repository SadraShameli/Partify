import Link from 'next/link';
import Routes from '../../../utils/routes';

import HomeIcon from '../../../assets/icons/Home';
import HeartIcon from '../../../assets/icons/Heart';
import BasketIcon from '../../../assets/icons/Basket';
import SearchIcon from '../../../assets/icons/Search';
import AccountIcon from '../../../assets/icons/Account';
import DarkModeIcon from '../../../assets/icons/DarkMode';
import LightModeIcon from '../../../assets/icons/LightMode';

export default function NavigationBar() {
    return (
        <nav className='fixed inset-x-0 top-0 z-[9999] bg-[rgba(255,255,255,0.72)] py-3 saturate-[200%] backdrop-blur-[20px] dark:bg-[rgba(0,0,0,0.72)]'>
            <div className='fill-none stroke-current text-sm all-children:items-center'>
                <div className='container flex'>
                    <div className='flex divide-x'>
                        <Link className='hover:text-primary hover:underline' type='button' title='Home' href='/'>
                            <HomeIcon className='mr-8 h-5 w-5' />
                        </Link>

                        <div className='hidden  gap-8 pl-8 sm:flex'>
                            <Link className='hover:underline' href=''>
                                Men
                            </Link>

                            <Link className='hover:underline' href=''>
                                Women
                            </Link>

                            <Link className='hover:underline' href=''>
                                Children
                            </Link>
                        </div>
                    </div>

                    <div className='ml-auto flex divide-x'>
                        <div className='flex gap-8'>
                            <button type='button' title='Theme selector'>
                                <DarkModeIcon className='hidden h-6 w-6 dark:inline' />

                                <LightModeIcon className='h-6 w-6 dark:hidden' />
                            </button>

                            <button type='button' title='Search'>
                                <SearchIcon className='mr-8 h-6 w-6' />
                            </button>
                        </div>

                        <div className='flex gap-8'>
                            <Link className='hover:text-primary hover:underline' type='button' title='Account' href={Routes.account}>
                                <AccountIcon className='ml-8 h-5 w-5' />
                            </Link>

                            <Link className='fill-current hover:text-primary hover:underline' type='button' title='Favorites' href={Routes.favorites}>
                                <HeartIcon className='h-5 w-5' />
                            </Link>

                            <Link className='hover:text-primary hover:underline' type='button' title='Shopping bag' href={Routes.checkout}>
                                <BasketIcon className='h-6 w-6' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
