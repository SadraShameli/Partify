import { createContext, InputHTMLAttributes, useContext, useId } from 'react';

interface ICardRadio extends InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    IsChecked?: boolean;
}

const CardContext = createContext('');

export default function CardRadio({ IsChecked, children, ...rest }: ICardRadio) {
    const name = useContext(CardContext);
    const id = useId();

    return (
        <label className='hover:border-primary flex justify-between p-5 border rounded shadow-sm' htmlFor={id}>
            <div>
                <p className='font-semibold'>{rest.value}</p>
                {children}
            </div>
            <input className='self-start' type='radio' name={name} id={id} {...rest} />
        </label>
    );
}
