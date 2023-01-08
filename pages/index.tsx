import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductQuickView from '../components/Product/QuickView'
import { IProduct } from '../types/Product'

const product: IProduct = {
  Name: 'Classic Utility Jacket',
  Image: 'https://cdn.shopify.com/s/files/1/1479/8488/products/PERCIVAL_MENSWEAR_ECOM_UTILITY_KHAKI12.jpg',
  Price: '€110',
  InStock: true,
  Variants: [
    {
      Title: 'S',
      InStock: true
    },
    {
      Title: 'M',
      InStock: false
    },
    {
      Title: 'L',
      InStock: true
    },
    {
      Title: 'XL',
      InStock: false
    }
  ]
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='container'>
        <ProductQuickView {...product} />
      </main>
      <Footer />
    </>
  );
}
