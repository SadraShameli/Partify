import Image from 'next/image'
import { IProduct } from '../../types/Product';

export default function ProductQuickView(props: IProduct) {
    return (
        <div className='flex pt-10'>
            <div className='relative w-48'>
                <Image className='object-cover rounded-xl' src={props.Image} alt={props.Name} loading='lazy' fill />
            </div>
            <form className='flex-auto p-6'>
                <div className='flex flex-wrap'>
                    <div className='flex-auto text-lg font-semibold text-primary'>{props.Name}</div>
                    <p className='font-semibold text-info'>{props.Price}</p>
                    <p className='w-full text-sm font-medium'>{props.InStock ? 'In' : 'Out of'} stock</p>
                </div>
                <div className='pb-6 mt-4 mb-6'>
                    <div className='space-x-2'>
                        {props.Variants.map((variant, index) => {
                            return (
                                <label key={index}>
                                    <input className='sr-only peer' name='size' type='radio' value={variant.Title} {...variant.InStock && { checked: true }} />
                                    <div className={`btn btn-sm peer-checked:btn-active btn-ghost ${variant.InStock || 'btn-disabled'}`}>
                                        {variant.Title}
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                </div>
                <div className='divider' />
                <div className='flex mb-6 space-x-4 text-sm font-medium'>
                    <div className='flex flex-auto space-x-4'>
                        <button className='btn btn-primary' type='submit'>Buy now</button>
                        <button className='btn btn-accent' type='button'>Add to bag</button>
                    </div>
                    <div className='grid w-9 h-9 place-items-center btn btn-sm btn-outline'>
                        <svg className='w-5 h-5 fill-current'>
                            <path d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' />
                        </svg>
                    </div>
                </div>
                <p className='text-sm text-info'>Free shipping on all continental US orders.</p>
            </form >
        </div >
    );
}