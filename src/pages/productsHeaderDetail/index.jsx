import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useProductByCategoryAndId } from "../../hooks/productHeader/useProductByCategoryAndId";
import Header from "../../components/Header";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";

const HeaderDetail = () => {
  const { category, id } = useParams();
  const {  addItemCart } = useContext(CartContext)
  
  const {
    data: product,
  } = useProductByCategoryAndId(category, id);


  function handleAddCartItem(product) {
    addItemCart(product);
    toast.success("Produto adicionado no carrinho");
    console.log(product);
  }
  
  return (
    <div>
      <Header />
      {product && (
        <div className="flex flex-col lg:flex-row justify-center ">
          <div className="flex flex-col">
            <p className="font-bold  text-slate-800 text-center mt-8 mb-8">
              {product.name}
            </p>
            <p className="text-center ">{product.title}</p>
            <img 
              src={product.image} 
              className="block m-auto w-56 mt-14 md:mt-18 md:w-96 " 
              alt="foto da imagem dos produtos"
            />
          </div>

          <div className=" flex flex-col justify-center items-center mt-28 lg:mt-40 ">
            {product.specification && (
              <div>
                <h2 className=" text-slate-800 font-bold text-center">
                  Escpeficações Técnicas
                </h2>
                <ul className="mt-3 list-disc pl-5 space-y-1 w-80 md:w-full">
                  {Object.entries(product.specification).map(
                    ([chave, valor]) => (
                      <li key={chave}>
                        <strong>{chave}: </strong> {valor}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            <p className="border border-gray-300 mt-8 mb-8 w-96"></p>

            {product.about && (
              <div className="md:mr-16 ">
                <h2 className=" text-slate-800 font-bold mb-3 text-center">
                  Sobre este item
                </h2>
                <ul className="mt-3 list-disc pl-5 space-y-1">
                  {product.about.map((item, index) => (
                    <li key={index} className="max-w-72 md:max-w-96">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="border border-gray-300 mt-8 mb-8 w-96"></p>

            <div>
              <h2 className=" text-slate-800 font-bold mb-3 mt-8 text-center">Valor do produto</h2>
              <p className="text-center">{product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
               })}
              </p>
            </div>
            
          </div>
        </div>
      )}
     <button
        className="bg-green-500  text-black m-auto  w-56 lg:w-2xl rounded-md h-10 font-bold flex items-center justify-center gap-3 mb-8 mt-8"
        onClick={() => handleAddCartItem(product)}
     >
       <FaShoppingCart />
       Comprar
    </button>
    </div>
  );
};

export default HeaderDetail;
