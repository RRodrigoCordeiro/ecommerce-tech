import { useState } from "react";

const useTextFilter = () => {
 const [filter, setFilter] = useState('');

 const filterText = (text) =>
    text.toLowerCase().includes(filter.toLowerCase()
 );

  return {
    filter,
    setFilter,
    filterText,
   
  };
}
export default useTextFilter
