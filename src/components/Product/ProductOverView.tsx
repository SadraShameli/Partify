import Image from 'next/image';
import NoSSR from 'react-no-ssr';
import { useState } from 'react';

import { type IProduct } from './ProductTypes';
import { GenerateRatingStars } from './ProductRating';
import UseProductStorage from './Hooks/UseProductStorage';

import { Accordion, AccordionContent } from '../Accordion';
import { ProductStorageKeys } from '../../assets/Constants';
import { GeoProps } from '../../hooks/useGeo';

export default function ProductOverView({ product }: { product: IProduct }) {
    const [isWishListed, addToWishList, removeFromWishList] = UseProductStorage(ProductStorageKeys.wishListedProducts, product);
    const [isAddedToBag, addToBag] = UseProductStorage(ProductStorageKeys.addedToBag, product);
    const [currentPicture, setCurrentPicture] = useState(product.image);

    return (
        <div className='mt-10 grid gap-20'>
            <div>
                {/* <div className='breadcrumbs text-sm'>
                    <ul>
                        {product.?.map((value, index) => (
                            <li key={index} className='font-bold'>
                                <a>{value}</a>
                            </li>
                        ))}
                    </ul>
                </div> */}

                <div className='mt-5 flex flex-wrap gap-10'>
                    <div className='w-full md:basis-1/2'>
                        <div className='relative flex h-[32rem] md:h-[44rem]'>
                            <Image className='img' quality={100} priority={true} src={currentPicture} alt={product.name} fill />
                        </div>

                        <div className='mt-10 flex flex-wrap gap-5 overflow-hidden'>
                            {product.additionalImages.map((value, index) => {
                                return (
                                    <button key={index} className='relative h-28 w-24' onMouseOver={() => setCurrentPicture(value)}>
                                        <Image className='img' src={value} alt={product.name} fill />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className='grid auto-rows-min gap-7 md:basis-5/12'>
                        <div className='grid gap-3'>
                            <p className='text-4xl font-bold'>{product.name}</p>
                            <p className='text-3xl font-semibold'>{`${GeoProps.currentCurrency}${product.price}`}</p>
                           
                            <div className='flex'>
                                <GenerateRatingStars count={product.starCount} />
                                <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>{product.reviewCount} reviews</p>
                            </div>
                        </div>

                        <p>{product.description}</p>

                        {/* <div className='grid gap-10'>
                            <div>
                                <p className='font-semibold'>Size</p>
                                <div className='grid grid-cols-4 gap-7 pt-3'>
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
                                </div>
                            </div> */}

                        <NoSSR>
                            <div className='flex flex-wrap items-center gap-3'>
                                <button type='button' className='btn btn-primary flex-1 gap-3' onClick={() => addToBag(product)}>
                                    {isAddedToBag ? (
                                        <>
                                            Added to bag
                                            <svg className='fill-current' viewBox='0 0 400 400'>
                                                <path d='M199.996,0C89.713,0,0,89.72,0,200s89.713,200,199.996,200S400,310.28,400,200S310.279,0,199.996,0z M199.996,373.77 C104.18,373.77,26.23,295.816,26.23,200c0-95.817,77.949-173.769,173.766-173.769c95.817,0,173.771,77.953,173.771,173.769 C373.768,295.816,295.812,373.77,199.996,373.77z' />
                                                <path d='M272.406,134.526L169.275,237.652l-41.689-41.68c-5.123-5.117-13.422-5.12-18.545,0.003 c-5.125,5.125-5.125,13.425,0,18.548l50.963,50.955c2.561,2.558,5.916,3.838,9.271,3.838s6.719-1.28,9.279-3.842 c0.008-0.011,0.014-0.022,0.027-0.035L290.95,153.071c5.125-5.12,5.125-13.426,0-18.546 C285.828,129.402,277.523,129.402,272.406,134.526z' />
                                            </svg>
                                        </>
                                    ) : (
                                        <>
                                            Add to bag
                                            <svg className='fill-current' viewBox='0 0 16 16'>
                                                <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
                                            </svg>
                                        </>
                                    )}
                                </button>

                                <button
                                    className='btn ml-2 hover:border-current'
                                    onClick={() => {
                                        if (isWishListed) {
                                            removeFromWishList(product);
                                        } else {
                                            addToWishList(product);
                                        }
                                    }}
                                >
                                    <svg className={`h-7 w-7 fill-current ${isWishListed ? 'fill-primary' : ''}`} viewBox='0 0 512 512'>
                                        <path d='M373.597,29.736c-0.938,0-1.856,0.009-2.795,0.03C313.675,30.864,276.726,59.028,256,93.182 c-20.726-34.154-57.675-62.318-114.802-63.416c-0.928-0.021-1.866-0.03-2.796-0.03c-38.566,0-73.559,15.465-98.518,43.538 C13.797,102.626,0,143.789,0,192.309c0,95.273,76.404,153.378,150.284,209.566c28.513,21.684,57.975,44.098,83.483,68.688 l1.138,1.547c5.062,6.24,12.419,9.904,20.296,10.134l0.8,0.02l0.838-0.02c7.847-0.24,15.186-3.894,20.247-10.114l1.158-1.578 c25.498-24.59,54.97-47.003,83.473-68.678C435.596,345.687,512,287.583,512,192.309C512,96.586,455.083,29.736,373.597,29.736z M371.391,357.748c-37.12,28.952-78.172,57.866-113.654,92.099c-0.689,0.668-1.248,1.238-1.747,1.777 c-0.519-0.549-1.018-1.088-1.726-1.777c-47.303-45.615-104.52-81.895-149.116-121.202c-22.313-19.618-41.412-39.904-54.79-62.088 c-13.378-22.204-21.184-46.164-21.215-74.248c0.02-44.228,12.81-77.493,32.528-99.677c19.757-22.164,46.573-33.705,76.733-33.764 l2.237,0.03c33.775,0.708,57.835,12.67,75.017,29.681c17.132,17.022,27.165,39.556,30.77,60.99 c0.788,4.682,4.821,8.097,9.574,8.097c4.752,0,8.785-3.414,9.574-8.097c3.604-21.434,13.638-43.967,30.77-60.99 c17.181-17.012,41.242-28.973,75.017-29.681l2.236-0.03c30.161,0.059,56.976,11.6,76.735,33.764 c19.717,22.184,32.507,55.449,32.526,99.677c-0.03,28.084-7.837,52.044-21.215,74.248 C441.605,299.833,408.54,328.815,371.391,357.748z' />
                                    </svg>
                                </button>
                            </div>
                        </NoSSR>

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
    );
}
