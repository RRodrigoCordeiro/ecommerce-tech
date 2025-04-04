import React, { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useLaunchFilter from "../../hooks/useLaunchFilter";

const Launch = () => {
  const {
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    getFilteredProducts,
  } = useLaunchFilter();

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
                  {product.name}
                </h3>
                <img
                  src={product.image}
                  alt={product.name}
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

                <button className="bg-green-600 rounded-md h-10 font-bold flex items-center justify-center gap-3">
                  <FaShoppingCart />
                  COMPRAR
                </button>
              </article>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Launch;
