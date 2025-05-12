import React, { useContext } from "react";
import Header from "../../components/Header"; 
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast";

// colocar o nome do usuário que fez o pedido
// colocar o telefone do usuário que fez o pedido
// colocar o email do usuário que fez o pedido

const Cart = () => {
  const { cart, total, addItemCart,  removeItemCart, discount } = useContext(CartContext);
  const [hasItems, setHasItems] = useState();

  useEffect(() => {
    setHasItems(cart.length !==0)
  }, [cart])

 function sendEmail(e){
  e.preventDefault();

    const orderId = Math.floor(Math.random() * 1000000);

    const mappedOrders = cart.map(item => ({
      name: item.title,
      units: item.amount,
      price: item.price * item.amount,
      image_url: item.image
    }));

    const shippingCost = 50;
    const taxCost = 8;
    const totalCost = total + shippingCost + taxCost;

    var templateParams = {
      order_id: orderId,
      orders: mappedOrders, 
      cost_shipping: shippingCost,
      cost_tax: taxCost,
      cost_total : totalCost
    };

    emailjs.send("service_yib8h7h", "template_wcm4age", templateParams, "od3sxoc3hgGz0tKkv")
      .then((response) => {
        console.log("Email enviado", response.status, response.text);
        toast.success("o seu Pedido foi enviado com sucesso!")

        alert("Email enviado com sucesso!");
      }, (err) => {
        console.log("Erro", err);
        alert("Erro ao enviar email. Tente novamente.");
      });
  }

  return (
    <div>
      <Header />
      <p className="text-2xl text-center mt-28 mb-8 font-bold">
         {hasItems ? "Carrinho de Compras" : "Carrinho de Compras está Vazio"}
      </p>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center ">
          <p className="font-medium mt-8 mb-8">Seu carrinho está vazio, vamos as compras?</p>
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
          <img
            src={item.image} 
            alt={item.title} 
            className="w-28 mt-8"
          />
          <strong> Preço: {item.price}</strong>
          <div className="flex items-center justify-center gap-3 ">
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center" onClick={() => removeItemCart(item)}>
              -
            </button>
            {item.amount}
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center" onClick={() => addItemCart(item)}>
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
          <p className="font-bold mt-4 ml-10" >Total: {total}</p>
          <p  className="font-light mt-4 ml-10">No seu carrinho contém {cart.length} itens</p>
          <button className="text-center text-white bg-green-600 rounded-md w-40 m-auto p-2 mt-28" onClick={sendEmail}>Finalizar compras</button>
        </div> 
      )}
    </div>
  );
};

export default Cart;
