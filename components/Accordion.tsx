import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export function AccordionHeader({ children }: { children: React.ReactNode }) {
    return <div className='accordion'>{children}</div>;
}

export function AccordionContent({ children, title }: { children: React.ReactNode; title: string }) {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className='py-7 border-t' aria-hidden={isHidden}>
            <button className='flex items-center justify-between w-full' onClick={() => setIsHidden((value) => !value)} type='button'>
                {title}
                <FontAwesomeIcon className={`w-5 h-5 ${!isHidden && 'rotate-180'}`} icon={faAngleDown} />
            </button>

            <div className='accordion-content' aria-hidden={isHidden}>
                <div className='pt-5 prose'>{children}</div>
            </div>
        </div>
    );
}
