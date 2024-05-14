import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ cardData }) => {
  const {
    shopping: { cart },
    dispatch,
  } = useContext(CartContext);
  const { productName, Price, description, imageUrl } = cardData;

  const addToCart = () => {
    if (cart.includes(cardData)) {
      return toast.error('This Item is Already added in Cart');
    }
    dispatch({
      type: 'add',
      product: cardData,
    });
  };

  return (
    <div className=" rounded-lg shadow-xl p-3">
      <ToastContainer />
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
