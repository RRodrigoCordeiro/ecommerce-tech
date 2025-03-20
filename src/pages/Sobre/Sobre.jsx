import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaPeopleGroup, FaLocationDot, FaBoxOpen } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import InfiniteScroll from "../../components/InfiniteScroll";
import useElement from "../../hooks/useElement";

const Sobre = () => {
  // const [filtro, setFiltro] = useState('');

  const { filtro, setFiltro, filtrarTexto } = useElement();

  let imgsCarrosel = [
    { srcImagem: "/images/GoogleLogo.png", altImagem: "logo do Google" },
    { srcImagem: "/images/ClaroLogo.png", altImagem: "logo da Claro" },
    { srcImagem: "/images/NikeLogo.png", altImagem: "Logo da Nike" },
    { srcImagem: "/images/AdidasLogo.png", altImagem: "Logo da Adidas" },
    { srcImagem: "/images/CocaColalogo.png", altImagem: "Logo da Coca-Cola" },
    { srcImagem: "/images/PumaLogo.png", altImagem: "Logo da Puma" },
    { srcImagem: "/images/timLogo.png", altImagem: "Logo da TIM" },
  ];

  return (
    <div>
      <Header searchQuery={filtro} setSearchQuery={setFiltro} />
      {(filtrarTexto("Sobre a Tech Zone") ||
        filtrarTexto("Fundada em 2020")) && (
        <div className="max-w-80 space-y-8 flex flex-col justify-center m-auto md:max-w-2xl lg:max-w-3xl md:mt-28 text-justify">
          <h1 className="text-green-600 font-bold mb-8 text-2xl">
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
          {filtrarTexto("Colaboradores") && (
            <div className="flex flex-col items-center">
              <FaPeopleGroup size={58} className="text-green-600" />
              <p className="font-bold text-md">+1.000</p>
              <p>Colaboradores</p>
            </div>
          )}
          {filtrarTexto("Cidades Atendidas") && (
            <div className="flex flex-col items-center">
              <FaLocationDot size={58} className="text-green-600" />
              <p className="font-bold">+ 5.000</p>
              <p>Cidades Atendidas</p>
            </div>
          )}
          {filtrarTexto("Clientes") && (
            <div className="flex flex-col items-center">
              <IoPerson size={58} className="text-green-600" />
              <p className="font-bold">+ 8 milhões</p>
              <p>de Clientes</p>
            </div>
          )}
          {filtrarTexto("Pedidos") && (
            <div className="flex flex-col items-center">
              <FaBoxOpen size={58} className="text-green-600" />
              <p className="font-bold">+ 15 milhões</p>
              <p>de Pedidos</p>
            </div>
          )}
        </div>
      </div>
      {filtrarTexto("Nossos clientes") && (
        <div className="max-w-80 mt-28 space-y-8 flex flex-col justify-center m-auto md:max-w-2xl lg:max-w-3xl md:mt-28 text-justify">
          <h1 className="text-green-600 font-bold mb-8 text-2xl">
            Nossos clientes
          </h1>
        </div>
      )}
      {(filtrarTexto("Nossos clientes") ||
        filtrarTexto("Adidas") ||
        filtrarTexto("cocacola") ||
        filtrarTexto("puma") ||
        filtrarTexto("tim") ||
        filtrarTexto("google") ||
        filtrarTexto("claro") ||
        filtrarTexto("nike")) && (
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

      <Footer />
    </div>
  );
};

export default Sobre;
