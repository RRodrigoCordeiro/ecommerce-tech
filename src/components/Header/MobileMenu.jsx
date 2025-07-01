import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { Link } from "react-router-dom";
import { useProductHeader } from "../../hooks/productHeader/useProductHeader";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const { data: product } = useProductHeader();

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <>
      <button 
        onClick={() => setMenuOpen(true)} 
        className="md:hidden"   
        aria-label="Abrir menu"
      >
        <IoMdMenu size={40} className="text-black" />
      </button>

      <section
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Saiba Mais</h2>
          <button 
            onClick={() => setMenuOpen(false)}  
            aria-label="Fechar menu"
          >
            <IoMdClose size={28} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 overflow-auto" >
          {product &&
            Object.entries(product).map(([categoria, listaProdutos], index) => (
              <div key={categoria} className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full py-2 font-semibold"
                >
                  <span>{categoria}</span>
                  {openAccordionIndex === index ? (
                    <GoChevronUp size={20} />
                  ) : (
                    <GoChevronDown size={20} />
                  )}
                </button>

                {openAccordionIndex === index && (
                  <ul className="pl-4 py-2 space-y-3">
                    {listaProdutos.map((produto) => (
                      <li key={produto.id} className="text-gray-700 hover:text-green-600">
                        <Link to={`/header/${categoria}/${produto.id}`}>{produto.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </nav>
      </section>
    </>
  );
};

export default MobileMenu;
