"use client";

import useEmblaCarousel from "embla-carousel-react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import React from "react";
import banner01 from "/images/banner01.png";



const Depoimentos = () => {
    const testimonials = [
      {
        content:
          "Comprei um notebook gamer na loja e fiquei impressionado com a qualidade do atendimento! O suporte foi super atencioso, tirou todas as minhas dúvidas e me ajudou a escolher o melhor modelo para minhas necessidades. A entrega foi rápida e o produto veio muito bem embalado. Estou muito satisfeito com a compra e com certeza voltarei a comprar aqui!",
        author: "Lucas Almeida",
        image: banner01,
      },
      {
        content:
            "Tive uma experiência incrível comprando meu novo smartphone! A equipe foi extremamente prestativa e me ajudou a escolher o modelo ideal dentro do meu orçamento. A entrega foi feita antes do prazo e o celular chegou em perfeito estado. Recomendo demais essa loja, pois prezam pela qualidade e pelo bom atendimento!",
        author: "Mariana Souza",
        image: banner01,
      },
      {
        content:
            "Adquiri um monitor ultrawide para o meu home office e estou encantado! Além da excelente qualidade do produto, a loja me proporcionou um atendimento impecável, com informações detalhadas sobre as especificações e a garantia. A entrega foi super rápida e sem nenhum problema. Certamente voltarei a comprar!",
        author: "Ricardo Oliveira",
        image: banner01,
      },
      {
        content:
            "Finalmente encontrei uma loja confiável para comprar meus eletrônicos! Comprei uma smart TV e fiquei impressionada com a qualidade do atendimento. O site é fácil de navegar, os preços são justos e a entrega foi muito rápida. Sem dúvidas, essa foi a melhor experiência de compra que já tive!",
        author: "Ana Beatriz Lima",
        image: banner01,
      },
      {
        content:
            "Comprei um fone de ouvido Bluetooth e fiquei surpreso com a eficiência da loja! O atendimento foi ágil e atencioso, e o produto chegou bem antes do prazo. A qualidade do fone é excepcional, e o preço foi muito justo. Com certeza farei novas compras aqui!",
        author: "Eduardo Martins",
        image: banner01,
      },

    ]

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    
    
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <div className="bg-green-600 mt-8 mb-8">
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-white rounded-md m-auto text-center font-bold mb-12">Depoimentos dos nossos clientes</h1>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 px-3"
                  >
                    <article className="bg-white  rounded-2xl p-6 space-y-4 h-full flex flex-col ">
                      <div className="flex flex-col items-center text-center space-y-4    ">
                        <div className="relative w-24 h-24 overflow-hidden rounded-full"> 
                          <img
                            src={item.image}
                            alt={item.author}
                          
                            className="w-full h-full object-cover"
                
                          />
                        </div>
                        <div>
                          <p className="text-black  ">{item.content}</p>
                          <p className="text-sm text-green-600 font-bold mt-8">{item.author}</p>
                          
                        </div>

                      </div>
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
      </section>
    </div>
  );
};

export default Depoimentos;
