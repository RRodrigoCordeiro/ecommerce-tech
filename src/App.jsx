import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import Header from './components/Header'
import Carrossel from './components/Carrossel'

import Depoimentos from './components/Depoimentos'




const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  },[])

  if(loading) return <p>Carregando...</p>
  if (error) return <p>Ocorreu um erro: {error.message}</p>


  return (
    <div>
      <Header/>
      <Carrossel/>
    
      <div>
        <ul className=''>
          {products.map((product)=> (
            <li
              key={product.id}
            >
              <h2>{product.title}</h2>
              <img
                src={product.image}
                alt={product.title}
                width="100"
              >
              </img>
              <p>{product.descriptoon}</p>
              <p>Preço: R$ {product.price}</p>
            </li>
          ))}
          <li>

          </li>
        </ul>
      </div>
      <Depoimentos/>
     
    </div>
  )
}

export default App



