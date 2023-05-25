import React, { useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/CartSlice";
import { useLocation } from "react-router-dom";
import { openDrawer } from "../redux/DrawerSlice";
import { searchKey } from "../redux/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { totalAmount } = useSelector((state) => state.carts);
  const location = useLocation();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleOpenCart = () => {
    dispatch(openDrawer());
  };

  const handleSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, totalAmount, location]);

  useEffect(() => {
    dispatch(searchKey(searchKeyword));
  }, [dispatch, searchKeyword]);

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <span className="ml-3 text-2xl font-bold">Eteration</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <div className="relative md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
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
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              value={searchKeyword}
              onChange={handleSearchKeyword}
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </nav>

        <div className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <BsBasket2Fill className="cursor-pointer" onClick={handleOpenCart} />
          <span className="mr-5 hover:text-gray-900 mx-2">{totalAmount} $</span>

          <CgProfile />
          <span className="mr-5 hover:text-gray-900 mx-2">Kerem</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
