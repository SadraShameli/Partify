import Image from 'next/image';
import { IProduct } from './ProductTypes';

export default function ProductCard(product: IProduct) {
    return (
        <div className='grid w-full'>
            <div className='relative h-96'>
                <Image src={product.Image} alt={product.Name} className='img' fill />
            </div>

            <div className='mt-5 flex justify-between items-center'>
                <div>
                    <h3 className='text-sm text-gray-700'>{product.Name}</h3>
                    <p className='mt-1 text-sm text-gray-500'>Black</p>
                </div>

                <p className='text-sm font-medium text-gray-900'>{product.Price}</p>
            </div>
        </div>
    );
}
