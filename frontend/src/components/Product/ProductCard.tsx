import Image from 'next/image';
import { IProduct } from './ProductTypes';

export default function ProductCard(product: IProduct) {
    return (
        <div>
            <div className='h-96 relative'>
                <Image src={product.variants[0].images[0]} alt={product.title} fill />
            </div>

            <div className='flex justify-between gap-5 mt-3 text-sm font-semibold'>
                <div>
                    <p>{product.title}</p>
                    <p className='mt-1 font-light text-base-300'>Black</p>
                </div>

                <p>{`${product.currency}${product.price}`}</p>
            </div>
        </div>
    );
}
