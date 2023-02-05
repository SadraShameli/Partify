import { forwardRef, type InputHTMLAttributes } from 'react';

export interface ICardRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
}

export const CardRadio = forwardRef<HTMLInputElement, React.PropsWithChildren<ICardRadioProps>>(({ children, ...rest }, ref) => {
    return (
        <label className='flex justify-between gap-5 rounded border p-5 shadow-sm hover:border-primary'>
            <div>
                <p className='font-semibold'>{rest.value}</p>

                {children}
            </div>

            <input type='radio' ref={ref} {...rest} />
        </label>
    );
});

CardRadio.displayName = 'CardRadio';
