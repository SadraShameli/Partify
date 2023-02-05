/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Image from 'next/image';
import { GeoProps } from '../../hooks/useGeo';
import { type IProduct } from './ProductTypes';

export default function ProductCard(product: IProduct) {
    return (
        <div>
            <div className='relative h-96'>
                <Image src={product.image} alt={product.name} fill />
            </div>

            <div className='mt-3 flex justify-between gap-5 text-sm font-semibold'>
                <div>
                    <p>{product.name}</p>
                    <p className='mt-1 font-light text-base-300'>Black</p>
                </div>

                <p>{`${GeoProps.currentCurrency}${product.price}`}</p>
            </div>
        </div>
    );
}
