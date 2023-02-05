import Image from 'next/image';
import type { IProduct } from '../Product/ProductTypes';
import { GeoProps } from '../../hooks/useGeo';

export default function CheckoutItem({ product, onRemove }: { product: IProduct; onRemove: () => void }) {
    console.log(product);
    return (
        <div className='flex justify-between'>
            <div className='flex w-full gap-5'>
                {product.additionalImages.length && (
                    <div className='relative h-36 w-24'>
                        <Image src={product.additionalImages[0]} alt={product.name} priority fill />
                    </div>
                )}

                <div className='flex flex-1 justify-between gap-5 py-2'>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <p className='text-sm font-semibold'>{product.name}</p>
                            <p className='mt-1 text-sm'>{product.color}</p>
                        </div>

                        <p className='text-sm font-bold'>{`${GeoProps.currentCurrency}${product.price}`}</p>
                    </div>

                    <button className='self-start' type='button' onClick={() => onRemove()}>
                        <svg className='h-6 w-6 fill-none' viewBox='0 0 24 24'>
                            <path
                                className='stroke-current stroke-2'
                                d='M4 6H20L18.4199 20.2209C18.3074 21.2337 17.4512 22 16.4321 22H7.56786C6.54876 22 5.69264 21.2337 5.5801 20.2209L4 6Z'
                            />
                            <path
                                className='stroke-current stroke-2'
                                d='M7.34491 3.14716C7.67506 2.44685 8.37973 2 9.15396 2H14.846C15.6203 2 16.3249 2.44685 16.6551 3.14716L18 6H6L7.34491 3.14716Z'
                            />
                            <path className='stroke-current stroke-2' d='M10 11V16' />
                            <path className='stroke-current stroke-2' d='M14 11V16' />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
