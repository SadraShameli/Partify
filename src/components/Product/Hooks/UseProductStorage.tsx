/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { type IProduct } from '../ProductTypes';

export default function UseProductStorage(key: string, product?: IProduct) {
    const [products, setProducts] = useState(() => {
        if (typeof localStorage === 'undefined') return [];

        const productsJson = localStorage.getItem(key);

        if (productsJson) {
            return JSON.parse(productsJson) as IProduct[];
        }

        return [];
    });

    function addProduct(product: IProduct) {
        if (products.length) {
            if (products.some((savedProduct) => savedProduct.id !== product.id)) {
                setProducts((oldProducts) => [...oldProducts, product]);
            }
        } else {
            setProducts([product]);
        }
    }

    function removeProduct(product: IProduct) {
        if (products.length) {
            if (products.some((savedProduct) => savedProduct.id === product.id)) {
                const removedProducts = products.filter((savedProduct) => savedProduct.id !== product.id);

                if (removedProducts.length) {
                    setProducts(removedProducts);
                } else {
                    localStorage.removeItem(key);
                    setProducts([]);
                }
            }
        } else {
            setProducts([]);
        }
    }

    useEffect(() => {
        if (products.length) {
            localStorage.setItem(key, JSON.stringify(products));
        }
    }, [products]);

    return [products.some((savedProduct) => savedProduct?.id === product?.id), addProduct, removeProduct, products] as const;
}
