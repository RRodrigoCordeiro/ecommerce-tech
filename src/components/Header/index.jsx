import React, { useState, useContext } from "react";

import { IoMdMenu } from "react-icons/io";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import { CartContext } from "../../contexts/CartContext"; 

const Header = ({ searchQuery, setSearchQuery }) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const {cartAmount} = useContext(CartContext)

  const produtos = [
    {
      nome: "Produto 1",
      opcoes: [
        { nome: "Detalhes", link: "/produto-a/detalhes", imagem: "" },
        { nome: "Compra", link: "/produto-a/compra", imagem: "" },
        { nome: "comparar", link: "/produto-a/comparar", imagem: "" },
        { nome: "comparar", link: "/produto-a/comparar", imagem: "" },
      ],
    },
    {
      nome: "Produto 2",
      opcoes: [
        { nome: " estoque", link: "/produto-b/estoque", imagem: "" },
        { nome: " estoque ", link: "/produto-b/carrinho", imagem: "" },
        { nome: "Avaliações", link: "/produto-b/carrinho", imagem: "" },
        { nome: "comparar", link: "/produto-a/comparar", imagem: "" },
      ],
    },
    {
      nome: "Produto 3",
      opcoes: [
        { nome: "Configurações", link: "/produto-c/configuracoes", imagem: "" },
        { nome: "Promoções", link: "/produto-c/promocoes", imagem: "" },
        { nome: "Personalizar", link: "/produto-c/personalizar", imagem: "" },
        { nome: "comparar", link: "/produto-a/comparar", imagem: "" },
      ],
    },
    {
      nome: "Produto 4",
      opcoes: [
        { nome: "Ver estoque", link: "/produto-b/estoque", imagem: "" },
        { nome: "ver estoque 2", link: "/produto-b/carrinho", imagem: "" },
        { nome: "Avaliações", link: "/produto-b/carrinho", imagem: "" },
        { nome: "comparar", link: "/produto-a/comparar", imagem: "" },
      ],
    },
    {
      nome: "Produto 5",
      opcoes: [
        { nome: "Ver estoque", link: "/produto-b/estoque", imagem: "" },
        { nome: "ver estoque 2", link: "/produto-b/carrinho", imagem: "" },
        { nome: "Avaliações", link: "/produto-b/carrinho", imagem: "" },
        { nome: "comparar", link: "/produto-a/comparar", imagem: "" },
      ],
    },
    {
      nome: "Produto 6",
      opcoes: [
        { nome: "Ver estoque", link: "/produto-b/estoque", imagem: "" },
        { nome: "ver estoque 2", link: "/produto-b/carrinho", imagem: "" },
        { nome: "Avaliações", link: "/produto-b/carrinho", imagem: "" },
        { nome: "comparar", link: "/produto-a/comparar", imagem: "" },
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col bg-green-600 items-center mb-16 justify-evenly md:bg-[#F2F2F2] md:flex-row md:mt-11">
        <div className="flex flex-row justify-around items-center w-full mt-3 mb-3 md:mt-0 md:mb-0 md:w-0">
          <IoMdMenu size={40} className="md:hidden" />
          <p>LOGO</p>
        </div>
        <div className="relative w-80 md:ml-8 lg:w-96">
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-4 w-80 md:ml-8 lg:w-96"
            placeholder="Buscar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoSearchOutline className="absolute right-8 top-1/2 transform -translate-y-1/2" />
          <IoMdMic className="absolute right-1 top-1/2 transform -translate-y-1/2" />
        </div>

        <div className="flex flex-row gap-10 mt-8 mb-3 md:mt-0 md:mb-0 md:gap-5 lg:gap-12">
          <div className="flex flex-col items-center ">
            <Link to="/about">
              <MdOutlineQuestionAnswer size={28} className="ml-5" />
              <p>Sobre nós</p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/sac">
              <FaPeopleGroup size={28} />
              <p>SAC</p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/cart">
              {cartAmount > 0 && (
                <span className="-mt-5 ml-7 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">{cartAmount}</span>
              )}
              <BsCart2 size={28} className="ml-4" />
              <p>Carrinho</p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <BsPersonCircle size={28} />
            <p>Login</p>
          </div>
        </div>
      </div>

      <div className="bg-green-500 w-full hidden justify-center text-white font-bold p-4 gap-7 md:flex">
        {produtos.map((produto, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setDropdownVisible(index)}
            onMouseLeave={() => setDropdownVisible(null)}
          >
            <div className="flex flex-row gap-5">
              <p className="cursor-pointer">{produto.nome}</p>
              <span className="border-l-2 border-white h-6"></span>
            </div>

            {dropdownVisible === index && (
              <div className="fixed top-64 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-4 shadow-lg rounded md:w-[750px] lg:w-[1270px] z-50">
                <ul className="flex flex-row items-center justify-center space-x-10">
                  {produto.opcoes.map((opcao, idx) => (
                    <li key={idx}>
                      <a className="hover:text-green-500 cursor-pointer block">
                        <img
                          src={opcao.imagem}
                          // alt={opcao.nome}
                          className="w-12 h-12 object-cover mr-2"
                        />
                        {opcao.nome}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
