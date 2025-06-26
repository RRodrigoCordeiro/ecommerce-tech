import React, { useContext } from "react";
import Header from "../../components/Header";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Modal from "../../components/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../schemas/userSchema";
import InputMask from "react-input-mask" 
import { useAddress } from "../../hooks/address/useAddress";

// to email do comprador do site
// bcc email do programador

const Cart = () => {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
  const [hasItems, setHasItems] = useState();
  const [isOpen, setModalOpened] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    resolver:zodResolver(userSchema)
  })

 const cepValue = watch("cep")?.replace(/\D/g, '');
 const { data: cep, } = useAddress(cepValue);


 useEffect(() => {
  if (cep) {
    setValue("neighborhood", cep.bairro || "");
    setValue("region", cep.regiao || "");
    setValue("patio", cep.logradouro || "");
    setValue("locality", cep.localidade || "");
    setValue("complement", cep.complemento || "");
    setValue("uf", cep.uf || "");
  }
}, [cep, setValue]);

  useEffect(() => {
    setHasItems(cart.length !== 0);
  }, [cart]);

  function sendEmail(data) {

    const orderId = Math.floor(Math.random() * 1000000);
    const shippingCost = 50;
    const taxCost = 8;
    const totalCost = total + shippingCost + taxCost;

    const mappedOrders = cart.map((item) => ({
      name: item.title,
      units: item.amount,
      price: item.price * item.amount,
      image_url: item.image,
    }));

    var templateParams = {
      order_id: orderId,
      orders: mappedOrders,
      cost_shipping: shippingCost,
      cost_tax: taxCost,
      cost_total: totalCost.toLocaleString("pt-br",{style:"currency", currency: "BRL"}),
      user: data.user,
      email:  data.email,
      telephone: data.phone,
      neighborhood: data.neighborhood,
      region: data.region,
      patio: data.patio,
      locality: data.locality,
      complement: data.complement,
      uf: data.uf,
      reply_to: data.email,    
      logo_url: "https://i.ibb.co/FkWtyr3W/transparent-brand-logo.png"

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
          toast.success("O seu pedido foi enviado com sucesso!");
          

        },
        (err) => {
          console.log("Erro", err);
          toast.error("Erro ao enviar o seu pedido");

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
            className="bg-green-500 my-3 p-1 px-3  font-medium rounded"
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
          <p className="font-bold mt-4 ml-10">Total: {total.toLocaleString("pt-br",{style:"currency", currency: "BRL"})}</p>
          <p className="font-light mt-4 ml-10">
            No seu carrinho contém {cart.length} itens
          </p>
          <button
            className="text-center cursor-pointer bg-green-500 rounded-md w-40 p-2 mt-28 block m-auto"
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
            
            <form 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"  
              onSubmit={handleSubmit(sendEmail)}
            >
              <div className="flex  flex-col">
                <label htmlFor="user"  className="w-19 text-right md:w-23 lg:w-20">Nome:</label>
                <input 
                  type="text" 
                  id="user" 
                  {...register("user")} 
                  className="w-80 lg:w-96 block m-auto border h-8 px-2"
                />
                {errors.user && <span className="text-red-500 text-center">{errors.user.message}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="w-20 md:w-25 lg:w-20 text-right">E-mail:</label>
                <input 
                  type="email" 
                  id="email" 
                  {...register("email")} 
                  className="w-80 lg:w-96 block m-auto  border h-8 px-2"/>
                {errors.email && <span className="text-red-500 text-center">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="w-23 md:w-27 lg:w-23 text-right">Telefone:</label>
                 <InputMask 
                    mask="(99) 99999-9999" 
                    type="tel" 
                    id="phone" 
                    {...register("phone")} 
                    className="w-80 lg:w-96 block m-auto  border h-8 px-2">
                 </InputMask>
                 {errors.phone && <span className="text-red-500 text-center">{errors.phone.message}</span>}
              </div>

               <div className="flex flex-col">
                  <label htmlFor="cep" className="w-15 md:w-20 lg:w-16 text-right">CEP:</label> 
                  <InputMask 
                    mask="99999-999" 
                    type="text" 
                    id="cep" 
                    {...register("cep")} 
                    className="w-80 lg:w-96 block m-auto  border h-8 px-2">
                  </InputMask>
                  {errors.cep && <span className="text-red-500 text-center">{errors.cep.message}</span>}
              </div>

               <div className="flex flex-col">
                  <label htmlFor="region" className="w-20 md:w-25 lg:w-20 text-right">Região:</label>
                  <input 
                    type="text" 
                    id="region" 
                    {...register("region")}  
                    className="w-80 lg:w-96 block m-auto  border h-8 px-2"/>
                  {errors.region && <span className="text-red-500 text-center">{errors.region.message}</span>}
              </div>

               <div className="flex flex-col">
                  <label htmlFor="patio" className="w-27 md:w-33 lg:w-28 text-right">logradouro:</label>
                  <input 
                    type="text" 
                    id="patio" 
                    {...register("patio")} 
                    className="w-80 lg:w-96 block m-auto  border h-8 px-2"/>  
                  {errors.patio && <span className="text-red-500 text-center">{errors.patio.message}</span>}
              </div>

               <div className="flex flex-col">
                  <label htmlFor="complement" className="w-32 md:w-38 lg:w-33 text-right">Complemento:</label>
                  <input 
                    type="text" 
                    id="complement" 
                    {...register("complement")} 
                    className="w-80 lg:w-96 block m-auto  border h-8 px-2"/>
                  {errors.complement && <span className="text-red-500 text-center">{errors.complement.message}</span>}
               </div>

               <div className="flex flex-col">
                <label htmlFor="neighborhood" className="w-18 md:w-23 lg:w-20 text-right">Bairro:</label>
                <input 
                  type="text" 
                  id="neighborhood" 
                  {...register("neighborhood")}  
                  className="w-80 lg:w-96 block m-auto  border h-8 px-2"/>
                {errors.neighborhood && <span className="text-red-500 text-center">{errors.neighborhood.message}</span>}
              </div>

               <div className="flex flex-col">
                <label htmlFor="locality" className="w-26 md:w-33 lg:w-28 text-right">Localidade:</label>
                <input 
                  type="text" 
                  id="locality" 
                  {...register("locality")}  
                 className="w-80 lg:w-96 block m-auto  border h-8 px-2"/>
                {errors.locality && <span className="text-red-500 text-center">{errors.locality.message}</span>}
              </div>

               <div className="flex flex-col">
                <label htmlFor="uf" className="w-13 md:w-18 lg:w-14 text-right">UF:</label>
                <input 
                  type="text" 
                  id="uf" 
                  {...register("uf")} 
                  className="w-80 lg:w-96 block m-auto  border h-8 px-2"/>
                {errors.uf && <span className="text-red-500 text-center">{errors.uf.message}</span>}
              </div>

              <div className="flex justify-center col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="bg-green-500 cursor-pointer rounded-md p-1 font-bold mt-8 mb-8  w-48 block m-auto"
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
