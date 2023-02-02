import dynamic from 'next/dynamic';

import Hero from '../components/Home/Hero';
import { IProduct } from '../components/Product/ProductTypes';
// import ProductOverView from '../components/Product/ProductOverView';
// import ProductOverView2 from '../components/Product/ProductOverView2';

const ProductOverView = dynamic(() => import('../components/Product/ProductOverView'), { ssr: false });
const ProductOverView2 = dynamic(() => import('../components/Product/ProductOverView2'), { ssr: false });

const product: IProduct = {
    id: 0,
    title: 'Classic Utility Jacket',
    price: 110,
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    categories: ['Men', 'Clothing'],
    highlights: ['Hand cut and sewn locally', 'Dyed with out proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    starCount: 4,
    reviewCount: 170,
    currency: '$',
    inStock: true,
    variants: [
        {
            id: 0,
            title: 'XS',
            price: 110,
            images: [
                'https://cdn.shopify.com/s/files/1/1479/8488/products/PERCIVAL_MENSWEAR_ECOM_UTILITY_KHAKI12.jpg',
                'https://cdn.shopify.com/s/files/1/1479/8488/products/PERCIVAL_MENSWEAR_ECOM_UTILITY_KHAKI12.jpg',
                'https://cdn.shopify.com/s/files/1/1479/8488/products/PERCIVAL_MENSWEAR_ECOM_UTILITY_KHAKI12.jpg',
            ],
            color: 'Black',
            inStock: true,
            currency: '$',
        },
        {
            id: 0,
            title: 'S',
            price: 110,
            images: [],
            color: 'Black',
            inStock: false,
            currency: '$',
        },
        {
            id: 0,
            title: 'M',
            price: 110,
            images: [],
            color: 'Black',
            inStock: true,
            currency: '$',
        },
        {
            id: 0,
            title: 'L',
            price: 110,
            images: [],
            color: 'Black',
            inStock: true,
            currency: '$',
        },
    ],
};

export default function Home() {
    return (
        <main>
            <Hero />
            <div className='container relative'>
                <ProductOverView product={product} productRecommendations={[product, product, product, product]} />
                <ProductOverView2 product={product} productRecommendations={[product, product, product, product]} />
            </div>
        </main>
    );
}
