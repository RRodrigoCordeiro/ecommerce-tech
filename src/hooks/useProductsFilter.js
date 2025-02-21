
import { useState } from "react";
import productsData from "../data/products.json";  

const useProductsFilter = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getFilteredProducts = () => {
    let filteredProducts = productsData.products;

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
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

export default useProductsFilter;
