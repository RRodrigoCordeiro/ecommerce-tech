
import { useState } from "react";
import productsData from "../../../public/data/storeData.json"

const useLaunchFilter = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getFilteredProducts = () => {
    let filteredProducts = productsData.products;

    if (filter === "launch") {
      filteredProducts = filteredProducts.filter((product) => product.launch);
    } else if (filter === "promotion") {
      filteredProducts = filteredProducts.filter((product) => product.promotion);
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredProducts;
  };

  return {
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    getFilteredProducts,
  };
};

export default useLaunchFilter;
