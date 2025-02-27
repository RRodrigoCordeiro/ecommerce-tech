import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Sac = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const items = [
    {
      pedidos: [
        {
          title: "Como verificar o status do meu pedido?",
          content: (
            <div>
              <p>Para verificar o status e rastrear o seu pedido, siga estes passos:</p>
              <ul>
                <li>Faça login no site com seu e-mail e senha</li>
                <li>Na seção "Meus Pedidos", você verá a lista de todas as suas compras</li>
                <li>Clique no pedido que deseja rastrear para visualizar os detalhes</li>
                <li>O status será exibido e você poderá copiar o código de rastreamento.</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Alterar o endereço da entrega se o pedido estiver em transporte?",
          content: (
            <div>
              <p>Para alterar o endereço da entrega, siga os seguintes passos:</p>
              <ul>
                <li>Entre em contato com o suporte imediatamente</li>
                <li>Informe o novo endereço de entrega</li>
                <li>Verifique a possibilidade de alteração com a transportadora</li>
              </ul>
            </div>
          ),
        },
      ],
      garantia: [
        {
          title: "Como verificar o status da garantia do meu produto?",
          content: (
            <div>
              <p>Para verificar o status da garantia, siga os seguintes passos:</p>
              <ul>
                <li>Faça login na sua conta no site</li>
                <li>Vá para a seção "Meus Produtos"</li>
                <li>Escolha o produto e clique em "Verificar Garantia"</li>
                <li>O status da garantia será exibido</li>
              </ul>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <h1 className="font-bold text-center mt-28 text-lg">SAC - Serviço de Atendimento ao Consumidor</h1>
      <h2 className="mt-20 text-2xl">MEU PEDIDO</h2>

      
      {items.map((item, idx) => (
        <div key={idx}>
          {/* Pedidos Accordion */}
          <h3 className="font-bold">MEU PEDIDO</h3>
          {item.pedidos.map((pedido, index) => (
            <div key={index}>
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 gap-12"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-pink-500">{pedido.title}</span>
                <span>{isOpen === index ? "-" : "+"}</span>
              </button>
              {isOpen === index && <div className="p-4">{pedido.content}</div>}
            </div>
          ))}

         
          <h3 className="font-bold mt-10">GARANTIA</h3>
          {item.garantia.map((garantia, index) => (
            <div key={index}>
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 gap-12"
                onClick={() => toggleAccordion(index + item.pedidos.length)} 
              >
                <span className="text-pink-500">{garantia.title}</span>
                <span>{isOpen === index + item.pedidos.length ? "-" : "+"}</span>
              </button>
              {isOpen === index + item.pedidos.length && <div className="p-4">{garantia.content}</div>}
            </div>
          ))}
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default Sac;
