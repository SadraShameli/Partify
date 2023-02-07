import { IIconProps } from '../../types/Icon';

export default function AccountIcon(props: IIconProps) {
    return (
        <svg viewBox='0 0 24 24' {...props}>
            <circle cx='12' cy='7.25' r='5.73' />
            <path className='fill-none' d='M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05' />
        </svg>
    );
}
