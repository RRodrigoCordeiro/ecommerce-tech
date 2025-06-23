import React from "react";
import Header from "../../components/Header"; 
import { FaPeopleGroup, FaLocationDot, FaBoxOpen } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import InfiniteScroll from "../../components/InfiniteScroll"; 
import useTextFilter from "../../hooks/filter/useTextFilter"; 

const About = () => {
  const { 
    filter,
    setFilter,
    filterText
  } = useTextFilter();

  let imgsCarrosel = [
    { srcImagem: "/images/customers/GoogleLogo.png", altImagem: "logo do Google" },
    { srcImagem: "/images/customers/ClaroLogo.png", altImagem: "logo da Claro" },
    { srcImagem: "/images/customers/NikeLogo.png", altImagem: "Logo da Nike" },
    { srcImagem: "/images/customers/AdidasLogo.png", altImagem: "Logo da Adidas" },
    { srcImagem: "/images/customers/CocaColalogo.png", altImagem: "Logo da Coca-Cola" },
    { srcImagem: "/images/customers/PumaLogo.png", altImagem: "Logo da Puma" },
    { srcImagem: "/images/customers/timLogo.png", altImagem: "Logo da TIM" },
  ];

  return (
    <div>
      <Header searchQuery={filter} setSearchQuery={setFilter} />
      {(filterText("Sobre a Tech Zone") ||
        filterText("Fundada em 2020")) && (
        <div className="max-w-80 space-y-8 flex flex-col justify-center m-auto md:max-w-2xl lg:max-w-3xl md:mt-28 text-justify">
          <h1 className="font-bold mb-8 text-2xl">
            Sobre a Tech Zone
          </h1>
          <p>
            Fundada em 2020, nossa loja surgiu com a missão de oferecer aos
            nossos clientes uma experiência única e de qualidade no mercado de
            eletrônicos.
          </p>
          <p>
            Aqui, você encontra uma vasta gama de produtos eletrônicos, desde
            smartphones, notebooks, acessórios, até gadgets exclusivos.
          </p>
          <p>
            Nosso compromisso é trazer as últimas novidades do mundo da
            tecnologia e garantir a satisfação total de quem confia em nosso
            trabalho.
          </p>
        </div>
      )}
      <div>
        <h1 className="font-bold text-lg md:text-1xl md:max-w-96 lg:text-3xl lg:max-w-3xl m-auto text-center mt-28 mb-18">
          Desde 2020, o maior E-commerce de tecnologia e Games da América Latina
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 space-y-8 md:space-x-4">
          {filterText("Colaboradores") && (
            <div className="flex flex-col items-center">
              <FaPeopleGroup size={58} className="text-green-600" />
              <p className="font-bold text-md">+1.000</p>
              <p>Colaboradores</p>
            </div>
          )}
          {filterText("Cidades Atendidas") && (
            <div className="flex flex-col items-center">
              <FaLocationDot size={58} className="text-green-600" />
              <p className="font-bold">+ 5.000</p>
              <p>Cidades Atendidas</p>
            </div>
          )}
          {filterText("Clientes") && (
            <div className="flex flex-col items-center">
              <IoPerson size={58} className="text-green-600" />
              <p className="font-bold">+ 8 milhões</p>
              <p>de Clientes</p>
            </div>
          )}
          {filterText("Pedidos") && (
            <div className="flex flex-col items-center">
              <FaBoxOpen size={58} className="text-green-600" />
              <p className="font-bold">+ 15 milhões</p>
              <p>de Pedidos</p>
            </div>
          )}
        </div>
      </div>
      {filterText("Nossos clientes") && (
        <div className="max-w-80 mt-28 space-y-8 flex flex-col justify-center m-auto md:max-w-2xl lg:max-w-3xl md:mt-28 text-justify">
          <h1 className="font-bold mb-8 text-2xl">
            Nossos clientes
          </h1>
        </div>
      )}
      {(filterText("Nossos clientes") ||
        filterText("Adidas") ||
        filterText("cocacola") ||
        filterText("puma") ||
        filterText("tim") ||
        filterText("google") ||
        filterText("claro") ||
        filterText("nike")) && (
        <InfiniteScroll
          className="mt-[35px]"
          imgs={imgsCarrosel}
          widthImg={350}
          heightMaxImg={100}
          paddingLR={100}
          duration={15}
          maskStart={10}
          maskEnd={90}
        />
      )}

     
    </div>
  );
};

export default About;
