import { useState } from "react";
import { useComputer } from "../computer/useComputer";
import { useNotebook } from "../notebook/useNotebook";

const useFilterProductTitle = () => {
  const [products, setProducts] = useState([]);
  const {data:computers } = useComputer();
  const {data: notebooks} = useNotebook();
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNotebook = notebooks?.filter((notebook) =>
    notebook.title?.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const filterComputador = computers?.filter((computador) =>
    computador.title?.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return{
    searchTerm,
    setSearchTerm,
    filterComputador,
    filteredNotebook,
    filteredProducts 

  }

}
export default useFilterProductTitle