import { createContext, useContext, useId, type InputHTMLAttributes } from 'react';

interface ICardRadio extends InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
}

const CardContext = createContext('');

export default function CardRadio({ children, ...rest }: ICardRadio) {
    const name = useContext(CardContext);
    const id = useId();

    return (
        <label className='flex justify-between rounded border p-5 shadow-sm hover:border-primary' htmlFor={id}>
            <div>
                <p className='font-semibold'>{rest.value}</p>
                {children}
            </div>
            <input className='self-start' type='radio' name={name} id={id} {...rest} />
        </label>
    );
}
