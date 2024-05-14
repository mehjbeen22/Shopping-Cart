import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Header({isCart , setIsCart}) {
  const {
    shopping: { cart },
  } = useContext(CartContext);
  return (
    <div className="bg-black text-white	p-3">
      <nav className="flex justify-between">
        <h1>Shopping Cart</h1>
        <button onClick={() => setIsCart(!isCart)}>Cart ({cart.length})</button>
      </nav>
    </div>
  );
}

export default Header;
