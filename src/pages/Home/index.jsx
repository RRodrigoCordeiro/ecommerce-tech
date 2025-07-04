"use client";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useEmblaCarousel from "embla-carousel-react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Testimonials from "../../components/Testimonials";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import Modal from "../../components/Modal";
import Attendant from "../../components/Attendant"; 
import useFilterProductTitle from "../../hooks/filter/useSearchFilter";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setModalOpened] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductComputer, setSelectedProductComputer] = useState(null);
  const [selectedProductNotebook, setSelectedProductNotebook] = useState(null);
  const [error, setError] = useState(null);
  const { addItemCart } = useContext(CartContext);

  const { 
    searchTerm, 
    setSearchTerm, 
    filterComputador, 
    filteredNotebook 
  } = useFilterProductTitle();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/electronics"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar API", error);
      }
    };
    fetchData();
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  });

  function scrollPrev2() {
    emblaApi2?.scrollPrev();
  }

  function scrollNext2() {
    emblaApi2?.scrollNext();
  }

  const [emblaRef3, emblaApi3] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  });

  function scrollPrev3() {
    emblaApi3?.scrollPrev();
  }

  function scrollNext3() {
    emblaApi3?.scrollNext();
  }

 

  function handleAddCartItem(product) {
    addItemCart(product);
    toast.success("Produto adicionado no carrinho");
    console.log(product);
  }

  function openModal(product, computer, notebook) {
    setSelectedProduct(product);
    setSelectedProductComputer(computer);
    setSelectedProductNotebook(notebook);
    setModalOpened(true);
  }

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  return (
    <>
      <Header searchQuery={searchTerm} setSearchQuery={setSearchTerm} />
      <Carousel />
      <main>
        <section className="container mx-auto bg-[#F2F2F2] mt-28">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex ">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] px-3 bg-b"
                  >
                    <article className="bg-white text-white cursor-pointer rounded-2xl p-6 space-y-2 h-full flex flex-col w-full  ">
                      <div
                        className="h-full flex flex-col w-full"
                        onClick={() => openModal(product)}
                      >
                        <div className=" flex items-start justify-between">
                          <div className="flex gap-3">
                            <h3 className="text-black font-bold text-xl mb-8">
                              {product.title}
                            </h3>
                          </div>
                        </div>
                        <img
                          src={product.image}
                          alt={product.title}
                          width="100"
                          className="m-auto mb-16"
                        ></img>
                        <div className="bg-green-500 text-slate-800 flex items-center gap-2 w-32 p-0.5 mb-5 rounded-md ">
                          <FaTruck className="ml-2" />
                          <p>Frete Grátis</p>
                        </div>
                        <p className="text-black font-bold text-lg mb-3">
                          {product.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                        <p className="text-slate-800 text-sm -mt-2">
                          À vista no PIX
                        </p>
                      </div>

                      <button
                        className="bg-green-500 text-black  cursor-pointer rounded-md h-10 font-bold flex items-center justify-center gap-3"
                        onClick={() => handleAddCartItem(product)}
                      >
                        <FaShoppingCart />
                        COMPRAR
                      </button>
                    </article>
                  </div>
                ))}
                {isOpen && selectedProduct && (
                  <Modal isOpen={isOpen} setModalOpened={setModalOpened}>
                    <div className="p-8">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        className=" mb-11 w-40 h-40 m-auto"
                      />
                      <div>
                        <h3 className="text-center font-bold mb-8 w-56  m-auto">
                          {selectedProduct.title}
                        </h3>
                        <p className="max-w-2xl text-justify w-56 md:w-full m-auto mb-8">
                          {selectedProduct.description}
                        </p>
                        <button
                          className="bg-green-500 cursor-pointer text-black m-auto  w-56 md:w-2xl rounded-md h-10 font-bold flex items-center justify-center gap-3"
                          onClick={() => handleAddCartItem(selectedProduct)}
                        >
                          <FaShoppingCart />
                          COMPRAR
                        </button>
                      </div>
                    </div>
                  </Modal>
                )}
              </div>
            </div>
            <button
              className="bg-white cursor-pointer flex items-center rounded-full shadow-lg w-8 h-8 absolute left-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollPrev}
              aria-label="Deslizar para a esquerda"
            >
              <FaCircleChevronLeft className="w-8 h-8 text-gray-600" />
            </button>

            <button
              className="bg-white cursor-pointer flex items-center rounded-full shadow-lg w-8 h-8 absolute -right-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollNext}
              aria-label="Deslizar para a direita"
            >
              <FaChevronCircleRight className="w-8 h-8 text-gray-600" />
            </button>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row justify-center gap-4 mt-28 mb-28 ">
          <img
            src="/images/banners/banner-announcement-discount.png"
            alt="imagem do anúncio de desconto"
            className="lg:w-xl"
          />
          <img
            src="/images/banners/banner-announcement-discount2.png"
            alt="imagem do anúncio de desconto"
            className="lg:w-xl"
          />
        </section>

        <section className="relative">
          <div className="overflow-hidden" ref={emblaRef2}>
            <div className="flex ">
              {filterComputador.map((computer) => (
                <div
                  key={computer.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-white text-white cursor-pointer rounded-2xl p-6 space-y-2 h-full flex flex-col w-full ">
                    <div
                      className="bg-white text-white rounded-2xl p-1 space-y-2 h-full flex flex-col w-full "
                      onClick={() => openModal(computer)}
                    >
                      <div className=" flex items-start justify-between">
                        <div className="flex gap-3">
                          <h3 className="text-black font-bold text-xl mb-8">
                            {computer.title}
                          </h3>
                        </div>
                      </div>
                      <img
                        src={computer.image}
                        alt={computer.title}
                        className="m-auto mb-16 h-28 "
                      ></img>
                      <div className="bg-green-500 text-slate-800 flex items-center gap-2 w-32 p-0.5 mb-5 rounded-md ">
                        <FaTruck className="ml-2" />
                        <p>Frete Grátis</p>
                      </div>

                      <p className="text-black font-bold text-lg mb-3">
                        {computer.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <p className="text-slate-800 text-sm -mt-2">
                        À vista no PIX
                      </p>
                    </div>

                    <button
                      className="bg-green-500 text-black cursor-pointer rounded-md h-10 font-bold flex items-center justify-center gap-3"
                      onClick={() => handleAddCartItem(computer)}
                    >
                      <FaShoppingCart />
                      COMPRAR
                    </button>
                  </article>
                </div>
              ))}
              {isOpen && selectedProductComputer && (
                <Modal isOpen={isOpen} setModalOpened={setModalOpened}>
                  <div className="p-8">
                    <img
                      src={selectedProductComputer.image}
                      alt={selectedProductComputer.title}
                      className=" mb-11 w-40 h-40 m-auto "
                    />
                    <div>
                      <h3 className="text-center font-bold mb-8 w-56  m-auto">
                        {selectedProductComputer.title}
                      </h3>
                      <p className="max-w-2xl text-justify w-56 md:w-full m-auto mb-8">
                        {selectedProductComputer.description}
                      </p>
                      <button
                        className="bg-green-500 cursor-pointer text-black m-auto  w-56 md:w-2xl rounded-md h-10 font-bold flex items-center justify-center gap-3"
                        onClick={() => handleAddCartItem(selectedProductComputer)}
                      >
                        <FaShoppingCart />
                        COMPRAR
                      </button>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
          <button
            className="bg-white cursor-pointer flex items-center rounded-full shadow-lg w-8 h-8 absolute left-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev2}
            aria-label="Deslizar para a esquerda"
          >
            <FaCircleChevronLeft className="w-8 h-8 text-gray-600" />
          </button>

          <button
            className="bg-white cursor-pointer flex items-center rounded-full shadow-lg w-8 h-8 absolute -right-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext2}
            aria-label="Deslizar para a direita"
          >
            <FaChevronCircleRight className="w-8 h-8 text-gray-600" />
          </button>
        </section>

        <div>
          <img
            src="/images/banners/banner-announcement-discount3.png"
            alt="Imagem do banner"
            className="m-auto h-40 md:h-52  lg:w-1xl  mt-28 mb-28 "
          />
        </div>

        <section className="relative">
          <div className="overflow-hidden" ref={emblaRef3}>
            <div className="flex ">
              {filteredNotebook.map((pc) => (
                <div
                  key={pc.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-white text-white cursor-pointer rounded-2xl p-6 space-y-2 h-full flex flex-col w-full ">
                    <div
                      className="h-full flex flex-col w-full "
                      onClick={() => openModal(pc)}
                    >
                      <div className=" flex items-start justify-between">
                        <div className="flex gap-3">
                          <h3 className="text-black font-bold text-xl mb-8">
                            {pc.title}
                          </h3>
                        </div>
                      </div>
                      <img
                        src={pc.image}
                        alt={pc.title}
                        className="m-auto mb-16 h-28 "
                      ></img>
                      <div className="bg-green-500 text-slate-800 flex items-center gap-2 w-32 p-0.5 mb-5 rounded-md ">
                        <FaTruck className="ml-2" />
                        <p>Frete Grátis</p>
                      </div>

                      <p className="text-black font-bold text-lg mb-3">
                        {pc.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <p className="text-slate-800  text-sm -mt-2">
                        À vista no PIX
                      </p>
                    </div>

                    <button
                      className="bg-green-500 text-black cursor-pointer rounded-md h-10 font-bold flex items-center justify-center gap-3"
                      onClick={() => handleAddCartItem(pc)}
                    >
                      <FaShoppingCart />
                      COMPRAR
                    </button>
                  </article>
                </div>
              ))}
              {isOpen && selectedProductNotebook && (
                <Modal isOpen={isOpen} setModalOpened={setModalOpened}>
                  <div className="p-8">
                    <img
                      src={selectedProductNotebook.image}
                      alt={selectedProductNotebook.title}
                      className=" mb-11 w-40 h-40 m-auto"
                    />
                    <div>
                      <h3 className="text-center font-bold mb-8 w-56  m-auto">
                        {selectedProductNotebook.title}
                      </h3>
                      <p className="max-w-2xl text-justify w-56 md:w-full m-auto mb-8">
                        {selectedProductNotebook.description}
                      </p>
                      <button
                        className="bg-green-500 cursor-pointer text-black m-auto  w-56 md:w-2xl rounded-md h-10 font-bold flex items-center justify-center gap-3"
                        onClick={() => handleAddCartItem(selectedProductNotebook)}
                      >
                        <FaShoppingCart />
                        COMPRAR
                      </button>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
          <button
            className="bg-white  cursor-pointer flex items-center rounded-full shadow-lg w-8 h-8 absolute left-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev3}
            aria-label="Deslizar para a esquerda"
          >
            <FaCircleChevronLeft className="w-8 h-8 text-gray-600" />
          </button>

          <button
            className="bg-white flex cursor-pointer items-center rounded-full shadow-lg w-8 h-8 absolute -right-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext3}
            aria-label="Deslizar para a direita"
          >
            <FaChevronCircleRight className="w-8 h-8 text-gray-600" />
          </button>
        </section>

        <section className="bg-white m-auto mt-28 mb-28 py-8 container ">
          <h1 className="font-bold text-center text-1xl ">
            CONHEÇA OS NOSSOS LANÇAMENTOS E PRODUTOS
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-16 mb-16">
            <img
              src="/images/launch/computer-promotion.png"
              alt="Image computador"
              className="w-60"
            />
            <img
              src="/images/launch/notebook-promotion.png"
              alt="Imagem do notebook"
              className="w-48"
            />
            <img
              src="/images/launch/computer-promotion2.png"
              alt="Imagem do computador"
              className="w-60"
            />
          </div>

          <Link to={"/launch"}>
            <button className="bg-green-500 text-black cursor-pointer  font-bold w-44 m-auto p-1 rounded-md text-center mb-8 block">
              CONHECER MAIS
            </button>
          </Link>
        </section>

        <Testimonials />
        <Attendant/>
         
      </main>
    </>
  );
};

export default Home;
