import React, { useState, useContext } from "react";
import { FaTruck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Header from "../../components/Header";
import useLaunchFilter from "../../hooks/filter/useLaunchFilter";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import Modal from "../../components/Modal";

const Launch = () => {
  const { addItemCart } = useContext(CartContext);
  const {
    setFilter,
    searchQuery,
    setSearchQuery,
    getFilteredProducts,
  } = useLaunchFilter();
  
  const [isOpen, setModalOpened] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleAddCartItem(product) {
    addItemCart(product);
    toast.success("Produto adicionado no carrinho");
    console.log(product);
  }

  function openModal(product) {
    setSelectedProduct(product);
    setModalOpened(true);
  }

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="container mx-auto p-4">
        <nav className="mb-4">
          <button
            onClick={() => setFilter("launch")}
            className="bg-blue-500 text-black py-2 px-4 rounded mr-4 cursor-pointer"
          >
            Lançamentos
          </button>
          <button
            onClick={() => setFilter("promotion")}
            className="bg-green-500 text-slate-800 py-2 px-4 rounded cursor-pointer"
          >
            Promoções
          </button>
        </nav>

        <section className="grid md:grid-cols-2 lg:grid-cols-3">
          {getFilteredProducts().map((product) => (
            <section
              key={product.id}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)]  px-3 mb-16"
            >
              <article className="bg-white text-white rounded-2xl p-6 space-y-2 h-full flex flex-col w-full">
                <div
                  className="h-full flex flex-col w-full"
                  onClick={() => openModal(product)}
                >
                  <h3 className="text-black font-bold text-xl mb-8">
                    {product.title}
                  </h3>
                  <img
                    src={product.image}
                    alt={product.title}
                    width="100"
                    className="m-auto mb-16"
                  />
                  <div className="bg-green-500 text-slate-800 flex items-center gap-2 w-32 p-0.5 mb-5 rounded-md">
                    <FaTruck className="ml-2" />
                    <p>Frete Grátis</p>
                  </div>

                  <p className="text-gray-800 text-sm mb-4">{product.rating}</p>
                  <p className="text-black font-bold text-lg mb-3">
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                  <p className="text-slate-800 text-sm -mt-2">À vista no PIX</p>
                </div>

                <button
                  className="bg-green-500 text-black rounded-md h-10 font-bold flex items-center justify-center gap-3 cursor-pointer"
                  onClick={() => handleAddCartItem(product)}
                >
                  <FaShoppingCart />
                  COMPRAR
                </button>
              </article>
            </section>
          ))}
          {isOpen && selectedProduct && (
              <Modal isOpen={isOpen} setModalOpened={setModalOpened}>
                <section>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className=" mb-11 w-40 h-40 m-auto"
                  />
                  <div>
                    <h3 className="text-center font-bold mb-8 w-56  m-auto">
                      {selectedProduct.title}
                    </h3>
                    <p className="max-w-2xl text-center  md:w-full block m-auto mb-8">
                      {selectedProduct.description}
                    </p>
                    <button
                      className="bg-green-600 text-white m-auto  w-56 md:w-2xl rounded-md h-10 font-bold flex items-center justify-center gap-3 mb-8 cursor-pointer"
                      onClick={() => handleAddCartItem(selectedProduct)}
                    >
                      Comprar
                    </button>
                  </div>
                </section>
              </Modal>
            )}
        </section>
      </main>
    </div>
  );
};

export default Launch;
