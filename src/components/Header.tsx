import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
    const [dropdownVisible, setDropdownVisible]= useState<number | null>(null);

    const produtos = [
      {
        nome: "Produto 1",
        opcoes: [
          {nome:"Detalhes", link:"/produto-a/detalhes", imagem: ""},
          {nome:"Compra", link:"/produto-a/compra", imagem: ""},
          {nome: "comparar", link:"/produto-a/comparar", imagem: ""},
          {nome: "comparar", link:"/produto-a/comparar", imagem: ""},
        ],
      },
      {
        nome: "Produto 2",
        opcoes: [
          {nome: " estoque", link: "/produto-b/estoque", imagem: ""},
          {nome: " estoque ", link: "/produto-b/carrinho", imagem: ""},
          {nome: "Avaliações", link: "/produto-b/carrinho", imagem: ""},
          {nome: "comparar", link:"/produto-a/comparar", imagem: ""},
        ],
      },
      {
        nome: "Produto 3",
        opcoes: [
          { nome: "Configurações", link: "/produto-c/configuracoes", imagem: "" },
          { nome: "Promoções", link: "/produto-c/promocoes", imagem: "" },
          { nome: "Personalizar", link: "/produto-c/personalizar", imagem: "" },
          {nome: "comparar", link:"/produto-a/comparar", imagem: ""},
        ],
      },
      {
        nome: "Produto 4",
        opcoes: [
          {nome: "Ver estoque", link: "/produto-b/estoque", imagem: ""},
          {nome: "ver estoque 2", link: "/produto-b/carrinho", imagem: ""},
          {nome: "Avaliações", link: "/produto-b/carrinho", imagem: ""},
          {nome: "comparar", link:"/produto-a/comparar", imagem: ""},
        ],
      },
      {
        nome: "Produto 5",
        opcoes: [
          {nome: "Ver estoque", link: "/produto-b/estoque", imagem: ""},
          {nome: "ver estoque 2", link: "/produto-b/carrinho", imagem: ""},
          {nome: "Avaliações", link: "/produto-b/carrinho", imagem: ""},
          {nome: "comparar", link:"/produto-a/comparar", imagem: ""},
        ],
      },
      {
        nome: "Produto 6",
        opcoes: [
          {nome: "Ver estoque", link: "/produto-b/estoque", imagem: ""},
          {nome: "ver estoque 2", link: "/produto-b/carrinho", imagem: ""},
          {nome: "Avaliações", link: "/produto-b/carrinho", imagem: ""},
          {nome: "comparar", link:"/produto-a/comparar", imagem: ""},
        ],
      },
      {
        nome: "Produto 7",
        opcoes: [
          {nome: "Ver estoque", link: "/produto-b/estoque", imagem: ""},
          {nome: "ver estoque 2", link: "/produto-b/carrinho", imagem: ""},
          {nome: "Avaliações", link: "/produto-b/carrinho",imagem: ""},
          {nome: "comparar", link:"/produto-a/comparar", imagem: ""},
        ],
      },
      {
        nome: "Produto 8",
        opcoes: [
          {nome: "Ver estoque", link: "/produto-b/estoque", imagem: ""},
          {nome: "ver estoque 2", link: "/produto-b/carrinho", imagem: ""},
          {nome: "Avaliações", link: "/produto-b/carrinho", imagem: ""},
          {nome: "comparar", link:"/produto-a/comparar", imagem: ""},
        ],
      },
      {
        nome: "Produto 9",
        opcoes: [
          {nome: "Ver estoque", link: "/produto-b/estoque", imagem: ""},
          {nome: "ver estoque 2", link: "/produto-b/carrinho", imagem: ""},
          {nome: "Avaliações", link: "/produto-b/carrinho", imagem: ""},
          {nome: "comparar", link:"/produto-a/comparar", imagem: ""},
        ],
      },
      {
        nome: "Produto 10",
        opcoes: [
          {nome: "Ver estoque", link: "/produto-b/estoque", imagem: ""},
          {nome: "ver estoque 2", link: "/produto-b/carrinho", imagem: ""},
          {nome: "Avaliações", link: "/produto-b/carrinho", imagem: ""},
          {nome: "comparar", link:"/produto-a/comparar", imagem: ""},
        ],
      },
    ]

  return (
    <div>
      <div className='flex flex-row items-center mb-16 mt-11 justify-evenly'>
        <IoMdMenu 
          size={40}
        />
        <p>LOGO</p>
         <input
          type="text"
          className="border border-gray-300 rounded px-4 py-4 w-96"
          placeholder='Buscar'
        />
        <div className='flex flex-row gap-12'>
          <div className='flex flex-col items-center'>
            <MdOutlineQuestionAnswer
              size={28}
            />
            <p>Sobre nos</p>
          </div>
          <div className='flex flex-col items-center'>
            <FaPeopleGroup 
              size={28}
            />
            <p>SAC</p>
          </div>
          <div className='flex flex-col items-center'>
          <BsCart2 
            size={28}
          />
            <p>Meu Carrinho</p>
          </div>

        </div>
      </div>
      <div className="bg-green-500 w-full flex justify-center text-white font-bold p-4 gap-7">
         {produtos.map((produto, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setDropdownVisible(index)}
              onMouseLeave={() => setDropdownVisible(null)}
            >
              <div className='flex flex-row gap-8'>
                <p className='cursor-pointer'>{produto.nome}</p>
                <span className="border-l-2 border-white h-6"></span>
              </div>

              {dropdownVisible === index && (
                <div className="fixed top-64 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-4 shadow-lg rounded w-[1400px] z-50">
                  <ul className=" flex flex-row items-center justify-center space-x-10">
                      {produto.opcoes.map((opcao, idx) => (
                          <li
                            key={idx}
                          >
                            <a
                              key={opcao.link}
                              
                              className="hover:text-green-500 cursor-pointer block"
                            >
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
