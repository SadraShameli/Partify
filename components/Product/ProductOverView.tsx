import Image from 'next/image';
import { useState } from 'react';
import { IProduct } from './ProductTypes';
import { GenerateRatingStars } from './ProductRating';
import ProductCard from './ProductCard';

import { AccordionHeader, AccordionContent } from '../Accordion';

export default function ProductOverView({ product, productRecommendations }: { product: IProduct; productRecommendations: IProduct[] }) {
    const [isWishListed, setIsWishListed] = useState(false);

    return (
        <div className='grid gap-20 mt-10'>
            <div>
                <div className='breadcrumbs text-sm'>
                    <ul>
                        {product.Categories.map((value, index) => (
                            <li key={index} className='font-bold'>
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='grid grid-cols-2 gap-20 mt-5'>
                    <div className='col-span-1'>
                        <div className='flex relative h-[50rem]'>
                            <Image className='img' src={product.MainImage} alt={product.Name} loading='lazy' fill />
                        </div>

                        <div className='relative grid grid-cols-4 gap-5 mt-20'>
                            {product.OtherImages.map((value, index) => {
                                return (
                                    <div key={index} className='relative h-32'>
                                        <Image className='img' src={value} alt={product.Name} loading='lazy' fill />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='auto-rows-min grid col-span-1 gap-10'>
                        <div className='grid gap-3'>
                            <p className='text-4xl font-bold'>{product.Name}</p>
                            <p className='text-3xl'>{product.Price}</p>
                            <div className='flex'>
                                <GenerateRatingStars count={product.StarCount} />
                                <p className='dark:text-gray-400 ml-2 text-sm font-medium text-gray-500'>{product.ReviewCount} reviews</p>
                            </div>
                        </div>

                        <p>{product.Description}</p>

                        <div className='grid gap-12'>
                            <div>
                                Size
                                <div className='gap-7 grid grid-cols-4 pt-3'>
                                    {product.Variants.map((value, index) => {
                                        if (value.InStock)
                                            return (
                                                <button key={index} type='button' className={'btn [&:not(:focus)]:btn-outline focus:btn-active'}>
                                                    {value.Name}
                                                </button>
                                            );

                                        return (
                                            <button key={index} type='button' className='btn btn-disabled'>
                                                {value.Name}
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

                                <button type='button' className='btn [&:not(:active)]:btn-outline active:btn-active gap-2' onClick={() => setIsWishListed((value) => !value)}>
                                    Wishlist
                                    <svg className={`w-5 h-5 fill-current ${isWishListed ? 'fill-primary' : ''}`} viewBox='0 0 16 16'>
                                        <path d='M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z' />
                                    </svg>
                                </button>
                            </div>

                            <AccordionHeader>
                                <AccordionContent title='Highlights'>
                                    <ul>
                                        {product.Highlights.map((value, index) => (
                                            <li key={index}>{value}</li>
                                        ))}
                                    </ul>
                                </AccordionContent>

                                <AccordionContent title='Details'>{product.Details}</AccordionContent>
                            </AccordionHeader>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='text-2xl font-bold'>Customers also purchased</h2>
                <div className='grid grid-flow-col grid-cols-4 gap-5 mt-10'>
                    {productRecommendations.map((value, index) => (
                        <ProductCard key={index} {...value} />
                    ))}
                </div>
            </div>
        </div>
    );
}
