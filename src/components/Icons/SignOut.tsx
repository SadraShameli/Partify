import { type SVGProps } from 'react';

export default function SignOutIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg fill='none' viewBox='0 0 24 24' {...props}>
            <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
            <polyline points='16 17 21 12 16 7' />
            <line x1='21' y1='12' x2='9' y2='12' />
        </svg>
    );
}
