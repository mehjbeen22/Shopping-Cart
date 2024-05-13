import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Card = ({ cardData }) => {
  const { shopping, setShopping } = useContext(CartContext);
  const { productName, Price, description, imageUrl } = cardData;
  const addToCart = () => {
    setShopping({
      ...shopping,
      cart: [...shopping.cart, cardData],
    });
  };
  return (
    <div className=" rounded-lg shadow-xl p-3">
      <section>
        <img src={imageUrl} alt="" />
      </section>

      <section>
        <h3 className="font-bold text-xl">{productName}</h3>
        <p>{description}</p>
        <p>$ {Price} </p>
        <button onClick={addToCart} className="bg-blue-600 p-2 rounded-md">
          Add to Cart
        </button>
      </section>
    </div>
  );
};

export default Card;
