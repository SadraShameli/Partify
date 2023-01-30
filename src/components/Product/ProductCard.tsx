import Image from 'next/image';
import { IProduct } from './ProductTypes';

export default function ProductCard(product: IProduct) {
    return (
        <div className='grid'>
            <div className='h-96 relative'>
                <Image src={product.variants[0].images[0]} alt={product.name} className='img' fill />
            </div>

            <div className='flex justify-between gap-5 mt-3'>
                <div>
                    <p className='text-sm font-semibold text-gray-700'>{product.name}</p>
                    <p className='mt-1 text-sm text-gray-500'>Black</p>
                </div>

                <p className='text-sm font-medium text-gray-900'>{`${product.currency}${product.price}`}</p>
            </div>
        </div>
    );
}
