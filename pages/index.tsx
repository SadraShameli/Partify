import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductPage from '../components/Product/ProductPage';
import { IProduct } from '../components/Product/ProductTypes';

const product: IProduct = {
    Id: 0,
    Name: 'Classic Utility Jacket',
    Price: '€110',
    Image: 'https://cdn.shopify.com/s/files/1/1479/8488/products/PERCIVAL_MENSWEAR_ECOM_UTILITY_KHAKI12.jpg',
    Details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees.',
    Description: 'The Basic Jacket made for daily use.',
    Categories: ['Men', 'Clothing'],
    Highlights: ['Hand cut and sewn locally', 'Dyed with out proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    StarCount: 4,
    ReviewCount: 170,
    InStock: true,
    Variants: [
        {
            Title: 'XS',
            InStock: false,
        },
        {
            Title: 'S',
            InStock: false,
        },
        {
            Title: 'M',
            InStock: false,
        },
        {
            Title: 'L',
            InStock: true,
        },
        {
            Title: 'XL',
            InStock: true,
        },
        {
            Title: '2XL',
            InStock: true,
        },
        {
            Title: '3XL',
            InStock: true,
        },
    ],
};

export default function Home() {
    return (
        <>
            <Navbar />
            <main className='container'>
                <ProductPage product={product} productRecommendations={[product, product, product, product]} />
            </main>
            <Footer />
        </>
    );
}
