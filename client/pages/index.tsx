import React, { useEffect, useState } from 'react'

import { getProducts, getProduct } from "../services/fakeStoreApi"

import ProductCard from "../components/ProductCard"

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Product } from '@/types';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

// interface CardProps {
//   product: Product;
// }

interface Props {
  products: Product[];
  cartCount: number;
  handleAddProduct: (product: Product) => void;
  handleRemoveProduct: (productId: number) => void;
}

// const index: React.FC<CardProps> = () => {
const index: React.FC<Props> = () => {

  // const [message, setMessage] = useState("Loading...")
  // const [people, setPeople] = useState([])

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState<Product[]>([]);

  const handleRemoveProduct = (productId: number) => {
    if (cart.length > 0) {
      let aux = cart.filter(p => p.id !== productId)
      setCart(aux)
    }
    console.log('cart', cart);
  }

  const handleAddProduct = (product: Product) => {

    let aux = cart
    aux.push(product)

    setCart(aux)

    console.log('cart', cart);
  }

  useEffect(() => {
    // fetch('http://localhost:8080/api/home').then(
    //   response => response.json()
    // ).then( data => {
    //   data && setMessage(data.message)
    //   data && setPeople(data.people)
    // })

    async function fetchAndSetProducts() {
      const products = await getProducts()
      // console.log('fetch and set products', products);
      setProducts(products);
    }

    fetchAndSetProducts()
  }, [cart])

  return (
    <main className='flex justify-center items-center flex-col '>
      {/* <Navbar cartCount={cart.length} /> */}
      <Navbar />
      <div>LGTM</div>
      <div className="container text-white bg-black mx-auto overflow-hidden mt-12 mb-20" style={{ width: '768px' }}>
        <div className='grid grid-cols-3 gap-3 p-3'>
          {
            products.map((product, idx) => (
              <ProductCard handleRemoveProduct={handleRemoveProduct} handleAddProduct={handleAddProduct} cartCount={cart.length} key={idx} product={product} />
            ))
          }
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default index