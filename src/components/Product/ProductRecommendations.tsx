import ProductCard from './ProductCard';
import { type IProduct } from './ProductTypes';

export default function ProductRecommendations({ products }: { products: IProduct[] }) {
    return (
        <div>
            <h2>Customers also purchased</h2>
            <div className='flex flex-wrap gap-5'>
                {products.map((value, index) => (
                    <ProductCard key={index} {...value} />
                ))}
            </div>
        </div>
    );
}
