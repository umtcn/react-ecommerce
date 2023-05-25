import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/CartSlice";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(
      addToCart({
        id: product?.id,
        price: product?.price,
        name: product?.name,
        image: product?.image,
        quantity: 1,
      })
    );
  };
  return (
    <div className="p-2 m-2">
      <a
        className="block relative h-48 rounded overflow-hidden cursor-pointer"
        onClick={() => navigate(`detail/${product?.id}`)}
      >
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block m-auto"
          src={product?.image}
        />
      </a>
      <div className="mt-4">
        <p className="mt-1 font-bold">{product?.price}</p>
        <h3 className="text-gray-900 title-font text-lg font-bold">
          {product?.name}
        </h3>
        <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {product?.model}
        </h2>
        <button
          onClick={addToBasket}
          className="bg-gray-500 w-full rounded-md text-white p-1"
        >
          {" "}
          ADD TO CART{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
