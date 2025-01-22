import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
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

          <p>Produto X</p>
          <span className="border-l-2 border-white h-6"></span>
          <p>Produto X</p>
          <span className="border-l-2 border-white h-6"></span>
          <p>Produto X</p>
          <span className="border-l-2 border-white h-6"></span>
          <p>Produto X</p>
          <span className="border-l-2 border-white h-6"></span>
          <p>Produto X</p>
          <span className="border-l-2 border-white h-6"></span>
          <p>Produto X</p>
          <span className="border-l-2 border-white h-6"></span>
          <p>Produto X</p>
          <span className="border-l-2 border-white h-6"></span>
          <p>Produto X</p>
          <span className="border-l-2 border-white h-6"></span>
          <p>Produto X</p>
          <span className="border-l-2 border-white h-6"></span>
          <p>Produto X</p>
      </div>
    </div>
  );
};

export default NavBar;
