import React, { useEffect, useState } from 'react'
import { getProductFromCategory } from "../services/fakeStoreApi"
import ProductCard from "../components/ProductCard"
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation'

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CardProps {
  product: Product;
}

type category = string 

const Jewlery: React.FC<CardProps> = () => {

  const [products, setProducts] = useState([]);

  const pathname = usePathname()

  useEffect(() => {

    const category: category = pathname.substring(1)
    console.log('category', category);

    async function fetchAndSetProducts() {
      try {
        const products = await getProductFromCategory({ category });
        console.log('fetch and set products', products);
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchAndSetProducts()
  }, [])

  return (
    <main className='flex justify-center items-center flex-col py-4'>
      <Navbar />
      <div>LGTM</div>
      <div className="container text-white bg-gray-900 mx-auto overflow-hidden" style={{ width: '768px' }}>
        <div className='grid grid-cols-3 gap-3 p-3'>
          {
            products.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Jewlery