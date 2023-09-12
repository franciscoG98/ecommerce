import React, { useEffect, useState } from 'react'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Product } from '@/types';

interface Props {
  products: Product[];
  cartCount: number;
  handleAddProduct: (product: Product) => void;
  handleRemoveProduct: (productId: number) => void;
}

const Cart: React.FC<Props> = ({cartCount}) => {

  return (
    <>
      {/* <Navbar cartCount={cart.length} /> */}
      <Navbar />
      <table className="container text-white bg-black mx-auto overflow-hidden my-12" style={{ width: '768px' }}>

        <thead className='text-left'>
          <tr>
            <th className='border border-white p-4'>Product Name</th>
            <th className='border border-white p-4'>Quantity</th>
            <th className='border border-white p-4'>Price</th>
            <th className='border border-white p-4'>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='border border-white p-3'>coca cola</td>
            <td className='border border-white p-3'>2</td>
            <td className='border border-white p-3'>300</td>
            <td className='border border-white p-3'>600</td>
          </tr>

          <tr>
            <td className='border border-white p-3'>fernet</td>
            <td className='border border-white p-3'>1</td>
            <td className='border border-white p-3'>2000</td>
            <td className='border border-white p-3'>2000</td>
          </tr>

          <tr>
            <td className='border border-white p-3'>mani</td>
            <td className='border border-white p-3'>1</td>
            <td className='border border-white p-3'>150</td>
            <td className='border border-white p-3'>150</td>
          </tr>
        </tbody>

      </table>
      <Footer />
    </>
  )
}

export default Cart