import Image from 'next/image';

import { IProduct } from './ProductTypes';
import { GenerateRatingStars } from './ProductRating';
import ProductCard from './ProductCard';
import UseProductStorage from './Hooks/UseProductStorage';

import { Accordion, AccordionContent } from '../Accordion';
import { ProductStorageKeys } from '../../assets/Constants';

export default function ProductOverView({ product, productRecommendations }: { product: IProduct; productRecommendations: IProduct[] }) {
    const [isWishListed, setWishListedProduct] = UseProductStorage(ProductStorageKeys.wishListedProducts, product);
    const [isAddedToBag, setAddedToBagProduct] = UseProductStorage(ProductStorageKeys.addedToBag, product);

    return (
        <div className='grid gap-20 mt-10'>
            <div>
                <div className='breadcrumbs text-sm'>
                    <ul>
                        {product.categories?.map((value, index) => (
                            <li key={index} className='font-bold'>
                                <a>{value}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-wrap gap-10 mt-5'>
                    <div className='md:basis-1/2 w-full'>
                        <div className='flex relative h-[32rem] md:h-[44rem]'>
                            <Image className='img' src={product.variants[0].images[0]} alt={product.title} fill />
                        </div>

                        <div className='flex flex-wrap gap-5 mt-10'>
                            {product.variants[0].images.map((value, index) => {
                                return (
                                    <div key={index} className='h-28 relative w-24'>
                                        <Image className='img' src={value} alt={product.title} fill />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='md:basis-5/12 auto-rows-min gap-7 grid'>
                        <div className='grid gap-3'>
                            <p className='text-4xl font-bold'>{product.title}</p>
                            <p className='text-3xl font-semibold'>{`${product.currency}${product.price}`}</p>
                            <div className='flex'>
                                <GenerateRatingStars count={product.starCount} />
                                <p className='dark:text-gray-400 ml-2 text-sm font-medium text-gray-500'>{product.reviewCount} reviews</p>
                            </div>
                        </div>

                        <p>{product.description}</p>

                        <div className='grid gap-10'>
                            <div>
                                <p className='font-semibold'>Size</p>
                                <div className='gap-7 grid grid-cols-4 pt-3'>
                                    {product.variants.map((value, index) => {
                                        if (value.inStock)
                                            return (
                                                <button key={index} type='button' className={'btn [&:not(:focus)]:btn-outline focus:btn-active'}>
                                                    {value.title}
                                                </button>
                                            );

                                        return (
                                            <button key={index} type='button' className='btn btn-disabled'>
                                                {value.title}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className='flex flex-wrap gap-3'>
                                <button type='button' className='btn btn-primary flex-1 gap-2' onClick={() => setAddedToBagProduct(product)}>
                                    {isAddedToBag ? (
                                        <>
                                            Added to bag
                                            <svg className='w-5 h-5 fill-current stroke-2 stroke-current' viewBox='0 0 32 32'>
                                                <polyline className='fill-none' points='28,8 16,20 11,15 ' />
                                                <path d='M26.7,13.5c0.2,0.8,0.3,1.6,0.3,2.5c0,6.1-4.9,11-11,11S5,22.1,5,16S9.9,5,16,5c3,0,5.7,1.2,7.6,3.1l1.4-1.4 C22.7,4.4,19.5,3,16,3C8.8,3,3,8.8,3,16s5.8,13,13,13s13-5.8,13-13c0-1.4-0.2-2.8-0.7-4.1L26.7,13.5z' />
                                            </svg>
                                        </>
                                    ) : (
                                        <>
                                            Add to bag
                                            <svg className='w-5 h-5 fill-current' viewBox='0 0 16 16'>
                                                <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
                                            </svg>
                                        </>
                                    )}
                                </button>

                                <button
                                    type='button'
                                    className='btn [&:not(:active)]:btn-outline active:btn-active gap-2'
                                    onClick={() => setWishListedProduct(product)}
                                >
                                    Wishlist
                                    <svg className={`w-5 h-5 fill-current ${isWishListed ? 'fill-primary' : ''}`} viewBox='0 0 16 16'>
                                        <path d='M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z' />
                                    </svg>
                                </button>
                            </div>

                            <Accordion>
                                <AccordionContent title='Highlights'>
                                    <ul>
                                        {product.highlights.map((value, index) => (
                                            <li key={index}>{value}</li>
                                        ))}
                                    </ul>
                                </AccordionContent>

                                <AccordionContent title='Details'>{product.details}</AccordionContent>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2>Customers also purchased</h2>
                <div className='flex flex-wrap gap-5'>
                    {productRecommendations.map((value, index) => (
                        <ProductCard key={index} {...value} />
                    ))}
                </div>
            </div>
        </div>
    );
}
