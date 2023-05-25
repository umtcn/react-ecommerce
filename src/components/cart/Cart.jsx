import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeDrawer } from "../../redux/DrawerSlice";
import CartItem from "./CartItem";
import { getCartTotal } from "../../redux/CartSlice";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  const { carts, totalAmount } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleCloseModal = () => {
    dispatch(closeDrawer());
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-full border fixed top-0 right-0 z-50 bg-white">
      <div className="cart-content h-600">
        <div className="flex text-center justify-between p-10 shadow-lg">
          <h2 className="text-xl font-bold">My Cart</h2>
          <AiOutlineClose size={35} onClick={handleCloseModal} />
        </div>
        <div className="p-4 max-h-[32rem] overflow-y-scroll">
          {carts.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="cart-items grid gap-4">
              {carts.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        <div className="shadow-lg m-5">
          <div className="flex text-center justify-center mt-10">
            <div className="text-2xl mx-3">Total Amount:</div>
            <div className="text-2xl font-bold mx-3">{totalAmount} $</div>
          </div>
          <div className="flex justify-center text-center">
            <button className="checkout h-10 w-2/3 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
