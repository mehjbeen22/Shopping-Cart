import React from 'react';
import Header from './shopping/Header';
import Products from './shopping/Products';
import CartContextProvider from './context/CartContext';

const App = () => {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Products />
      </CartContextProvider>
    </>
  );
};

export default App;
