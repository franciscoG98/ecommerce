import React, { useEffect, useState } from 'react'
import { getProducts } from "../services/fakeStoreApi"
import ProductCard from "../components/ProductCard"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CardProps {
  product: Product;
}

const index: React.FC<CardProps> = () => {

  // const [message, setMessage] = useState("Loading...")
  // const [people, setPeople] = useState([])

  const [products, setProducts] = useState(["Loading..."]);


  useEffect(() => {
    // fetch('http://localhost:8080/api/home').then(
    //   response => response.json()
    // ).then( data => {
    //   data && setMessage(data.message)
    //   data && setPeople(data.people)
    // })

    async function fetchAndSetProducts() {
      const products = await getProducts()
      console.log('fetch and set products', products);
      setProducts(products);
    }

    fetchAndSetProducts()
  }, [])

  

  return (
    <main className='flex justify-center items-center flex-col py-4'>
      <Navbar />
      <div>LGTM</div>
      <div className="container text-white bg-black mx-auto overflow-hidden my-12" style={{ width: '768px' }}>
        <div className='grid grid-cols-3 gap-3 p-3'>
          {
            products.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))
          }
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default index