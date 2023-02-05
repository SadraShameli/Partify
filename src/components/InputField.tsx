import { forwardRef, type InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
}

export const InputField = forwardRef<HTMLInputElement, React.PropsWithChildren<IInputProps>>(({ children, ...rest }, ref) => {
    return (
        <div className='flex flex-col gap-2'>
            <span className='font-semibold'>{rest.title}</span>

            <input
                className='w-full rounded border p-2 shadow-sm outline-primary hover:border-primary focus:outline-none dark:bg-transparent'
                ref={ref}
                {...rest}
            />

            {children}
        </div>
    );
});

export function InputInfoText({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex items-center text-sm font-semibold text-error'>
            <svg className='h-4 w-4 fill-none stroke-error stroke-2' viewBox='0 0 24 24'>
                <path d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z' />
                <path d='M12 8V13' />
                <path d='M12 16H12' />
            </svg>

            <p className='pl-1'>{children}</p>
        </div>
    );
}

InputField.displayName = 'InputField';
