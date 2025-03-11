




import { useState } from "react";

const useElement = () => {
 const [filtro, setFiltro] = useState('');

 
 const filtrarTexto = (texto) =>
    texto.toLowerCase().includes(filtro.toLowerCase()
 );

  return {
    filtro,
    setFiltro,
    filtrarTexto,
   
  };
}

export default useElement
