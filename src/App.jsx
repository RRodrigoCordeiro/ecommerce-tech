"use client";
import useEmblaCarousel from "embla-carousel-react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import React from 'react'
import { useEffect, useState } from "react"
import { FaTruck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
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
    <div className="" >
      <Header/>
      <Carrossel/>

      <div className="container mx-auto bg-[#F2F2F2] mt-28">
        <div className="relative"> 
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] px-3"
                >
                   <article className="bg-white text-white rounded-2xl p-6 space-y-2 h-full flex flex-col w-full ">
                      <div className=" flex items-start justify-between">
                        <div className="flex gap-3">
                          <h3 className="text-black font-bold text-xl mb-8">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                      <img
                        src={product.image}
                        alt={product.title}
                        width="100"
                        className="m-auto mb-16"
                      >
                      </img>
                      <div className="bg-green-600 flex items-center gap-2 w-32 p-0.5 mb-5 rounded-md ">
                        <FaTruck 
                          className="ml-2"
                        />
                        <p>
                          Frete Grátis
                        </p>

                      </div>

                      <p className="text-gray-800 text-sm mb-4">
                        {product.description}
                      </p>
                      <p className="text-green-600 font-bold text-lg ">
                        R$ {product.price}
                      </p>
                      <p className="text-gray-400 text-sm -mt-2">
                        À vista no PIX
                      </p>
                     
                      <button className="bg-green-600 rounded-md h-10 font-bold flex items-center justify-center gap-3"> 
                        <FaShoppingCart />
                        COMPRAR
                      </button>                   
                    </article>
                </div>
              ))}

            </div>

          </div>
          <button
              className="bg-white flex items-center rounded-full shadow-lg w-8 h-8 absolute left-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
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



