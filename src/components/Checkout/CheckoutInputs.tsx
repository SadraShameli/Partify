import Image from 'next/image';
import { forwardRef } from 'react';

import countries from 'countries-list';
import { InputField, IInputProps } from '../InputField';

function FlagEmojiToPNG({ flag }: { flag: string }) {
    const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt(0))
        .map((char) => String.fromCharCode(char! - 127397).toLowerCase())
        .join('');

    return <Image src={`https://flagcdn.com/24x18/${countryCode}.png`} alt={countryCode} width={24} height={18} loading='lazy' />;
}

export const CountryInput = forwardRef<HTMLInputElement, React.PropsWithChildren<IInputProps>>(({ children, ...rest }, ref) => {
    return (
        <InputField title='Country' {...rest} ref={ref}>
            <section className='absolute'>
                {/*Object.values(countries.countries).map((value, index) => (
                    <option key={index}>{`${value.emoji} ${value.name}`}</option>
                ))*/}
            </section>
            {children}
        </InputField>
    );
});

export const PhoneInput = forwardRef<HTMLInputElement, React.PropsWithChildren<IInputProps>>(({ children, ...rest }, ref) => {
    return (
        <InputField title='Phone Number' type='tel' {...rest} ref={ref}>
            <section className='absolute'>
                {/*Object.keys(countries.countries).map((value, index) => (
                    <option key={index}>{value}</option>
                ))*/}
            </section>
            {children}
        </InputField>
    );
});

PhoneInput.displayName = 'PhoneInput';
CountryInput.displayName = 'CountryInput';
