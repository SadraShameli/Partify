import { useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';

import CheckoutItem from './CheckoutItem';
import { CountryInput, PhoneInput } from './CheckoutInputs';
import { IContactInformation, IDeliveryMethod, IShippingInformation, DeliveryMethods, ValidationPatterns } from './CheckoutTypes';

import { Card, CardRadio } from '../Card';
import { InputField, InputInfoText } from '../InputField';
import UseProductStorage from '../Product/Hooks/UseProductStorage';
import { productStorageKeys } from '../../assets/globals';

interface IFormData extends IContactInformation, IShippingInformation {}

export default function CheckoutForm() {
    const [, , removeProduct, products] = UseProductStorage(productStorageKeys.addedToBag);
    const [deliveryMethod, setDeliveryMethod] = useState<IDeliveryMethod>(DeliveryMethods[0]);
    const currency = products.length ? products[0].currency : '$';
    const subTotalPrice = products.reduce((prev, value) => prev + value.price, 0);
    const totalPrice = subTotalPrice ? subTotalPrice + deliveryMethod.cost : 0;
    const taxAmount = products.reduce((n, { id }) => n + id, 0);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>({ reValidateMode: 'onChange' });

    function onSubmit(data: IFormData) {}

    return (
        <form className='md:grid flex flex-col-reverse grid-cols-2 gap-20' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid col-span-1 gap-10 divide-y'>
                <div>
                    <h2 className='mt-10 mb-5'>Contact information</h2>

                    <div className='form-control gap-5'>
                        <div className='grid grid-cols-2 gap-5'>
                            <InputField title='First name' {...register('firstName', { required: true, pattern: ValidationPatterns.charSpace })}>
                                {errors.firstName?.type === 'required' && <InputInfoText>This field is required</InputInfoText>}
                                {errors.firstName?.type === 'pattern' && <InputInfoText>Characters and spaces only</InputInfoText>}
                            </InputField>

                            <InputField title='Last name' {...register('lastName', { required: true, pattern: ValidationPatterns.charSpace })}>
                                {errors.lastName?.type === 'required' && <InputInfoText>This field is required</InputInfoText>}
                                {errors.lastName?.type === 'pattern' && <InputInfoText>Characters and spaces only</InputInfoText>}
                            </InputField>
                        </div>

                        <InputField
                            type='email'
                            title='Email address'
                            placeholder='you@domain.com'
                            {...register('email', { required: true, pattern: ValidationPatterns.email })}
                        >
                            {errors.email?.type === 'required' && <InputInfoText>This field is required</InputInfoText>}
                        </InputField>

                        <PhoneInput {...register('phone', { required: true, pattern: ValidationPatterns.phone, minLength: 10 })}>
                            {errors.phone?.type === 'required' && <InputInfoText>This field is required</InputInfoText>}
                            {errors.phone?.type === 'minLength' && <InputInfoText>At least 10 digits</InputInfoText>}
                            {errors.phone?.type === 'pattern' && <InputInfoText>Numbers only</InputInfoText>}
                        </PhoneInput>

                        <InputField title='Order notes' {...register('notes', { required: false })} />
                    </div>
                </div>

                <div>
                    <h2 className='mt-10 mb-5'>Shipping information</h2>

                    <div className='form-control gap-5'>
                        <InputField title='Address, suite, etc.' {...register('address', { required: true })}>
                            {errors.address?.type === 'required' && <InputInfoText>This field is required</InputInfoText>}
                        </InputField>

                        <div className='grid grid-cols-2 gap-5'>
                            <InputField title='Postal code' {...register('postcode', { required: true, pattern: ValidationPatterns.charNumSpace })}>
                                {errors.postcode?.type === 'required' && <InputInfoText>This field is required</InputInfoText>}
                                {errors.postcode?.type === 'pattern' && <InputInfoText>Characters and numbers only</InputInfoText>}
                            </InputField>

                            <InputField title='City' {...register('city', { required: true, pattern: ValidationPatterns.charSpace })}>
                                {errors.city?.type === 'required' && <InputInfoText>This field is required</InputInfoText>}
                                {errors.city?.type === 'pattern' && <InputInfoText>Characters only</InputInfoText>}
                            </InputField>
                        </div>

                        <CountryInput {...register('country', { required: true, pattern: ValidationPatterns.charSpace })}>
                            {errors.country?.type === 'required' && <InputInfoText>This field is required</InputInfoText>}
                            {errors.country?.type === 'pattern' && <InputInfoText>Characters only</InputInfoText>}
                        </CountryInput>
                    </div>
                </div>

                <Card title='Delivery methods'>
                    {DeliveryMethods.map((value, index) => (
                        <CardRadio key={index} value={value.method} onChange={() => setDeliveryMethod(value)} checked={value === deliveryMethod}>
                            <p className='text-subtitle'>{value.description}</p>
                            <p className='pt-4 font-semibold'>{`${value.currency}${value.cost}`}</p>
                        </CardRadio>
                    ))}
                </Card>
            </div>

            <div className='grid col-span-1'>
                <div>
                    <h2 className='mt-10 mb-5'>Order summary</h2>

                    <div className='p-7 grid gap-8 border rounded'>
                        <div className='grid gap-5'>
                            <div className='grid gap-5'>
                                {products.map((product, index) => (
                                    <div key={index} className='pb-5 border-b'>
                                        <CheckoutItem product={product} onRemove={() => removeProduct(product)} />
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-between'>
                                Subtotal
                                <p>{`${currency}${totalPrice}`}</p>
                            </div>

                            <div className='flex justify-between'>
                                Shipping
                                <p>{`${deliveryMethod.currency}${deliveryMethod.cost}`}</p>
                            </div>

                            <div className='flex justify-between'>
                                Taxes
                                <p>{`${currency}${taxAmount}`}</p>
                            </div>

                            <div className='flex justify-between pt-5 font-semibold border-t'>
                                Total
                                <p>{`${currency}${totalPrice}`}</p>
                            </div>
                        </div>

                        <button type='submit' className='btn btn-primary w-full'>
                            Confirm order
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
