/* eslint-disable @typescript-eslint/no-misused-promises */
import NoSSR from 'react-no-ssr';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';

import CheckoutItem from './CheckoutItem';
import { DeliveryMethods } from './CheckoutTypes';
import { CheckoutSchema, type Checkout, type DeliveryMethod } from './CheckoutTypes';

import { CardRadio } from '~/components/CardRadio';
import { InputField, InputInfoText } from '~/components/InputField';
import UseProductStorage from '~/components/Product/Hooks/UseProductStorage';

import { GeoProps } from '~/hooks/useGeo';
import { ProductStorageKeys } from '~/utils/constants';

export default function CheckoutForm() {
    const [, , removeProduct, products] = UseProductStorage(ProductStorageKeys.addedToBag);
    const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>(DeliveryMethods[0]);
    const subTotalPrice = products.reduce((prev, value) => prev + value.price, 0);
    const totalPrice = subTotalPrice ? Math.round(subTotalPrice + deliveryMethod.price) : 0;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Checkout>({ resolver: zodResolver(CheckoutSchema) });

    // eslint-disable-next-line @typescript-eslint/require-await
    const onSubmit: SubmitHandler<Checkout> = async (data) => {
        console.log(data);
    };

    return (
        <form className='mt-hero flex grid-cols-2 flex-col-reverse gap-20 md:grid' onSubmit={handleSubmit(onSubmit)}>
            <div className='col-span-1 grid gap-10 divide-y'>
                <div>
                    <h2 className='flex justify-between'>
                        Contact information
                        <svg className='fill-current' viewBox='0 0 24 24'>
                            <path d='M12,20H0v-3.5c0-2.4,1.3-4.5,3.2-5.6C2.5,10.2,2,9.2,2,8.1c0-2.2,1.8-4,4-4s4,1.8,4,4c0,1.1-0.4,2.1-1.2,2.8 c1.9,1.1,3.2,3.3,3.2,5.6V20z M2,18h8v-1.5c0-2.4-1.8-4.5-4-4.5c-2.1,0-4,2.1-4,4.5V18z M6,6C4.9,6,4,6.9,4,8s0.9,2,2,2s2-0.9,2-2 S7.1,6,6,6z M24,17H14v-2h10V17z M21,13h-7v-2h7V13z M24,9H14V7h10V9z' />
                        </svg>
                    </h2>

                    <div className='grid gap-5'>
                        <div className='grid grid-cols-2 gap-5'>
                            <InputField title='First name' {...register('firstName')}>
                                {errors.firstName && <InputInfoText>{errors.firstName?.message}</InputInfoText>}
                            </InputField>

                            <InputField title='Last name' {...register('lastName')}>
                                {errors.lastName && <InputInfoText>{errors.lastName?.message}</InputInfoText>}
                            </InputField>
                        </div>

                        <InputField placeholder='you@domain.com' title='Email address' type='email' {...register('email')}>
                            {errors.email && <InputInfoText>{errors.email?.message}</InputInfoText>}
                        </InputField>

                        <InputField title='Phone number' type='tel' {...register('phone')}>
                            {errors.phone && <InputInfoText>{errors.phone?.message}</InputInfoText>}
                        </InputField>

                        <InputField title='Order notes' {...register('notes')} />
                    </div>
                </div>

                <div>
                    <h2 className='flex justify-between pt-10'>
                        Shipping information
                        <svg className='fill-current' viewBox='0 0 326 326'>
                            <path d='M325.637,189.233l-56.043-135.3c-0.761-1.838-2.221-3.298-4.059-4.059c-1.838-0.762-3.902-0.762-5.74,0L73.176,127.176 c-1.838,0.761-3.298,2.221-4.059,4.059c-0.761,1.838-0.761,3.903,0.001,5.74l56.051,135.3c1.196,2.889,3.989,4.632,6.932,4.632 c0.957,0,1.929-0.185,2.867-0.573l186.611-77.302C325.405,197.447,327.222,193.06,325.637,189.233z M208.674,190.361 L94.596,134.539l155.26-64.312L208.674,190.361z M209.716,207.57c1.038,0.509,2.166,0.764,3.296,0.764 c0.974,0,1.95-0.189,2.871-0.571c1.988-0.823,3.526-2.461,4.224-4.497l16.07-46.881l64.599,35.028l-156.488,64.824l20.911-70.45 L209.716,207.57z M303.949,176.07l-62.838-34.073l22.064-64.365L303.949,176.07z M90.414,149.191l61.124,29.91l-20.342,68.533 L90.414,149.191z' />
                            <path d='M7.5,166.616h43.536c4.142,0,7.5-3.357,7.5-7.5c0-4.143-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.357-7.5,7.5 C0,163.258,3.358,166.616,7.5,166.616z' />
                            <path d='M82.073,236.893H7.5c-4.142,0-7.5,3.357-7.5,7.5c0,4.143,3.358,7.5,7.5,7.5h74.573c4.142,0,7.5-3.357,7.5-7.5 C89.573,240.25,86.215,236.893,82.073,236.893z' />
                            <path d='M7.5,209.254h59.059c4.142,0,7.5-3.357,7.5-7.5c0-4.143-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.357-7.5,7.5 C0,205.897,3.358,209.254,7.5,209.254z' />
                        </svg>
                    </h2>

                    <div className='grid gap-5'>
                        <InputField title='Address, suite, etc.' {...register('address')}>
                            {errors.address && <InputInfoText>{errors.address?.message}</InputInfoText>}
                        </InputField>

                        <div className='grid grid-cols-2 gap-5'>
                            <InputField title='Postal code' {...register('postcode')}>
                                {errors.postcode && <InputInfoText>{errors.postcode?.message}</InputInfoText>}
                            </InputField>

                            <InputField title='City' {...register('city')}>
                                {errors.city && <InputInfoText>{errors.city?.message}</InputInfoText>}
                            </InputField>
                        </div>

                        <InputField title='Country' {...register('country')}>
                            {errors.country && <InputInfoText>{errors.country?.message}</InputInfoText>}
                        </InputField>
                    </div>
                </div>

                <div>
                    <h2 className='flex justify-between pt-10'>
                        Delivery methods
                        <svg className='fill-current' viewBox='0 0 32 32'>
                            <path d='M 0 6 L 0 8 L 19 8 L 19 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 L 4 18 L 2 18 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 21.15625 25 C 21.601563 26.71875 23.148438 28 25 28 C 26.851563 28 28.398438 26.71875 28.84375 25 L 32 25 L 32 16.84375 L 31.9375 16.6875 L 29.9375 10.6875 L 29.71875 10 L 21 10 L 21 6 Z M 1 10 L 1 12 L 10 12 L 10 10 Z M 21 12 L 28.28125 12 L 30 17.125 L 30 23 L 28.84375 23 C 28.398438 21.28125 26.851563 20 25 20 C 23.148438 20 21.601563 21.28125 21.15625 23 L 21 23 Z M 2 14 L 2 16 L 8 16 L 8 14 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 25 22 C 26.117188 22 27 22.882813 27 24 C 27 25.117188 26.117188 26 25 26 C 23.882813 26 23 25.117188 23 24 C 23 22.882813 23.882813 22 25 22 Z' />
                        </svg>
                    </h2>

                    <div className='flex flex-wrap gap-5'>
                        {DeliveryMethods.map((value, index) => (
                            <CardRadio key={index} value={value.method} onChange={() => setDeliveryMethod(value)} checked={value === deliveryMethod}>
                                <p>{value.description}</p>
                                <p className='pt-4 font-semibold'>{`${GeoProps.currentCurrency}${value.price}`}</p>
                            </CardRadio>
                        ))}
                    </div>
                </div>
            </div>

            <NoSSR>
                <div className='col-span-1 grid'>
                    <div>
                        <h2>Order summary</h2>

                        <div className='grid gap-8 rounded border p-7'>
                            <div className='grid gap-5'>
                                <div className='grid gap-5'>
                                    {products.map((product, index) => (
                                        <div key={index} className='border-b pb-5'>
                                            <CheckoutItem product={product} onRemove={() => removeProduct(product)} />
                                        </div>
                                    ))}
                                </div>

                                <div className='flex justify-between'>
                                    Subtotal
                                    <p>{`${GeoProps.currentCurrency}${subTotalPrice}`}</p>
                                </div>

                                <div className='flex justify-between'>
                                    Shipping
                                    <p>{`${GeoProps.currentCurrency}${deliveryMethod.price}`}</p>
                                </div>

                                <div className='flex justify-between border-t pt-5 font-semibold'>
                                    Total
                                    <p>{`${GeoProps.currentCurrency}${totalPrice}`}</p>
                                </div>
                            </div>

                            <button type='submit' className='btn-primary btn w-full'>
                                Confirm order
                            </button>
                        </div>
                    </div>
                </div>
            </NoSSR>
        </form>
    );
}
