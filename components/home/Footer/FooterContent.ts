import { INavigationLink } from './FooterTypes';
import { INavigation as INavigationList } from './FooterTypes';

export const NavigationList: INavigationList[] = [
    {
        Name: 'Company',
        Items: [
            {
                Name: 'About us',
                Icon: '',
                Url: '',
            },
            {
                Name: 'Contact',
                Icon: '',
                Url: '',
            },
            {
                Name: 'Location',
                Icon: '',
                Url: '',
            },
        ],
    },
    {
        Name: 'Legal',
        Items: [
            {
                Name: 'Terms and Conditions',
                Icon: '',
                Url: '',
            },
            {
                Name: 'Privacy policy',
                Icon: '',
                Url: '',
            },
            {
                Name: 'Cookie policy',
                Icon: '',
                Url: '',
            },
        ],
    },
];

export const PaymentIcons: INavigationLink[] = [
    {
        Name: 'iDeal',
        Icon: '/static/icons/Ideal.svg',
        Url: '',
    },
    {
        Name: 'Maestro',
        Icon: '/static/icons/Maestro.svg',
        Url: '',
    },
    {
        Name: 'Master',
        Icon: '/static/icons/Master.svg',
        Url: '',
    },
    {
        Name: 'Apple Pay',
        Icon: '/static/icons/ApplePay.svg',
        Url: '',
    },
    {
        Name: 'Visa',
        Icon: '/static/icons/Visa.svg',
        Url: '',
    },
    {
        Name: 'American Express',
        Icon: '/static/icons/Amex.svg',
        Url: '',
    },
    /*
    {
        Name: 'Discover',
        Icon: '/static/icons/Discover.svg',
        Url: '',
    },
    */
];

export const SocialIcons: INavigationLink[] = [
    {
        Name: 'Instagram',
        Icon: '/static/icons/Instagram.svg',
        Url: '',
    },
    {
        Name: 'Facebook',
        Icon: '/static/icons/Facebook.svg',
        Url: '',
    },
    {
        Name: 'Whatsapp',
        Icon: '/static/icons/Whatsapp.svg',
        Url: '',
    },
    {
        Name: 'Telegram',
        Icon: '/static/icons/Telegram.svg',
        Url: '',
    },
];
