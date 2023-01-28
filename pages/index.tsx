import NavigationBar from '../components/home/NavigationBar';
import Footer from '../components/home/Footer/Footer';
import { IProduct } from '../components/Product/ProductTypes';
import ProductOverView2 from '../components/Product/ProductOverView2';
import ProductOverView from '../components/Product/ProductOverView';

const product: IProduct = {
    Id: 0,
    Name: 'Classic Utility Jacket',
    Price: '€110',
    MainImage: 'https://cdn.shopify.com/s/files/1/1479/8488/products/PERCIVAL_MENSWEAR_ECOM_UTILITY_KHAKI12.jpg',
    OtherImages: [
        'https://cdn.shopify.com/s/files/1/1479/8488/products/PERCIVAL_MENSWEAR_ECOM_UTILITY_KHAKI12.jpg',
        'https://cdn.shopify.com/s/files/1/1479/8488/products/PERCIVAL_MENSWEAR_ECOM_UTILITY_KHAKI12.jpg',
        'https://cdn.shopify.com/s/files/1/1479/8488/products/PERCIVAL_MENSWEAR_ECOM_UTILITY_KHAKI12.jpg',
        'https://cdn.shopify.com/s/files/1/1479/8488/products/PERCIVAL_MENSWEAR_ECOM_UTILITY_KHAKI12.jpg',
    ],
    Details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    Description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    Categories: ['Men', 'Clothing'],
    Highlights: ['Hand cut and sewn locally', 'Dyed with out proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    StarCount: 4,
    ReviewCount: 170,
    InStock: true,
    Variants: [
        {
            Name: 'XS',
            Color: 'Black',
            InStock: false,
        },
        {
            Name: 'S',
            Color: 'Black',
            InStock: false,
        },
        {
            Name: 'M',
            Color: 'Black',
            InStock: false,
        },
        {
            Name: 'L',
            Color: 'Black',
            InStock: true,
        },
        {
            Name: 'XL',
            Color: 'Black',
            InStock: true,
        },
        {
            Name: '2XL',
            Color: 'Black',
            InStock: true,
        },
        {
            Name: '3XL',
            Color: 'Black',
            InStock: true,
        },
    ],
};

export default function Home() {
    return (
        <>
            <NavigationBar />
            <main className='container'>
                <ProductOverView product={product} productRecommendations={[product, product, product, product]} />
                <ProductOverView2 product={product} productRecommendations={[product, product, product, product]} />
            </main>
            <Footer />
        </>
    );
}
