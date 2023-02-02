import Link from 'next/link';

export default function NavigationBar() {
    return (
        <nav className='pb-12'>
            <div className='backdrop-blur-[20px] saturate-[200%] bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(0,0,0,0.8)] fixed w-full z-[9999] py-3 text-sm fill-none stroke-current'>
                <div className='container flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link className='sm:border-r pr-5' type='button' title='Home' href='/'>
                            <svg className='w-6 h-6' viewBox='0 0 24 24'>
                                <path d='M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z' />
                            </svg>
                        </Link>

                        <div className='gap-5 pl-5 hidden sm:flex'>
                            <a>Men</a>
                            <a>Women</a>
                            <a>Children</a>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <div className='flex gap-5 pr-5 border-r'>
                            <button type='button' title='Theme selector'>
                                <svg className='w-6 h-6 hidden dark:inline' viewBox='0 0 24 24'>
                                    <path d='M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z' />
                                    <path d='M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z' />
                                </svg>

                                <svg className='w-6 h-6 dark:hidden' viewBox='0 0 24 24'>
                                    <path d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                                    <path d='M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6' />
                                </svg>
                            </button>

                            <button type='button' title='Search'>
                                <svg className='w-6 h-6' viewBox='0 0 24 24'>
                                    <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                                </svg>
                            </button>
                        </div>

                        <Link type='button' title='Shopping bag' href='checkout'>
                            <svg className='w-6 h-6' viewBox='0 0 24 24'>
                                <path d='M3.5 4.5H5.05848C5.7542 4.5 6.10206 4.5 6.36395 4.68876C6.62584 4.87752 6.73584 5.20753 6.95585 5.86754L7.5 7.5' />
                                <path d='M17.5 17.5H8.05091C7.90471 17.5 7.83162 17.5 7.77616 17.4938C7.18857 17.428 6.78605 16.8695 6.90945 16.2913C6.92109 16.2367 6.94421 16.1674 6.99044 16.0287V16.0287C7.04177 15.8747 7.06743 15.7977 7.09579 15.7298C7.38607 15.0342 8.04277 14.5608 8.79448 14.5054C8.8679 14.5 8.94906 14.5 9.11137 14.5H14.5' />
                                <path d='M14.1787 14.5H11.1376C9.85836 14.5 9.21875 14.5 8.71781 14.1697C8.21687 13.8394 7.96492 13.2515 7.461 12.0757L7.29218 11.6818C6.48269 9.79294 6.07794 8.84853 6.52255 8.17426C6.96715 7.5 7.99464 7.5 10.0496 7.5H15.3305C17.6295 7.5 18.779 7.5 19.2126 8.24711C19.6462 8.99422 19.0758 9.99229 17.9352 11.9884L17.6517 12.4846C17.0897 13.4679 16.8088 13.9596 16.3432 14.2298C15.8776 14.5 15.3113 14.5 14.1787 14.5Z' />
                                <circle cx='17' cy='20' r='1' />
                                <circle cx='9' cy='20' r='1' />
                            </svg>
                        </Link>

                        <Link type='button' title='Login' href='register'>
                            <svg className='w-5 h-5' viewBox='0 0 24 24'>
                                <circle cx='12' cy='7.25' r='5.73' />
                                <path className='fill-none' d='M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05' />
                            </svg>
                        </Link>

                        {/* <Link type='button' title='Login' href='login'>
                            <svg className='w-6 h-6 fill-current stroke-none' viewBox='0 0 24 24'>
                                <path d='M8 6C8 3.79086 9.79086 2 12 2H17.5C19.9853 2 22 4.01472 22 6.5V17.5C22 19.9853 19.9853 22 17.5 22H12C9.79086 22 8 20.2091 8 18V17C8 16.4477 8.44772 16 9 16C9.55228 16 10 16.4477 10 17V18C10 19.1046 10.8954 20 12 20H17.5C18.8807 20 20 18.8807 20 17.5V6.5C20 5.11929 18.8807 4 17.5 4H12C10.8954 4 10 4.89543 10 6V7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7V6ZM12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071C11.9024 15.3166 11.9024 14.6834 12.2929 14.2929L13.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L13.5858 11L12.2929 9.70711C11.9024 9.31658 11.9024 8.68342 12.2929 8.29289Z' />
                            </svg>
                        </Link> */}

                        {/* <Link type='button' title='Shopping bag' href='checkout'>
                            <svg className='w-6 h-6' viewBox='0 0 24 24'>
                                <path d='M8.81 2L5.19 5.63' />
                                <path d='M15.19 2L18.81 5.63' />
                                <path d='M2 7.84998C2 5.99998 2.99 5.84998 4.22 5.84998H19.78C21.01 5.84998 22 5.99998 22 7.84998C22 9.99998 21.01 9.84998 19.78 9.84998H4.22C2.99 9.84998 2 9.99998 2 7.84998Z' />
                                <path d='M9.76001 14V17.55' />
                                <path d='M14.36 14V17.55' />
                                <path d='M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10' />
                            </svg>
                        </Link> */}
                    </div>
                </div>

                {/* <div tabIndex={0} className='btn btn-ghost gap-1 normal-case'>
                        <svg className='fill-none w-5 h-5 stroke-current stroke-2' viewBox='0 0 24 24'>
                            <circle cx='12' cy='7' r='4' />
                            <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                        </svg>

                        <svg className='opacity-60 w-3 h-3 ml-1 fill-current' viewBox='0 0 2048 2048'>
                            <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z' />
                        </svg>
                    </div>

                    <LanguageChange />

                    <div className='dropdown dropdown-end' title='Account'>
                        <div className='dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px w-56 mt-16 overflow-y-auto shadow-2xl'>
                            <ul className='menu menu-compact gap-1 p-3' tabIndex={0}>
                                <li>
                                    <a className='justify-between'>
                                        <span className='badge'>New</span>
                                    </a>
                                </li>
                                <li>
                                    <a>Settings</a>
                                </li>
                                <li>
                                    <a>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
            </div>
        </nav>
    );
}
