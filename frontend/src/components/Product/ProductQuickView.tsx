import Image from 'next/image';
import { IProduct } from './ProductTypes';

export default function ProductQuickView(props: IProduct) {
    return (
        <div className='flex pt-10'>
            <div className='relative w-48'>
                <Image className='img' src={props.variants[0].images[0]} alt={props.title} fill />
            </div>

            <form className='flex-auto p-6'>
                <div className='flex flex-wrap'>
                    <div className='text-primary flex-auto text-lg font-semibold'>{props.title}</div>
                    <p className='text-info font-semibold'>{props.price}</p>
                    <p className='w-full text-sm font-medium'>{props.inStock ? 'In' : 'Out of'} stock</p>
                </div>

                <div className='pb-6 mt-4 mb-6'>
                    <div className='space-x-2'>
                        {props.variants.map((variant, index) => {
                            return (
                                <label key={index}>
                                    <input
                                        className='peer sr-only'
                                        name='size'
                                        type='radio'
                                        value={variant.title}
                                        {...(variant.inStock && { checked: true })}
                                    />
                                    <div className={`btn peer-checked:btn-active ${variant.inStock || 'btn-disabled'}`}>{variant.title}</div>
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className='divider' />

                <div className='flex mb-6 space-x-4 text-sm font-medium'>
                    <div className='flex flex-auto space-x-4'>
                        <button className='btn' type='submit'>
                            Buy now
                        </button>

                        <button className='btn' type='button'>
                            Add to bag
                        </button>
                    </div>

                    <div className='w-9 h-9 place-items-center btn grid'>
                        <svg className='w-5 h-5 fill-current'>
                            <path d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' />
                        </svg>
                    </div>
                </div>

                <p className='text-info text-sm'>Free shipping on all continental US orders.</p>
            </form>
        </div>
    );
}
