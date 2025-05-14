import React, { useContext } from "react";
import Header from "../../components/Header";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Modal from "../../components/Modal";


const Cart = () => {
  const { cart, total, addItemCart, removeItemCart, discount } =
    useContext(CartContext);
  const [hasItems, setHasItems] = useState();
  const [itemProduct, setitemProduct] = useState();
  const [isOpen, setModalOpened] = useState(false);

  useEffect(() => {
    setHasItems(cart.length !== 0);
  }, [cart]);

  function sendEmail(e) {
    e.preventDefault();

    const orderId = Math.floor(Math.random() * 1000000);

    const mappedOrders = cart.map((item) => ({
      name: item.title,
      units: item.amount,
      price: item.price * item.amount,
      image_url: item.image,
      name_user: item.name,
      email:  item.email,
      telephone: item.telephone,
    }));

    const shippingCost = 50;
    const taxCost = 8;
    const totalCost = total + shippingCost + taxCost;

    var templateParams = {
      order_id: orderId,
      orders: mappedOrders,
      cost_shipping: shippingCost,
      cost_tax: taxCost,
      cost_total: totalCost,
    };

    emailjs
      .send(
        "service_yib8h7h",
        "template_wcm4age",
        templateParams,
        "od3sxoc3hgGz0tKkv"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          toast.success("o seu Pedido foi enviado com sucesso!");

          alert("Email enviado com sucesso!");
        },
        (err) => {
          console.log("Erro", err);
          toast.error("Erro ao enviar o seu pedido");
          alert("Erro ao enviar email. Tente novamente.");
        }
      );
  }

  return (
    <div>
      <Header />
      <p className="text-2xl text-center mt-28 mb-8 font-bold">
        {hasItems ? "Carrinho de Compras" : "Carrinho de Compras está Vazio"}
      </p>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center ">
          <p className="font-medium mt-8 mb-8">
            Seu carrinho está vazio, vamos as compras?
          </p>
          <Link
            to="/"
            className="bg-green-600 my-3 p-1 px-3 text-white font-medium rounded"
          >
            Acessar Produtos
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section
          key={item.id}
          className="flex flex-col md:flex-row items-center justify-around border-b-2 border-gray-300 space-y-10"
        >
          <img src={item.image} alt={item.title} className="w-28 mt-8" />
          <strong> Preço: {item.price}</strong>
          <div className="flex items-center justify-center gap-3 ">
            <button
              className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
              onClick={() => removeItemCart(item)}
            >
              -
            </button>
            {item.amount}
            <button
              className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
              onClick={() => addItemCart(item)}
            >
              +
            </button>
          </div>

          <strong className="float-right">
            SubTotal:
            {item.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </section>
      ))}

      {cart.length !== 0 && (
        <div>
          <p className="font-bold mt-4 ml-10">Total: {total}</p>
          <p className="font-light mt-4 ml-10">
            No seu carrinho contém {cart.length} itens
          </p>
          <button
            className="text-center text-white bg-green-600 rounded-md w-40 p-2 mt-28 block m-auto"
            onClick={() => setModalOpened(true)}
          >
            Finalizar compras
          </button>
        </div>
      )}
      {isOpen && (
        <Modal isOpen={isOpen} setModalOpened={setModalOpened}>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center font-medium mt-8 mb-8">
              Preecha as informações para finalizar o pedido
            </h1>
            <form className="grid grid-cols-2 gap-3 ">
              <div className="flex flex-col">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" className="border-1 w-96 h-8" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" className="border-1 w-96 h-8" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="city">Cidade:</label>
                <input type="text" id="city" className="border-1  w-96 h-8" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="number">Telefone:</label>
                <input type="tel" id="number" className="border-1 w-96 h-8" />
              </div>
              <div className="flex justify-center  col-span-2">
                <button
                  type="submit"
                  className="bg-green-600 rounded-md p-1 font-bold mt-8 mb-8  w-48 text-white block m-auto"
                  onClick={sendEmail}
                >
                  Finalizar o pedido
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Cart;
