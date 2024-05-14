import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import CartSection from './CartSection';

const Cart = () => {
  const {
    shopping: { cart },
  } = useContext(CartContext);

  const cartCards = cart.map((item) => {
    return <CartSection key={item.id} item={item} />;
  });

  return (
    <section className="grid grid-cols-4 m-2 p-3 gap-10">{cartCards}</section>
  );
};

export default Cart;
