import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductSlice";
import Product from "./Product";
import Loading from "../Loading";
import ReactPaginate from "react-paginate";

const Products = ({ sort, category, setModel, selectedModel }) => {
  const dispatch = useDispatch();
  const { products, productStatus } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [itemOffset, setItemOffset] = useState(0);
  const [mostFilteredProducts, setMostFilteredProducts] = useState(products);
  const { search } = useSelector((state) => state.search);

  const itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = mostFilteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(mostFilteredProducts.length / itemsPerPage);

  const filteredSearchKeyProducts = currentItems.filter((prd) =>
    prd.name.toLowerCase().includes(search.toLowerCase())
  );

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % mostFilteredProducts.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const filtered =
      category.length === 0
        ? products
        : products.filter((product) => {
            return category.includes(product.brand);
          });

    const models = [];

    filtered.forEach((product) => {
      if (!models.includes(product.model)) {
        models.push(product.model);
      }
    });

    setModel(models);

    setFilteredProducts(filtered);
  }, [category, products, setModel]);

  useEffect(() => {
    const newModelFiltered =
      selectedModel.length === 0
        ? filteredProducts
        : filteredProducts.filter((_product) => {
            return selectedModel.includes(_product.model);
          });

    setMostFilteredProducts(newModelFiltered);
  }, [selectedModel, filteredProducts]);

  return (
    <div className="mt-4">
      {productStatus === "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap">
            {filteredSearchKeyProducts
              ?.sort((a, b) =>
                sort === "old-to-new"
                  ? Date.parse(a.createdAt) - Date.parse(b.createdAt)
                  : sort === "new-to-old"
                  ? Date.parse(b.createdAt) - Date.parse(a.createdAt)
                  : sort === "low-to-high"
                  ? a.price - b.price
                  : sort === "high-to-low"
                  ? b.price - a.price
                  : null
              )
              .map((product, index) => (
                <Product key={index} product={product} />
              ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            activeClassName="font-bold"
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
