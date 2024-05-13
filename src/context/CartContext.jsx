import { faker } from '@faker-js/faker';
import { createContext, useState } from 'react';

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

  const [shopping, setShopping] = useState({
    product,
    cart: [],
  });
  return (
    <CartContext.Provider value={{ shopping, setShopping }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
