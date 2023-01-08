import { faIdeal, faCcAmex, faCcApplePay, faCcPaypal, faCcMastercard, faCcVisa, faInstagram, faFacebook, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// company ...  className='text-slate-900 dark:text-slate-100 font-semibold'

interface INav {
    Title: string,
    Items: {
        Title: string,
        Url: string
    }[]
}

interface ILinkIcon {
    Title?: string,
    Url?: string,
    Icon: any
};

const Nav: INav[] = [
    {
        Title: 'Company',
        Items: [
            {
                Title: 'About us',
                Url: '',
            },
            {
                Title: 'Contact',
                Url: ''
            },
            {
                Title: 'Location',
                Url: ''
            }
        ]
    },
    {
        Title: 'Legal',
        Items: [
            {
                Title: 'Terms and Conditions',
                Url: '',
            },
            {
                Title: 'Privacy policy',
                Url: ''
            },
            {
                Title: 'Cookie policy',
                Url: ''
            }
        ]
    }
];

const Payments: ILinkIcon[] = [
    {
        Icon: faIdeal
    },
    {
        Icon: faCcApplePay
    },
    {
        Icon: faCcPaypal
    },
    {
        Icon: faCcMastercard
    },
    {
        Icon: faCcVisa
    },
    {
        Icon: faCcAmex
    }
];

const Socials: ILinkIcon[] = [
    {
        Title: 'Instagram',
        Icon: faInstagram,
        Url: ''
    },
    {
        Title: 'Facebook',
        Icon: faFacebook,
        Url: ''
    },
    {
        Title: 'Whatsapp',
        Icon: faWhatsapp,
        Url: ''
    },
    {
        Title: 'Telegram',
        Icon: faTelegram,
        Url: ''
    }
];

export default function Footer() {
    return (
        <>
            <div className='divider pt-20' />
            <footer className='container'>
                <div className='footer md:justify-around pt-10 pb-20'>
                    <div className='md:justify-items-center gap-y-5 '>
                        <div className='gap-y-2 justify-items-center grid'>
                            <FontAwesomeIcon className='w-24 h-24' icon={faShoppingCart} />
                            <span className='footer-title normal-case'>Partify</span>
                        </div>
                        <div className='flex gap-4'>
                            {Payments.map((payment, index) => {
                                return (
                                    <FontAwesomeIcon className='w-8 h-8' icon={payment.Icon} href={payment.Url} key={index} />
                                );
                            })}
                        </div>
                    </div>
                    {Nav.map((nav, index) => {
                        return (
                            <div key={index}>
                                <h2 className="text-slate-900 dark:text-slate-100 font-semibold">{nav.Title}</h2>
                                <ul className="mt-3 space-y-2">
                                    {nav.Items.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a className='hover:text-slate-900 dark:hover:text-slate-300' href={item.Url}>{item.Title}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className='divider' />
                <div className='md:justify-between flex flex-wrap items-center justify-around gap-10 pt-4 pb-10'>
                    <p>Copyright © 2023 Partify</p>
                    <div className='flex gap-5'>
                        {Socials.map((social, index) => {
                            return (
                                <div className='w-9 h-9 btn btn-sm btn-ghost' key={index}>
                                    <a href={social.Url} title={social.Title}>
                                        <FontAwesomeIcon className='w-6 h-6' icon={social.Icon} />
                                    </a>
                                </div>
                            );
                        })}
                    </div >
                </div>
            </footer >
        </>
    );
}
