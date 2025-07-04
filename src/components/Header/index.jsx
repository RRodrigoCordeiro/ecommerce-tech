import React, { useState, useContext } from "react";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom'
import { CartContext } from "../../contexts/CartContext"; 
import { useProductHeader } from "../../hooks/productHeader/useProductHeader";
import TranscriptButton from "../UI/TranscriptButton";
import MobileMenu from "./MobileMenu";
 
const Header = ({ searchQuery, setSearchQuery }) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const {cartAmount} = useContext(CartContext)
  const {data:product} = useProductHeader();
  const location = useLocation()
  const isInputHidden = 
    location.pathname === '/Home' || 
    location.pathname === '/cart' || 
    location.pathname === "/workWithUs" ||
    location.pathname === "/accessibility" ||
    location.pathname === "/shippingDeliveryPickup" ||
    location.pathname === "/returnsAndExchanges" ||
    location.pathname === "/contact" ||
    location.pathname.startsWith('/header/');
 
  return (
    <header>
      <div className="flex flex-col bg-green-600 items-center mb-16 justify-evenly md:bg-[#F2F2F2] md:flex-row md:mt-11">
        <div className="flex flex-row space-x-44 items-center  mt-3 mb-3 md:mt-0 md:mb-0 ">
          <MobileMenu />
          <Link to="/" aria-label="Página inicial">
            <img
                src="/images/logos/transparent-brand-logo.png"
                alt="Logo da tech zone"
                width={192}      
                height={192} 
                className="w-12 md:w-28 block "
              />
          </Link>
        </div>
        
        {!isInputHidden && (
          <div className="relative w-80 md:mr-8  lg:w-96 space-x-4">
            <input
              type="text"
              className="border border-text-slate-800 rounded px-4 py-4 w-80 md:ml-8 lg:w-full"
              placeholder="Buscar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IoSearchOutline className="absolute right-8 top-1/2 transform -translate-y-1/2  text-black w-5 h-5 "/>
            <TranscriptButton
              value={searchQuery}
              setValue={setSearchQuery}
            />
          </div>
        )}

        <nav className="flex flex-row gap-10 mt-8 mb-3 md:mt-0 md:mb-0 md:gap-5 lg:gap-12">
          <div className="flex flex-col items-center ">
            <Link to="/about" aria-label="Ir para o about">
              <MdOutlineQuestionAnswer size={28} className="ml-5  text-black" />
              <span className="text-slate-800">Sobre nós</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/sac" aria-label="Ir para o sac">
              <FaPeopleGroup size={28} className="text-black"/>
              <span className="text-slate-800">SAC</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/cart" aria-label="Ir para o carrinho">
              {cartAmount > 0 && (
                <span className="-mt-5 ml-7 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">{cartAmount}</span>
              )}
              <BsCart2 size={28} className="ml-4  text-black" />
              <span className="text-slate-800">Carrinho</span>
            </Link>
          </div>
        </nav>
      </div>

      <div className="bg-green-500 w-full hidden justify-center text-white font-bold p-4 gap-7 md:flex">
        {product && Object.entries(product).map(([categoria, listaProdutos], index) => (
          <div
            key={categoria}
            className="relative"
            onMouseEnter={() => setDropdownVisible(index)}
            onMouseLeave={() => setDropdownVisible(null)}
          >
            <div className="flex flex-row gap-5">
              <p className="cursor-pointer text-slate-800">{categoria}</p>
              <span className="border-l-2 border-black h-6"></span>
            </div>

            {dropdownVisible === index && (
              <div className="fixed top-64 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-4 shadow-lg rounded md:w-[750px] lg:w-[1270px] z-50">
                <ul className="flex flex-row items-center justify-center space-x-10">
                  {listaProdutos.map((opcao, idx) => (
                    <li key={idx}>
                      <Link className="hover:text-green-600 cursor-pointer block" to={`/header/${categoria}/${opcao.id}`}>
                        <img
                          src={opcao.image}
                          alt={`Imagem do produto ${opcao.name}`}
                          className="w-12 h-12 lg:w-20 md:h-full object-cover mr-2 md:m-auto"
                        />
                        <span>{opcao.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
