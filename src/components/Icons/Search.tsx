import { type SVGProps } from 'react';

export default function SearchIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg fill='none' viewBox='0 0 24 24' {...props}>
            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
        </svg>
    );
}
