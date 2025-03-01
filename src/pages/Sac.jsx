import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Sac = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isOpenGarantia, setIsOpenGarantia] = useState(null);
  const [isOpenPagamento, setIsOpenPagamento] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const toggleAccordionGarantia = (indx) => {
    setIsOpenGarantia(isOpenGarantia === indx ? null : indx);
  };

  const toggleAccordionPagamento = (indx) => {
    setIsOpenPagamento(isOpenPagamento === indx ? null : indx);
  };

  const items = [
    {
      pedidos: [
        {
          title: "Como verificar o status do meu pedido?",
          content: (
            <div className="md:ml-28">
              <p className="text-center md:text-start">
                Para verificar o status e rastrear o seu pedido, siga estes
                passos:
              </p>
              <ul className="list-disc pl-5 md:ml-11 max-w-72 m-auto md:m-0 md:max-w-full">
                <li>Faça login no site com seu e-mail e senha</li>
                <li>
                  Na seção "Meus Pedidos", você verá a lista de todas as suas
                  compras
                </li>
                <li>
                  Clique no pedido que deseja rastrear para visualizar os
                  detalhes
                </li>
                <li>
                  O status será exibido e você poderá copiar o código de
                  rastreamento.
                </li>
              </ul>
            </div>
          ),
        },
        {
          title:
            "Posso alterar o endereço da entrega se o pedidio já estiver em transporte?",
          content: (
            <div className="max-w-72 m-auto  md:max-w-5xl">
              <p>
                Infelizmente, não é possível alterar o endereço de antrega após
                o pedido ter sido enviado e estar em transporte.No entanto,
                recomendamos que entre em contato com a nossa equipe de
                atendimento ao cliente o mais rápidp possível.Vmao verificar se
                há alguma solução ou orientação adicional para ajudar você.
              </p>
            </div>
          ),
        },
      ],
      garantia: [
        {
          title: "Preciso adicionar a garantia de um produto,como proceder?",
          content: (
            <div className="md:ml-28">
              <p className="mb-3 mt-3 text-center md:text-start">
                Para acionar a garantia do seu produto, siga os passoas abaixo:
              </p>
              <ol className="list-decimal pl-5  md:ml-11 max-w-72 m-auto md:m-0 md:max-w-full">
                <li>
                  
                  Confira a nota fiscal: Verifique a data da compra e
                  certifique-se de que o produto ainda está na garantia.
                </li>
                <li>
                  
                  Entre em Contato: Envie uma mensagem para o nosso SAC pelo
                  nosso email informando:
                </li>
                <ol className="list-decimal ml-10 mt-3 mb-8">
                  <li>Número da nota fiscal;</li>
                  <li>Descrição do problema;</li>
                  <li>Fotos ou vídeos do produto, se possível</li>
                </ol>
                <li>
                  
                  Aguarde e Análise: Nossa equipe analisará a solicitação e
                  forncerá as orienteações para o próximo passo"
                </li>
              </ol>
            </div>
          ),
        },
        {
          title: "Como cancelar meu pedido?",
          content: (
            <div className="md:ml-28">
              <p className="mb-3 mt-3 text-center md:text-start">
                Para cancelar seu pedido, siga estas etapas:
              </p>
              <ol className="list-decimal pl-5 space-y-3 max-w-72 md:max-w-full m-auto ">
                <li>
                  
                  Verifique o status do pedido: O cancelamento só pode ser feito
                  se o pedido ainda não estiver sido enviado;
                </li>
                <li>
                  
                  Entre em Contato com o SAC: Envie uma solicitação pelo email,
                  informando:
                </li>
                <ol className="list-decimal ml-14">
                  <li>O número do pedidio</li>
                  <li>O motivo do cancelamento</li>
                </ol>
                <li>
                  
                  Aguarde a confirmação: Nossa equipe analisará sua solicitação
                  e confirmará o cancelamento. Caso o pagamento já tinha sido
                  efetuado, realizaremos o estorno conforme o método de
                  pagamento utilizado.
                </li>
              </ol>
              <p className="max-w-72 m-auto md:max-w-full mt-3">
                Se o pedido já estiver sido enviado, você poderá recusar a
                entrega ou inciar o processo de devolução ao recebê-lo
              </p>
            </div>
          ),
        },
      ],
      pagamentos:[
        {
          title: "Qual é o prazo para confirmação de pagamento?",
          content: (
            <div className="">
              <p className="mb-3 max-w-80 text-center m-auto md:max-w-full">O prazo para confirmação de pagamento varia de acordo com o método escolhido:</p>
              <ol className="list-decimal pl-5 mb-3 max-w-72 m-auto space-y-3 md:w-full">
                <li><span className="font-bold">Cartão de Crédito: </span>A aprovação geralmente ocorre em até 24 horas após a compra, mas pode ser imediata  dependendo da operadora do cartão.</li>
                <li><span className="font-bold">Boleto Bancário: </span>Após o pagamento, o boleto pode levar até 2 dias úteis para ser compensado</li>
                <li><span className="font-bold">PIX: </span>Pagamentos via PIX são confirmados em até 1 hora, mas geralemnte ocorrem de forma instantânea</li>
              </ol>
              <p className="max-w-80 m-auto md:max-w-2xl">Caso o prazo tenha excedido e o pagamento ainda não tenha sido confirmado, entre em contato com nossa equipe de atendimento para verificarmos o status da sua compra. Estamos aqui para ajudar!</p>

            </div>
          )
        },
        {
          title: "Como funciona o estorno e qual é o prazo?",
          content: (
            <div>
              <p>O estorno do pagamento ocorre quando um pedido é cancelado ou quando há aglum probekma com o pagemento</p>
              <p>O processo funciona da seguinte forma:</p>
              <ol>
                <li>Solicitação de Estorno</li>
                <ul>
                  <li>O estorno será realizado após a confirmação do cancelamento ou da solicitação de devolução</li>
                  <li>Para pedidios pagos com cartão de crédito, o valor serpa estornado diretamente para a fatura do cartão</li>
                  <li>No caso de boleto bancário ou PIX, o estorno será feiro por meio de depósito bancário na conta do cliente</li>
                </ul>
                <li>Prazo para Estorno </li>
              </ol>
            </div>
          )
        }

      ]
    },
  ];

  return (
    <div>
      <Header />
      <h1 className="font-bold text-center mt-28 text-xl md:text-lg">
        SAC - Serviço de Atendimento ao Consumidor
      </h1>
      <h2 className="mt-20 text-2xl md:text-2xl mb-14 ml-8">MEU PEDIDO</h2>
      <div>
        {items.map((item, idx) => (
          <div key={idx}>
            {item.pedidos.map((pedido, index) => (
              <div key={index}>
                <button
                  className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 gap-12"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{pedido.title}</span>
                  {isOpen === index ? "-" : "+"}
                </button>
                <span className="p-4">
                  {isOpen === index && <p>{pedido.content}</p>}
                </span>
              </div>
            ))}
            <h2 className="mt-20 text-2xl mb-14 ml-8">
              GARANTIA OU ARREPENDIMENTO
            </h2>
            <div>
              {item.garantia.map((garantia, indx) => (
                <div key={indx}>
                  <button
                    className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 gap-12"
                    onClick={() => toggleAccordionGarantia(indx)}
                  >
                    <span>{garantia.title}</span>
                    <span>{isOpenGarantia === indx ? "-" : "+"}</span>
                  </button>
                  <span>
                    {isOpenGarantia === indx && <p>{garantia.content}</p>}
                  </span>
                </div>
              ))}
            </div>
            <h3 className="mt-20 text-2xl mb-14 ml-8">Pagamento e Estorno</h3>
            <div>
              {item.pagamentos.map((pagamento, ind) => (
                <div key={ind}>
                  <button
                     className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 gap-12"
                     onClick={() => toggleAccordionPagamento(ind)}
                  >
                    <span>{pagamento.title}</span>
                    <span>{isOpenPagamento === ind ? "-" : "+"}</span>
                  </button>
                  <span>
                    {isOpenPagamento === ind && <p>{pagamento.content}</p>}
                  </span>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Sac;

