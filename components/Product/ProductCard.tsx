import Image from 'next/image';
import { IProduct } from './ProductTypes';

export default function ProductCard(product: IProduct) {
    return (
        <div className='grid w-full'>
            <div className='h-96 relative'>
                <Image src={product.MainImage} alt={product.Name} className='img' fill />
            </div>

            <div className='flex justify-between mt-3'>
                <div>
                    <h3 className='text-sm text-gray-700'>{product.Name}</h3>
                    <p className='mt-1 text-sm text-gray-500'>Black</p>
                </div>

                <p className='text-sm font-medium text-gray-900'>{product.Price}</p>
            </div>
        </div>
    );
}
