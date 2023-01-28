import LanguageChange from './LanguageChange';

export default function NavigationBar() {
    return (
        <nav className='flex items-center p-4 border-b'>
            <button type='button' className='btn btn-ghost' title='Navbar'>
                <svg className='inline-block w-5 h-5 stroke-current' viewBox='0 0 24 24'>
                    <path className='stroke-2' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
            </button>

            <div className='flex items-center gap-10'>
                <a className='text-xl font-bold normal-case'>Partify</a>
                <p>Men</p>
                <p>Children</p>
                <p>Women</p>
            </div>

            <div className='lg:flex relative hidden ml-auto'>
                <LanguageChange />

                <div className='dropdown dropdown-end' title='Account'>
                    <div tabIndex={0} className='btn btn-ghost gap-1 normal-case'>
                        <svg className='fill-none w-5 h-5 stroke-current stroke-2' viewBox='0 0 24 24'>
                            <circle cx='12' cy='7' r='4' />
                            <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                        </svg>
                        <svg className='opacity-60 w-3 h-3 ml-1 fill-current' viewBox='0 0 2048 2048'>
                            <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z' />
                        </svg>
                    </div>
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
                </div>

                <div className='flex items-center'>
                    <button className='btn btn-ghost' type='button'>
                        <svg className='fill-none w-5 h-5 stroke-current' viewBox='0 0 24 24'>
                            <path className='stroke-2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                        </svg>
                    </button>
                    <button className='btn btn-ghost' type='button'>
                        <span className='dark:hidden'>
                            <svg className='fill-none w-6 h-6 stroke-2' strokeLinecap='round' viewBox='0 0 24 24'>
                                <path className='stroke-slate-400 dark:stroke-slate-500' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                                <path
                                    className='stroke-slate-400 dark:stroke-slate-500'
                                    d='M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836'
                                />
                            </svg>
                        </span>
                        <span className='dark:inline hidden'>
                            <svg className='fill-none w-6 h-6' viewBox='0 0 24 24'>
                                <path
                                    className='fill-slate-400 dark:fill-slate-500'
                                    d='m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z'
                                />
                                <path
                                    className='fill-slate-400 dark:fill-slate-500'
                                    d='M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z'
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
