import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/CategorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleCategoryChange = (_category) => {
    if (selectedCategories.includes(_category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== _category)
      );
      setCategory(selectedCategories.filter((cat) => cat !== _category));
    } else {
      setSelectedCategories([...selectedCategories, _category]);
      setCategory([...selectedCategories, _category]);
    }
  };

  const handleSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="px-20 mt-4">
      <div className="text-gray-500 text-sm mb-1"> Brands </div>
      <div
        id="dropdownSearch"
        className="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700"
      >
        <div className="p-3">
          <label htmlFor="input-group-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-search"
              value={searchKeyword}
              onChange={handleSearchKeyword}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </div>
        <ul
          className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownSearchButton"
        >
          {filteredCategories?.map((category, i) => (
            <li key={i}>
              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  id={category}
                  type="checkbox"
                  onChange={() => handleCategoryChange(category)}
                  value={category}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={category}
                  className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  {category}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
