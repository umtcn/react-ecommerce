import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="px-20 mt-4">
      <div className="text-gray-500 text-sm mb-1"> Sort By </div>
      <div className="shadow-lg" style={{ flexDirection: "column" }}>
        <div className="flex items-center mb-3 px-4">
          <input
            id="list-radio-old-to-new"
            onChange={(e) => {
              setSort(e.target.value);
            }}
            type="radio"
            value="old-to-new"
            name="list-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            htmlFor="list-radio-old-to-new"
            className="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Old to new{" "}
          </label>
        </div>
        <div className="flex items-center mb-3 px-4">
          <input
            id="list-radio-new-to-old"
            onChange={(e) => {
              setSort(e.target.value);
            }}
            type="radio"
            value="new-to-old"
            name="list-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            htmlFor="list-radio-new-to-old"
            className="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            New to old
          </label>
        </div>
        <div className="flex items-center mb-3 px-4">
          <input
            id="list-radio-high-to-low"
            onChange={(e) => {
              setSort(e.target.value);
            }}
            type="radio"
            value="high-to-low"
            name="list-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            htmlFor="list-radio-high-to-low"
            className="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Price high to low
          </label>
        </div>
        <div className="flex items-center mb-4 px-4">
          <input
            id="list-radio-low-to-high"
            onChange={(e) => {
              setSort(e.target.value);
            }}
            type="radio"
            value="low-to-high"
            name="list-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            htmlFor="list-radio-low-to-high"
            className="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Price low to high
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
