import { forwardRef, type InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string;
    children?: React.ReactNode;
}

export const CheckBox = forwardRef<HTMLInputElement, React.PropsWithChildren<IInputProps>>(({ text, children, ...rest }, ref) => {
    return (
        <div className='flex'>
            <label className='flex cursor-pointer items-center justify-center'>
                <input type='checkbox' ref={ref} {...rest} />

                <span className='pl-3'>{text}</span>

                {children}
            </label>
        </div>
    );
});

CheckBox.displayName = 'CheckBox';
