import Link from 'next/link';
import Routes from '../../../utils/routes';

export default function NavigationBar() {
    return (
        <nav className='fixed inset-x-0 top-0 z-[9999] bg-[rgba(255,255,255,0.72)] py-3 saturate-[200%] backdrop-blur-[20px] dark:bg-[rgba(0,0,0,0.72)]'>
            <div className='fill-none stroke-current text-sm all-children:items-center'>
                <div className='container flex'>
                    <div className='flex divide-x'>
                        <Link className='hover:stroke-primary hover:underline' type='button' title='Home' href='/'>
                            <svg className='mr-8 h-5 w-5' viewBox='0 0 24 24'>
                                <path d='M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z' />
                            </svg>
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
                                <svg className='hidden h-6 w-6 dark:inline' viewBox='0 0 24 24'>
                                    <path d='M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z' />
                                    <path d='M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z' />
                                </svg>

                                <svg className='h-6 w-6 dark:hidden' viewBox='0 0 24 24'>
                                    <path d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                                    <path d='M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6' />
                                </svg>
                            </button>

                            <button type='button' title='Search'>
                                <svg className='mr-8 h-6 w-6' viewBox='0 0 24 24'>
                                    <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                                </svg>
                            </button>
                        </div>

                        <div className='flex gap-8'>
                            <Link className='hover:stroke-primary hover:underline' type='button' title='Shopping bag' href={Routes.checkout}>
                                <svg className='ml-8 h-6 w-6' viewBox='0 0 24 24'>
                                    <path d='M3.5 4.5H5.05848C5.7542 4.5 6.10206 4.5 6.36395 4.68876C6.62584 4.87752 6.73584 5.20753 6.95585 5.86754L7.5 7.5' />
                                    <path d='M17.5 17.5H8.05091C7.90471 17.5 7.83162 17.5 7.77616 17.4938C7.18857 17.428 6.78605 16.8695 6.90945 16.2913C6.92109 16.2367 6.94421 16.1674 6.99044 16.0287V16.0287C7.04177 15.8747 7.06743 15.7977 7.09579 15.7298C7.38607 15.0342 8.04277 14.5608 8.79448 14.5054C8.8679 14.5 8.94906 14.5 9.11137 14.5H14.5' />
                                    <path d='M14.1787 14.5H11.1376C9.85836 14.5 9.21875 14.5 8.71781 14.1697C8.21687 13.8394 7.96492 13.2515 7.461 12.0757L7.29218 11.6818C6.48269 9.79294 6.07794 8.84853 6.52255 8.17426C6.96715 7.5 7.99464 7.5 10.0496 7.5H15.3305C17.6295 7.5 18.779 7.5 19.2126 8.24711C19.6462 8.99422 19.0758 9.99229 17.9352 11.9884L17.6517 12.4846C17.0897 13.4679 16.8088 13.9596 16.3432 14.2298C15.8776 14.5 15.3113 14.5 14.1787 14.5Z' />
                                    <circle cx='17' cy='20' r='1' />
                                    <circle cx='9' cy='20' r='1' />
                                </svg>
                            </Link>

                            <Link className='hover:stroke-primary hover:underline' type='button' title='Account' href={Routes.account}>
                                <svg className='h-5 w-5' viewBox='0 0 24 24'>
                                    <circle cx='12' cy='7.25' r='5.73' />
                                    <path className='fill-none' d='M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05' />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
