import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const ProductDetails = ({ product }) => {
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
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.name}
              </h1>

              <p className="leading-relaxed">{product?.description}</p>

              <div className="flex mt-20">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {product?.price}
                </span>
                <button
                  onClick={addToBasket}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
