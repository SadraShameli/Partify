import { useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function AccordionHeader({ children }: { children: React.ReactNode }) {
    return <div className='last:border-b'>{children}</div>;
}

export function AccordionContent({ children, title }: { children: React.ReactNode; title: string }) {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className='py-7 border-t' aria-hidden={isHidden}>
            <button className='flex items-center justify-between w-full' onClick={() => setIsHidden((value) => !value)} type='button'>
                <p className='font-semibold'>{title}</p>
                <FontAwesomeIcon className={`w-5 h-5 ${!isHidden && 'rotate-180'}`} icon={faAngleDown} />
            </button>

            <div className='aria-hidden:max-h-0 aria-hidden:overflow-hidden aria-hidden:opacity-0 max-h-screen opacity-100' aria-hidden={isHidden}>
                <div className='pt-5 prose'>{children}</div>
            </div>
        </div>
    );
}
