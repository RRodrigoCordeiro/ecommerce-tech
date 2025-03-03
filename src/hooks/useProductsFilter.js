import { useState } from "react";

const useProductsFilter = (products, notebooks, computador) => {
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

  const filterComputador = computador.filter((computador) =>
    computador.title.toLowerCase().includes(searchTerm)
  );

  return {
    filteredProducts,
    filteredNotebook,
    filterComputador,
    searchTerm,
    setSearchTerm,
    handleSearch, 
  };
};

export default useProductsFilter;