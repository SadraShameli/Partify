import Image from 'next/image';

import { GeoProps } from '../../hooks/useGeo';
import { type IProduct } from './ProductTypes';
import { GenerateRatingStars } from './ProductRating';
import UseProductStorage from './Hooks/UseProductStorage';
import { ProductStorageKeys } from '../../assets/Constants';

export default function ProductOverView2({ product }: { product: IProduct }) {
    const [isWishListed, addToWishList, removeFromWishList] = UseProductStorage(ProductStorageKeys.wishListedProducts, product);
    const [isAddedToBag, addToBag] = UseProductStorage(ProductStorageKeys.addedToBag, product);

    return (
        <div className='mt-10 grid gap-20'>
            <div>
                <div className='breadcrumbs text-sm'>
                    <ul>
                        {/* {product.categories.map((value, index) => (
                            <li key={index} className='font-bold'>
                                {value}
                            </li>
                        ))} */}
                    </ul>
                </div>

                <div className='mt-5 grid h-[36rem] grid-cols-3 gap-5'>
                    <div className='relative'>
                        <Image className='img' src={product.additionalImages[0]} alt={product.name} fill />
                    </div>

                    <div className='grid gap-5'>
                        {product.additionalImages[1] && (
                            <div className='relative'>
                                <Image className='img object-top' src={product.additionalImages[1]} alt={product.name} fill />
                            </div>
                        )}

                        {product.additionalImages[2] && (
                            <div className='relative'>
                                <Image className='img object-bottom' src={product.additionalImages[2]} alt={product.name} fill />
                            </div>
                        )}
                    </div>

                    {product.additionalImages[3] && (
                        <div className='relative'>
                            <Image className='img' src={product.additionalImages[3]} alt={product.name} fill />
                        </div>
                    )}
                </div>

                <div className='flex justify-between divide-x pt-10'>
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

                    <div className='grid h-fit basis-4/12 gap-10 pl-8'>
                        <div>
                            <p className='text-4xl font-bold'>{`${GeoProps.currentCurrency}${product.price}`}</p>
                            <div className='flex pt-2'>
                                <GenerateRatingStars count={product.starCount} />
                                <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>{product.reviewCount} reviews</p>
                            </div>
                        </div>

                        <div>
                            <p>Size</p>
                            {/* <div className='grid grid-cols-4 gap-5 pt-3'>
                                {product.variants.map((value, index) => {
                                    if (value.stockCount)
                                        return (
                                            <button key={index} type='button' className={'btn focus:btn-active [&:not(:focus)]:btn-outline'}>
                                                {value.title}
                                            </button>
                                        );

                                    return (
                                        <button key={index} type='button' className='btn-disabled btn'>
                                            {value.title}
                                        </button>
                                    );
                                })}
                            </div> */}
                        </div>

                        <div className='flex flex-wrap gap-3'>
                            <button type='button' className='btn btn-primary flex-1 gap-2' onClick={() => addToBag(product)}>
                                {isAddedToBag ? (
                                    <>
                                        Added to bag
                                        <svg className='h-5 w-5 fill-current stroke-current stroke-2' viewBox='0 0 32 32'>
                                            <polyline className='fill-none' points='28,8 16,20 11,15 ' />
                                            <path d='M26.7,13.5c0.2,0.8,0.3,1.6,0.3,2.5c0,6.1-4.9,11-11,11S5,22.1,5,16S9.9,5,16,5c3,0,5.7,1.2,7.6,3.1l1.4-1.4 C22.7,4.4,19.5,3,16,3C8.8,3,3,8.8,3,16s5.8,13,13,13s13-5.8,13-13c0-1.4-0.2-2.8-0.7-4.1L26.7,13.5z' />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        Add to bag
                                        <svg className='h-5 w-5 fill-current' viewBox='0 0 16 16'>
                                            <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
                                        </svg>
                                    </>
                                )}
                            </button>

                            <button
                                type='button'
                                className='btn active:btn-active [&:not(:active)]:btn-outline gap-2'
                                onClick={() => {
                                    if (isWishListed) {
                                        removeFromWishList(product);
                                    } else {
                                        addToWishList(product);
                                    }
                                }}
                            >
                                Wishlist
                                <svg className={`h-5 w-5 fill-current ${isWishListed ? 'fill-primary' : ''}`} viewBox='0 0 16 16'>
                                    <path d='M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
