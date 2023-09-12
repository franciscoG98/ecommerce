import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { createContext, useContext, useState } from 'react';
// import { CartContextType, Product } from "@/types";

// const CartContext = createContext(null);

const App = ({ Component, pageProps }: AppProps) => {

  // return (
  //   <CartContext.Provider value={{cart, quantity, total, addProduct, removeProduct}}>
  //     <Component {...pageProps} />
  //   </CartContext.Provider>
  // )

  return <Component {...pageProps} />
}

export default App;
