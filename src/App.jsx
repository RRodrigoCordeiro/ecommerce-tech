"use client";
import useEmblaCarousel from "embla-carousel-react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import Header from './components/Header'
import Carrossel from './components/Carrossel'

import Depoimentos from './components/Depoimentos'
import { FiVideo } from "react-icons/fi";



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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }


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
      <div className="container mx-auto">
        <div className="relative"> 
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                   <article className="bg-green-500 text-white rounded-2xl p-6 space-y-2 h-full flex flex-col">
                      <div className=" flex items-start justify-between">
                        <div className="flex gap-3">
                          <h3 className="font-bold text-xl my-1">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                      <img
                        src={product.image}
                        alt={product.title}
                        width="100"
                        className="m-auto mix-blend-multiply"
                      >
                      </img>
                      <p className="text-gray-400 text-sm select-none">
                        {product.description}
                      </p>
                      <p className="text-gray-300 text-sm">
                        Preço: R$ {product.price}
                      </p>
                    </article>
                </div>
              ))}

            </div>

          </div>
          <button
              className="bg-white flex items-center rounded-full shadow-lg w-8 h-8 absolute left-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollPrev}
            >
              <FaCircleChevronLeft className="w-8 h-8 text-gray-600" />
            </button>

            <button
              className="bg-white flex items-center rounded-full shadow-lg w-8 h-8 absolute -right-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollNext}
            >
              <FaChevronCircleRight className="w-8 h-8 text-gray-600" />
            </button>

        </div>
        

      </div>
     
    </div>
  )
}

export default App



