import { type SVGProps } from 'react';

export default function LightModeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg fill='none' viewBox='0 0 24 24' {...props}>
            <path d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
            <path d='M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6' />
        </svg>
    );
}
