import { faker } from '@faker-js/faker';
import { createContext, useReducer, useState } from 'react';
import { cartReducer } from '../reducer/cartReducer';

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const product = [];

  for (let i = 0; i < 10; i++) {
    product.push({
      id: faker.database.mongodbObjectId(),
      productName: faker.commerce.productName(),
      Price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      imageUrl: faker.image.url(),
    });
  }

  const [shopping, dispatch] = useReducer(cartReducer, {
    product,
    cart: [],
  });
  return (
    <CartContext.Provider value={{ shopping, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
