import React, { useState,useContext  } from "react";
import { FaTruck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Header from "../../components/Header";
import useLaunchFilter from "../../hooks/filter/useLaunchFilter"
import { CartContext } from "../../contexts/CartContext";  
import toast from "react-hot-toast";
import Modal from "../../components/Modal" 


const Launch = () => {
  const {
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    getFilteredProducts,
  } = useLaunchFilter();

  const { addItemCart } = useContext(CartContext)
  const [isOpen, setModalOpened] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleAddCartItem(product){
    addItemCart(product)
    toast.success("Produto adicionado no carrinho")
    console.log(product)
  }

  function openModal(product) {
    setSelectedProduct(product);
    setModalOpened(true)
  }

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
 

      <div className="container mx-auto p-4">
        <div className="mb-4">
          <button
            onClick={() => setFilter("launch")}
            className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
          >
            Lançamentos
          </button>
          <button
            onClick={() => setFilter("promotion")}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Promoções
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {getFilteredProducts().map((product) => (
            <div
              key={product.id}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)]  px-3 mb-16"
            >
              <article className="bg-white text-white rounded-2xl p-6 space-y-2 h-full flex flex-col w-full">
                <h3 className="text-black font-bold text-xl mb-8">
                  {product.title}
                </h3>
                <img
                  src={product.image}
                  alt={product.title}
                  width="100"
                  className="m-auto mb-16"
                />
                <div className="bg-green-600 flex items-center gap-2 w-32 p-0.5 mb-5 rounded-md">
                  <FaTruck className="ml-2" />
                  <p>Frete Grátis</p>
                </div>

                <p className="text-gray-800 text-sm mb-4">{product.rating}</p>
                <p className="text-green-600 font-bold text-lg">
                  R$ {product.price}
                </p>
                <p className="text-gray-400 text-sm -mt-2">À vista no PIX</p>

                <button className="bg-green-600 rounded-md h-10 font-bold flex items-center justify-center gap-3" onClick={() => handleAddCartItem(product)}>
                  <FaShoppingCart />
                  COMPRAR
                </button>
                <button className="text-black" onClick={() => openModal(product)}>
                    Clique aqui
               </button>
              </article>
              {isOpen && selectedProduct && (
                <Modal  isOpen={isOpen} setModalOpened={setModalOpened}>
                  <div>
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                    />
                    <div>
                      <h3 className="text-center font-bold mb-8 w-56  m-auto">{selectedProduct.title}</h3>
                      <p className="max-w-2xl text-center  md:w-full block m-auto mb-8">{selectedProduct.description}</p>
                      <button 
                         className="bg-green-600 text-white m-auto  w-56 md:w-2xl rounded-md h-10 font-bold flex items-center justify-center gap-3 mb-8" 
                         onClick={() => handleAddCartItem(selectedProduct)}>
                         Comprar
                      </button>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Launch;
