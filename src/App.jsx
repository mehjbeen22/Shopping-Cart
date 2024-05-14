import React, { useState } from 'react';
import Header from './shopping/Header';
import Products from './shopping/Products';
import CartContextProvider from './context/CartContext';

import Cart from './shopping/Cart';
const App = () => {
  const [isCart, setIsCart] = useState(false);
  return (
    <>
      <CartContextProvider>
        <Header setIsCart={setIsCart} isCart={isCart} />
        {isCart ? <Cart /> : <Products />}
      </CartContextProvider>
    </>
  );
};

export default App;
