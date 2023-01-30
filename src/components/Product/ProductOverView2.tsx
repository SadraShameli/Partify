import Image from 'next/image';
import { useState } from 'react';

import ProductCard from './ProductCard';
import { IProduct } from './ProductTypes';
import { GenerateRatingStars } from './ProductRating';

export default function ProductOverView2({ product, productRecommendations }: { product: IProduct; productRecommendations: IProduct[] }) {
    const [isWishListed, setIsWishListed] = useState(false);

    return (
        <div className='grid gap-20 mt-10'>
            <div>
                <div className='breadcrumbs text-sm'>
                    <ul>
                        {product.categories.map((value, index) => (
                            <li key={index} className='font-bold'>
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='grid grid-cols-3 gap-5 h-[36rem] mt-5'>
                    <div className='relative'>
                        <Image className='img' src={product.variants[0].images[0]} alt={product.name} fill />
                    </div>

                    <div className='grid gap-5'>
                        {product.variants[0].images[1] && (
                            <div className='relative'>
                                <Image className='img object-top' src={product.variants[0].images[1]} alt={product.name} fill />
                            </div>
                        )}

                        {product.variants[0].images[2] && (
                            <div className='relative'>
                                <Image className='img object-bottom' src={product.variants[0].images[2]} alt={product.name} fill />
                            </div>
                        )}
                    </div>

                    {product.variants[0].images[3] && (
                        <div className='relative'>
                            <Image className='img' src={product.variants[0].images[3]} alt={product.name} fill />
                        </div>
                    )}
                </div>

                <div className='flex justify-between pt-10 divide-x'>
                    <div className='prose'>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>

                        <h4>Highlights</h4>
                        <ul>
                            {product.highlights.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul>

                        <h4>Details</h4>
                        <p>{product.details}</p>
                    </div>

                    <div className='basis-4/12 h-fit grid gap-10 pl-8'>
                        <div>
                            <p className='text-4xl font-bold'>{`${product.currency}${product.price}`}</p>
                            <div className='flex pt-2'>
                                <GenerateRatingStars count={product.starCount} />
                                <p className='dark:text-gray-400 ml-2 text-sm font-medium text-gray-500'>{product.reviewCount} reviews</p>
                            </div>
                        </div>

                        <div>
                            <p>Size</p>
                            <div className='grid grid-cols-4 gap-5 pt-3'>
                                {product.variants.map((value, index) => {
                                    if (value.inStock)
                                        return (
                                            <button key={index} type='button' className={'btn [&:not(:focus)]:btn-outline focus:btn-active'}>
                                                {value.name}
                                            </button>
                                        );

                                    return (
                                        <button key={index} type='button' className='btn btn-disabled'>
                                            {value.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-3'>
                            <button type='button' className='btn btn-primary flex-1 gap-2'>
                                Add to bag
                                <svg className='w-5 h-5 fill-current' viewBox='0 0 16 16'>
                                    <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
                                </svg>
                            </button>

                            <button
                                type='button'
                                className='btn [&:not(:active)]:btn-outline active:btn-active gap-2'
                                onClick={() => setIsWishListed((value) => !value)}
                            >
                                Wishlist
                                <svg className={`w-5 h-5 fill-current ${isWishListed ? 'fill-primary' : ''}`} viewBox='0 0 16 16'>
                                    <path d='M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2>Customers also purchased</h2>
                <div className='grid grid-flow-col grid-cols-4 gap-5'>
                    {productRecommendations.map((value, index) => (
                        <ProductCard key={index} {...value} />
                    ))}
                </div>
            </div>
        </div>
    );
}
