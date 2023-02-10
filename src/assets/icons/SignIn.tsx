import { IIconProps } from '../../types/Icon';

export default function SignInIcon(props: IIconProps) {
    return (
        <svg fill='currentColor' viewBox='0 0 35 35' {...props}>
            <path d='M17.052,34.75a1.25,1.25,0,0,1,0-2.5,14.75,14.75,0,0,0,0-29.5,1.25,1.25,0,0,1,0-2.5,17.25,17.25,0,0,1,0,34.5Z' />
            <path d='M19.626,18.75H1.947a1.25,1.25,0,1,1,0-2.5H19.626a1.25,1.25,0,1,1,0,2.5Z' />
            <path d='M13.234,26.438A1.25,1.25,0,0,1,12.35,24.3l6.384-6.385a.593.593,0,0,0,0-.839L12.35,10.7a1.25,1.25,0,1,1,1.767-1.768L20.5,15.313a3.1,3.1,0,0,1,0,4.374l-6.385,6.385A1.246,1.246,0,0,1,13.234,26.438Z' />
        </svg>
    );
}
