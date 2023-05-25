import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item?.id));
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateCart({ id: item.id, quantity: newQuantity }));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateCart({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="card-item bg-white shadow-md rounded-md p-4 flex">
      <img
        src={item.image}
        alt={item.title}
        className="card-item-image w-24 h-24 object-cover"
      />
      <div className="card-item-details ml-4 flex-grow">
        <h3 className="card-item-title text-lg font-semibold">{item.name}</h3>
        <p className="card-item-price">${item.price}</p>

        <div className="card-item-quantity flex items-center mt-2">
          <p className="card-item-quantity mr-5">Quantity: </p>
          <button
            className="quantity-button bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded-full mr-2"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="quantity-button bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded-full ml-2"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="card-item-remove h-10 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        onClick={handleRemoveFromCart}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
