export function Accordion({ children }: { children: React.ReactNode }) {
    return <div className='last:border-b'>{children}</div>;
}

export function AccordionContent({ children, title }: { children: React.ReactNode; title: string }) {
    return (
        <details className='accordion'>
            <summary>
                {title}

                <svg className='w-6 h-6 fill-none stroke-current' viewBox='0 0 24 24'>
                    <path d='M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502' />
                </svg>
            </summary>

            <div>{children}</div>
        </details>
    );
}
