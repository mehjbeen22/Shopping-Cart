import { useContext } from 'react';
import Card from './Card';
import { CartContext } from '../context/CartContext';

const Products = () => {
  const {
    shopping: { product },
  } = useContext(CartContext);

  const card = product.map((product) => (
    <Card key={product.id} cardData={product} />
  ));
  return <section className="grid grid-cols-4 m-2 p-3 gap-10">{card}</section>;
};

export default Products;
