import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import ProductDetail from "@/components/ProductDetail"
import { getProduct } from "@/services/fakeStoreApi"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

type Props = {
    id: string;
    title: string;
    price: number;
    image: string;
    getProduct: (id:string) => void;
    category: string;
    description: string;
    rating: object;
}

const ProductDetailPage: React.FC<Props> = () => {
    const [product, setProduct] = useState<any[]>([])

    const router = useRouter()
    
    useEffect(() => {

        async function fetchProduct() {
            try {
                const {id} = router.query
                if (typeof id === 'string' && id !== undefined) {
                    const productData = await getProduct(id)
                    setProduct(productData);
                }

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
    
        fetchProduct()
    }, [router.query])

    return (
        <>
            <main>
                <Navbar />
                {product ? (
                    <ProductDetail
                        category={product.category}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}
                        title={product.title}
                    />
                ) : (
                    <p>Loading...</p>
                )}

                <Footer />
            </main>
        </>
  );
};

export default ProductDetailPage;
