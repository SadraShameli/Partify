import { createContext, InputHTMLAttributes, useContext, useId } from 'react';

interface ICardRadio extends InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    IsChecked?: boolean;
}

const CardContext = createContext('');

export function Card({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <CardContext.Provider value={title}>
            <div>
                <h2 className='mt-10 mb-5'>{title}</h2>
                <div className='grid grid-cols-2 gap-5'>{children}</div>
            </div>
        </CardContext.Provider>
    );
}

export function CardRadio({ IsChecked, children, ...rest }: ICardRadio) {
    const name = useContext(CardContext);
    const id = useId();

    return (
        <label className='hover:border-primary flex justify-between p-5 border-2 rounded shadow-sm' htmlFor={id}>
            <div>
                <p className='font-semibold'>{rest.value}</p>
                {children}
            </div>
            <input className='self-start' type='radio' name={name} id={id} {...rest} />
        </label>
    );
}
