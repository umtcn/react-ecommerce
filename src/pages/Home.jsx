import React, { useState } from "react";
import Sorting from "../components/home/Sorting";
import Products from "../components/home/Products";
import Category from "../components/home/Category";
import Models from "../components/home/Models";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [model, setModel] = useState([]);
  const [selectedModel, setSelectedModel] = useState([]);

  return (
    <div className="md:flex lg:flex xl:flex">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-h-screen">
        <Sorting setSort={setSort} />
        <Category setCategory={setCategory} />
        <Models model={model} setSelectedModel={setSelectedModel} />
      </div>
      <div className="w-full md:w-2/2 lg:w-2/3 xl:w-3/4">
        <Products
          sort={sort}
          category={category}
          setModel={setModel}
          selectedModel={selectedModel}
        />
      </div>
    </div>
  );
};

export default Home;
