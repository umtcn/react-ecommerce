import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/ProductSlice";
import ProductDetails from "../components/productDetail/ProductDetails";
import Loading from "../components/Loading";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <ProductDetails product={productDetail} />
      )}
    </div>
  );
};

export default Details;
