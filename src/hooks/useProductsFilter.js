
import { useState } from "react";
import productsData from "../data/products.json";  

const useProductsFilter = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
   };
   const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  const filteredNotebook = notebooks.filter((notebook) =>
    notebook.title.toLowerCase().includes(searchTerm)
  );
  
  return {
    searchTerm,
    setSearchTerm,
    filteredProducts,
    filteredNotebook
  };
};

export default useProductsFilter;
