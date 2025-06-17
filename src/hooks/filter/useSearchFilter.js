import { useState } from "react";
import { useComputer } from "../computer/useComputer";
import { useNotebook } from "../notebook/useNotebook";

const useFilterProductTitle = () => {
  const {data:computers } = useComputer();
  const {data: notebooks} = useNotebook();
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNotebook = notebooks?.filter((notebook) =>
    notebook.title?.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const filterComputador = computers?.filter((computador) =>
    computador.title?.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return{
    searchTerm,
    setSearchTerm,
    filterComputador,
    filteredNotebook 

  }

}
export default useFilterProductTitle