export default function Navbar() {
    return (
        <nav className='navbar p-navbar'>
            <div className='navbar-start'>
                <button className='btn btn-square btn-ghost' type='button' title='Navbar' >
                    <svg className='inline-block w-5 h-5 stroke-current' viewBox='0 0 24 24'>
                        <path className='stroke-2' d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                </button>
                <a className='btn btn-ghost normal-case text-xl'>Partify</a>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <a>
                            Parent
                            <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
                                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                            </svg>
                        </a>
                        <ul className='p-2'>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className='navbar-end gap-5'>
                <div title='Change Language' className='dropdown dropdown-end'>
                    <div tabIndex={0} className='btn btn-ghost gap-1 normal-case'>
                        <svg className='w-5 h-5 fill-current' viewBox='0 0 512 512'>
                            <path d='M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z' />
                            <path d='M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z' />
                        </svg>
                        <svg className='w-3 h-3 ml-1 fill-current opacity-60' viewBox='0 0 2048 2048'>
                            <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z' />
                        </svg>
                    </div>
                    <div className='dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto shadow-2xl'>
                        <ul className='menu menu-compact gap-1 p-3' tabIndex={0}>
                        </ul>
                    </div>
                </div>
                <div title='Account' className='dropdown dropdown-end'>
                    <div tabIndex={0} className='btn btn-ghost gap-1 normal-case'>
                        <svg className='w-5 h-5 stroke-2 fill-none stroke-current' viewBox='0 0 24 24'>
                            <circle cx='12' cy='7' r='4' />
                            <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                        </svg>
                        <svg className='w-3 h-3 ml-1 fill-current opacity-60' viewBox='0 0 2048 2048'>
                            <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z' />
                        </svg>
                    </div>
                    <div className='dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto shadow-2xl'>
                        <ul className='menu menu-compact gap-1 p-3' tabIndex={0}>
                            <li>
                                <a className='justify-between'>
                                    <span className='badge'>New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
                <button className='btn btn-ghost btn-circle'>
                    <svg className='h-5 w-5 fill-none stroke-current' viewBox='0 0 24 24'>
                        <path className='stroke-2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                    </svg>
                </button>
            </div>
        </nav >
    );
}
