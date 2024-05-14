import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartSection = ({ item }) => {
  const { dispatch } = useContext(CartContext);
  const [productCount, setProductCount] = useState(0);

  const { imageUrl, productName, Price } = item;

  const handleDecrementProductCount = () => {
    if (productCount !== 0) {
      setProductCount(productCount - 1);
    }
  };

  const handleDeleteCart = () => {
    return dispatch({
      type: 'delete',
      id: item.id,
    });
  };

  return (
    <div className=" rounded-lg shadow-xl p-3 border border-black ">
      <section>
        <img src={imageUrl} alt="" />
      </section>
      <section>
        <h2 className="font-bold text-xl">{productName}</h2>
        <p>$ {Price}</p>
      </section>
      <section className="flex justify-between">
        <button
          onClick={handleDeleteCart}
          className="bg-red-600 rounded-sm px-2 py-0.5"
        >
          Delete
        </button>

        {/* ---------Product Incerement/Decrement  */}
        <p className=" bg-[#ecfccb] px-3  shadow-md">
          <button
            onClick={() => setProductCount(productCount + 1)}
            className=" text-[#4d7c0f] text-lg shadow-md px-2 bg-[#e5e5e5] m-1 font-bold "
          >
            +
          </button>
          <span className=" text-[#4d7c0f] text-2xl m-1 font-bold">
            {productCount}
          </span>
          <button
            onClick={handleDecrementProductCount}
            className=" text-[#dc2626] text-lg shadow-md px-2 bg-[#e5e5e5] m-1 font-bold "
          >
            -
          </button>
        </p>
        {/* ---------Product Incerement/Decrement  END */}
      </section>
    </div>
  );
};

export default CartSection;
