import { forwardRef, InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
}

export const InputField = forwardRef<HTMLInputElement, React.PropsWithChildren<IInputProps>>(({ children, ...rest }, ref) => {
    return (
        <div className='flex flex-col gap-2'>
            <span className='font-semibold'>{rest.title}</span>

            <input
                className='hover:border-primary outline-primary dark:bg-transparent w-full p-2 border rounded shadow-sm focus:outline-none'
                ref={ref}
                {...rest}
            />

            {children}
        </div>
    );
});

export function InputInfoText({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex items-center font-semibold text-sm text-error'>
            <svg className='fill-none w-4 h-4 stroke-2 stroke-error' viewBox='0 0 24 24'>
                <path d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z' />
                <path d='M12 8V13' />
                <path d='M12 16H12' />
            </svg>

            <p className='pl-1'>{children}</p>
        </div>
    );
}

InputField.displayName = 'InputField';
