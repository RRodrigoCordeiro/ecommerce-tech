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
import Carrossel from "../../components/Carrossel";
import Depoimentos from "../../components/Depoimentos";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { CartContext } from "../../contexts/CartContext";
import useLaunchFilter from "../../hooks/useLaunchFilter";
import toast from "react-hot-toast";
import Modal from "../../components/modal/modal"; 


const Home = () => {
  const [products, setProducts] = useState([]);
  const [notebooks, setNotebooks] = useState([]);
  const [computador, setComputador] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false)
  const [isOpen, setModalOpened] = useState(false);
  const [data, setData] = useState(null); // Estado para armazenar os dados da API
  const [selectedProduct, setSelectedProduct] = useState(null); // novo estado 
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNotebook = notebooks.filter((notebook) =>
    notebook.title.toLowerCase().includes(searchTerm)
  );

  const filterComputador = computador.filter((computador) =>
    computador.title.toLowerCase().includes(searchTerm)
  );

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.mercadolibre.com/sites/MLB/search?q=notebook"
        );
        setNotebooks(response.data.results);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.mercadolibre.com/sites/MLB/search?q=computador"
        );

        const itensFiltrados = response.data.results.filter(
          (item) =>
            item.title.toLowerCase().includes("computador") ||
            item.title.toLowerCase().includes("pc")
        );
        setComputador(itensFiltrados);
      } catch (error) {
        console.log("erro ao buscar API", error);
      }
    };
    fetchData();
  }, []);

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

  const { addItemCart } = useContext(CartContext)

  function handleAddCartItem(product){
    addItemCart(product)
    toast.success("Produto adicionado no carrinho")
    console.log(product)
  }

 function openModal(product) {
  setSelectedProduct(product);
  setModalOpened(true)
 }

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  return (
    <div>
      <Header searchQuery={searchTerm} setSearchQuery={setSearchTerm} />
      <Carrossel />

      <div className="container mx-auto bg-[#F2F2F2] mt-28">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] px-3 bg-b"
                >
                    <article className="bg-white text-white rounded-2xl p-6 space-y-2 h-full flex flex-col w-full  ">
                      <Link to={`/detail/${product.id}`} className="flex flex-col flex-grow">
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
                        <div className="bg-green-600 flex items-center gap-2 w-32 p-0.5 mb-5 rounded-md ">
                          <FaTruck className="ml-2" />
                          <p>Frete Grátis</p>
                        </div>

                        {/* <p className="text-gray-800 text-sm mb-4">
                          {product.description}
                        </p> */}
                        <p className="text-green-600 font-bold text-lg ">
                          R$ {product.price}
                        </p>
                        <p className="text-gray-400 text-sm -mt-2">
                          À vista no PIX
                        </p>
                      </Link>
                      <button className="bg-green-600 rounded-md h-10 font-bold flex items-center justify-center gap-3" onClick={() => handleAddCartItem(product)}>
                        <FaShoppingCart />
                        COMPRAR
                      </button>
                      <button onClick={() => openModal(product)} className="text-black">Clique Aqui</button>
                     

                    </article>
                </div>
              ))}
              {isOpen && selectedProduct && (
                <Modal  isOpen={isOpen} setModalOpened={setModalOpened} >
                    <div className="p-8">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.title}
                          className=" mb-11 w-40 h-40 m-auto"
                        />
                        <div>
                          <h3 className="text-center font-bold mb-8 w-56  m-auto">{selectedProduct.title}</h3>
                          <p className="max-w-2xl text-justify w-56 md:w-full m-auto mb-8">{selectedProduct.description}</p>
                          <button className="bg-green-600 text-white m-auto  w-56 md:w-2xl rounded-md h-10 font-bold flex items-center justify-center gap-3" onClick={() => handleAddCartItem(selectedProduct)}>
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
            className="bg-white flex items-center rounded-full shadow-lg w-8 h-8 absolute left-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <FaCircleChevronLeft className="w-8 h-8 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center rounded-full shadow-lg w-8 h-8 absolute -right-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <FaChevronCircleRight className="w-8 h-8 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-4 mt-28 mb-28 ">
        <img
          src="/images/banner05.png"
          alt="imagem do banner"
          className="lg:w-xl"
        />
        <img
          src="/images/banner06.png"
          alt="imagem do banner"
          className="lg:w-xl"
        />
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef2}>
          <div className="flex ">
            {filteredNotebook.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] px-3"
              >
                <article className="bg-white text-white rounded-2xl p-6 space-y-2 h-full flex flex-col w-full ">
                  <div className=" flex items-start justify-between">
                    <div className="flex gap-3">
                      <h3 className="text-black font-bold text-xl mb-8">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    width="100"
                    className="m-auto mb-16"
                  ></img>
                  <div className="bg-green-600 flex items-center gap-2 w-32 p-0.5 mb-5 rounded-md ">
                    <FaTruck className="ml-2" />
                    <p>Frete Grátis</p>
                  </div>

                  <p className="text-gray-800 text-sm mb-4">
                    {item.description}
                  </p>
                  <p className="text-green-600 font-bold text-lg ">
                    R$ {item.price}
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
        <button
          className="bg-white flex items-center rounded-full shadow-lg w-8 h-8 absolute left-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          onClick={scrollPrev2}
        >
          <FaCircleChevronLeft className="w-8 h-8 text-gray-600" />
        </button>

        <button
          className="bg-white flex items-center rounded-full shadow-lg w-8 h-8 absolute -right-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          onClick={scrollNext2}
        >
          <FaChevronCircleRight className="w-8 h-8 text-gray-600" />
        </button>
      </div>

      <div>
        <img
          src="/images/banner07.png"
          alt="Imagem do banner"
          className="m-auto h-40 md:h-52  lg:w-1xl  mt-28 mb-28"
        />
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef3}>
          <div className="flex ">
            {filterComputador.map((pc) => (
              <div
                key={pc.id}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] px-3"
              >
                <article className="bg-white text-white rounded-2xl p-6 space-y-2 h-full flex flex-col w-full ">
                  <div className=" flex items-start justify-between">
                    <div className="flex gap-3">
                      <h3 className="text-black font-bold text-xl mb-8">
                        {pc.title}
                      </h3>
                    </div>
                  </div>
                  <img
                    src={pc.thumbnail}
                    alt={pc.title}
                    width="100"
                    className="m-auto mb-16"
                  ></img>
                  <div className="bg-green-600 flex items-center gap-2 w-32 p-0.5 mb-5 rounded-md ">
                    <FaTruck className="ml-2" />
                    <p>Frete Grátis</p>
                  </div>

                  <p className="text-gray-800 text-sm mb-4">{pc.description}</p>
                  <p className="text-green-600 font-bold text-lg ">
                    R$ {pc.price}
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
        <button
          className="bg-white flex items-center rounded-full shadow-lg w-8 h-8 absolute left-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          onClick={scrollPrev3}
        >
          <FaCircleChevronLeft className="w-8 h-8 text-gray-600" />
        </button>

        <button
          className="bg-white flex items-center rounded-full shadow-lg w-8 h-8 absolute -right-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          onClick={scrollNext3}
        >
          <FaChevronCircleRight className="w-8 h-8 text-gray-600" />
        </button>
      </div>

      <div className="bg-white m-auto mt-28 mb-28 py-8 container ">
        <h1 className="font-bold text-center text-1xl ">
          CONHEÇA OS NOSSOS LANÇAMENTOS E PRODUTOS
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-28 mt-16 mb-16">
          <img
            src="/images/computadorPromocao1.jpg"
            alt="Imagem do computador"
            className="w-40"
          />
          <img
            src="/images/notebookPromocao.jpg"
            alt="Imagem do computador"
            className="w-40"
          />
          <img
            src="/images/computadorPromocao1.jpg"
            alt="Imagem do computador"
            className="w-40"
          />
        </div>

        <Link to={"/launch"}>
          <button className="bg-green-600 text-white font-bold w-44 m-auto p-1 rounded-md text-center mb-8 block">
            CONHECER MAIS
          </button>
        </Link>
      </div>

      <Depoimentos />

      <Footer />
    </div>
  );
};

export default Home;
