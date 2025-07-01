import React, { useState } from "react";
import Header from "../../components/Header"; 
import useTextFilter from "../../hooks/filter/useTextFilter";
import { GoChevronUp,GoChevronDown } from "react-icons/go";
 
// Accordion quando tem + de uma sessão
const Accordion = ({ title, content, isOpen, toggle }) => (
  <div>
    <button
      onClick={toggle}
      className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 gap-12"
    >
      <span>{title}</span>
      <span className='text-2xl text-gray-600'>{isOpen ? <GoChevronUp /> : <GoChevronDown />}</span>
    </button>
    {isOpen && <p className="p-4">{content}</p>}
  </div>
);

const Sac = () => {
  const { filter, setFilter, filterText } = useTextFilter();

  const [openAccordion, setOpenAccordion] = useState({
    pedidos: null,
    garantia: null,
    pagamentos: null,
    prevenda: null,
    cadastro: null,
  });

  const toggleAccordion = (section, index) => {
    setOpenAccordion((prevState) => ({
      ...prevState,
      [section]: prevState[section] === index ? null : index,
    }));
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
            "Posso alterar o endereço da entrega se o pedido já estiver em transporte?",
          content: (
            <div className="max-w-72  m-auto  md:max-w-md lg:max-w-5xl">
              <p>
                Infelizmente, não é possível alterar o endereço de entrega após
                o pedido ter sido enviado e estar em transporte.No entanto,
                recomendamos que entre em contato com a nossa equipe de
                atendimento ao cliente o mais rápido possível.Vamos verificar se
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
            <div className="lg:ml-28">
              <p className="mb-8 mt-3 text-center  lg:text-start">
                Para acionar a garantia do seu produto, siga os passoas abaixo:
              </p>
              <ol className="list-decimal pl-5  lg:ml-11 max-w-72 m-auto md:space-y-8 mb-8 md:max-w-96 lg:max-w-full">
                <li>
                  <span className="font-bold">Confira a nota fiscal: </span>
                  Verifique a data da compra e certifique-se de que o produto
                  ainda está na garantia.
                </li>
                <li>
                  <span className="font-bold">Entre em Contato: </span> Envie
                  uma mensagem para o nosso SAC pelo nosso email informando:
                </li>
                <ol className="list-decimal ml-10 mt-3 mb-8">
                  <li>Número da nota fiscal;</li>
                  <li>Descrição do problema;</li>
                  <li>Fotos ou vídeos do produto, se possível</li>
                </ol>
                <li>
                  <span className="font-bold">Aguarde e Análise:</span> Nossa
                  equipe analisará a solicitação e fornecerá  as orienteações para
                  o próximo passo"
                </li>
              </ol>
            </div>
          ),
        },
        {
          title: "Como cancelar meu pedido?",
          content: (
            <div className="lg:ml-28">
              <p className="mb-8 mt-3 text-center lg:text-start">
                Para cancelar seu pedido, siga estas etapas:
              </p>
              <ol className="list-decimal pl-5 space-y-3 max-w-72 md:max-w-96 md:space-y-8 lg:max-w-full m-auto ">
                <li>
                  <span className="font-bold">
                    Verifique o status do pedido:
                  </span>
                  O cancelamento só pode ser feito se o pedido ainda não estiver
                  sido enviado;
                </li>
                <li>
                  <span className="font-bold">Entre em Contato com o SAC:</span>
                  Envie uma solicitação pelo email, informando:
                </li>
                <ol className="list-decimal ml-14">
                  <li>O número do pedido</li>
                  <li>O motivo do cancelamento</li>
                </ol>
                <li>
                  <span className="font-bold">Aguarde a confirmação:</span>
                  Nossa equipe analisará sua solicitação e confirmará o
                  cancelamento. Caso o pagamento já tinha sido efetuado,
                  realizaremos o estorno conforme o método de pagamento
                  utilizado.
                </li>
              </ol>
              <p className="max-w-72  m-auto md:max-w-96 mt-8">
                Se o pedido já estiver sido enviado, você poderá recusar a
                entrega ou iniciar o processo de devolução ao recebê-lo
              </p>
            </div>
          ),
        },
      ],
      pagamentos: [
        {
          title: "Qual é o prazo para confirmação de pagamento?",
          content: (
            <div>
              <p className="mb-8 max-w-80 text-center m-auto md:max-w-full">
                O prazo para confirmação de pagamento varia de acordo com o
                método escolhido:
              </p>
              <ol className="list-decimal pl-5 mb-3 max-w-72 m-auto space-y-8 md:w-full">
                <li>
                  <span className="font-bold">Cartão de Crédito: </span>A
                  aprovação geralmente ocorre em até 24 horas após a compra, mas
                  pode ser imediata dependendo da operadora do cartão.
                </li>
                <li>
                  <span className="font-bold">Boleto Bancário: </span>Após o
                  pagamento, o boleto pode levar até 2 dias úteis para ser
                  compensado
                </li>
                <li>
                  <span className="font-bold">PIX: </span>Pagamentos via PIX são
                  confirmados em até 1 hora, mas geralemnte ocorrem de forma
                  instantânea
                </li>
              </ol>
              <p className="max-w-80 m-auto md:max-w-2xl mt-8 mb-8 ">
                Caso o prazo tenha excedido e o pagamento ainda não tenha sido
                confirmado, entre em contato com nossa equipe de atendimento
                para verificarmos o status da sua compra. Estamos aqui para
                ajudar!
              </p>
            </div>
          ),
        },
        {
          title: "Como funciona o estorno e qual é o prazo?",
          content: (
            <div>
              <p className="max-w-80 m-auto md:max-w-2xl">
                O estorno do pagamento ocorre quando um pedido é cancelado ou
                quando há aglum problema com o pagemento
              </p>
              <p className="text-center mt-8 mb-8">
                O processo funciona da seguinte forma:
              </p>
              <ol className=" flex flex-col justify-center  items-center space-y-10 list-decimal pl-5 ">
                <li className="">Solicitação de Estorno:</li>
                <ul className="max-w-60 md:max-w-72  m-auto mb-8 list-disc space-y-8">
                  <li>
                    O estorno será realizado após a confirmação do cancelamento
                    ou da solicitação de devolução
                  </li>
                  <li>
                    Para pedidos pagos com cartão de crédito, o valor será
                    estornado diretamente para a fatura do cartão
                  </li>
                  <li>
                    No caso de boleto bancário ou PIX, o estorno será feito por
                    meio de depósito bancário na conta do cliente
                  </li>
                </ul>
                <li>Prazo para Estorno: </li>
                <ul className="list-disc max-w-80 space-y-8">
                  <li>
                    <span className="font-bold">Cartão de Crédito: </span>O
                    estorno pode ser processado em até 10 dias úteis, mas o
                    crédito pode demorar até 2 faturas para aprecer no extrato
                    do seu cartão.
                  </li>
                  <li>
                    <span className="font-bold">Boleto ou PIX: </span>O estorno
                    geralemnte ocorre em até 7 dias úteis,dependendo do banco
                  </li>
                </ul>
              </ol>
              <p className="max-w-80 m-auto md:max-w-2xl mt-8">
                lembre-se de que o prazo pode variar dependendo da operadora de
                pagamento ou instituição bancária envolvida. Se o estorno não
                aparecer dentro do prazo, entre em contato com nosso SAC para
                que possamos verificar a situação.
              </p>
            </div>
          ),
        },
        {
          title: "Como comprar usando o PIX?",
          content: (
            <div>
              <p className="max-w-72 md:max-w-full text-center m-auto mb-8 mt-8">
                Para realizar uma compra utilizando o PIX, siga os passos
                abaixo:
              </p>
              <ol className="list-decimal pl-5 space-y-10 md:ml-8">
                <li>
                  <span className="font-bold">Escolha o Produto:</span>
                  Selecione os itens que deseja comprar e adicione-os ao seu
                  carrinho de compras
                </li>
                <li>
                  <span className="font-bold">
                    Selecione o PIX como forma de pagamento:
                  </span>
                  Na página de checkout, escolha o PIX como método de pagamento.
                </li>
                <li>
                  <span className="font-bold">
                    Receba as informaçõs do PIX:
                  </span>
                  Após selecionar o PIX, você verá um QR Code ou as informações
                  bancárias para realizar o pagamento.
                </li>
                <li>
                  <span className="font-bold">Efetue o pagamento</span>Abra seu
                  aplicativo bancário e utilize a opção de pagamento via PIX,
                  escaneando o QR Code ou copiando as informações para realizar
                  a transferência.
                </li>
                <li>
                  <span className="font-bold">Confirmação do pagamento: </span>O
                  pagamento será confirmado de forma instantâne ou em até 1
                  hora. Após a confirmação o pedidos será processado e enviado
                </li>
              </ol>
              <p className="mt-8 max-w-72 md:max-w-96 m-auto ">
                Caso tenha algum problema durante o pagamento ou precise de
                ajuda, entre em contato com nossa equipe de SAC
              </p>
            </div>
          ),
        },
      ],
      prevenda: [
        {
          title: "O que é um produto pré-venda?",
          content: (
            <div>
              <p className="max-w-72 md:max-w-full md:text-center  m-auto mb-8">
                Um produto pré-venda é um item que ainda não está disponível em
                estoque, mas pode ser adquirido antecipadamente.
              </p>
              <p className="max-w-72 md:max-w-96  m-auto mb-8">
                Essa modalidade é geralmente usada para lançamentos excluidos ou
                itens com alta demanda
              </p>
              <ol className="list-decimal pl-5 space-y-8 md:max-w-96 md:m-auto">
                <li>
                  <span className="font-bold">Compra Antecipada: </span>Você
                  realiza a compra e garante a reserva do produto antes que ele
                  esteja disponível no mercado.
                </li>
                <li>
                  <span className="font-bold">Prazo de entrega: </span>A entrega
                  será feita somente após o produto estar disponível. O prazo
                  estimando para o envio será informado na página do produto ou na
                  confirmação do pedido
                </li>
                <li>
                  <span className="font-bold">
                    Garantia de Disponibilidade:
                  </span>
                  Ao comprar na pré-venda você tem prioridade na aquisição do
                  item, evitando a possibilidade de esgotar rapidamente após o
                  lançamento
                </li>
              </ol>
              <p className="max-w-80 md:max-w-full text-center m-auto mt-8">
                Se tiver dúvidas sobre os prazos ou disponibilidade, entre em
                contato com o nosso SAC.
              </p>
            </div>
          ),
        },
        {
          title: "Posso cancelar um pedido que contém um item em pré-venda?",
          content: (
            <div>
              <p className="max-w-72 md:max-w-96 lg:max-w-full lg:text-center m-auto mb-8">
                Sim, é possível cancelar um pedido que contém um item em
                pré-venda, desde que o produto ainda não tenha sido enviado.
              </p>
              <ol className="list-decimal pl-5 space-y-8 md:ml-8">
                <li className="font-bold">Antes de envio:</li>
                <ul className="list-disc pl-5">
                  <li>
                    Entre em contato com o nosso SAC e solicite o cancelamento
                  </li>
                  <li>
                    Caso o pagamento já tenha sido efetuado, realizaremos o
                    estorno de acordo com o método de pagamento utilizado.
                  </li>
                </ul>
                <li className="font-bold"> Após o Envio</li>
                <ul>
                  <li>
                    Se o item já foi enviado, o cancelamento não será
                    possível.No entando, você pode recusar a entrega ou
                    solicitar a devolução após recebê-lo
                  </li>
                </ul>
                <li className="font-bold">Prazo para Estorno:</li>
                <ul className="list-disc pl-5">
                  <li>
                    O prazo para reembolso segue o método de pagamento
                    utilizando e será informado no momento da solicitação.
                  </li>
                </ul>
              </ol>
            </div>
          ),
        },
      ],
      cadastro: [
        {
          title: "Como posso fazer meu cadastro?",
          content: (
            <div>
              <p className="max-w-72 md:max-w-full text-center m-auto mb-8">
                Para criar seu cadastro em nosso site, siga os passos abaixo:
              </p>
              <ol className="list-decimal pl-5 space-y-10 md:ml-8">
                <li className="font-bold">Acesse o site:</li>
                <ul>
                  <li>
                    Entre no nosso site e clique na opção "cadastre-se" ou
                    "Criar conta", localizada no canto superior direito
                  </li>
                </ul>
                <li className="font-bold">Preencha os campos:</li>
                <ul className="list-disc">
                  <li>Informe seus dados pessoais</li>
                  <li>Crie uma senha segura para acessar sua conta</li>
                </ul>
                <li className="font-bold">Confirme seu cadastro</li>
                <ul className="list-disc">
                  <li>Após preencher as informações, clique em "cadastro"</li>
                </ul>
                <li className="font-bold">Acesso à conta:</li>
                <ul className="list-disc">
                  <li>
                    Após a confirmação, faça login com seu e-mail e senha para
                    acessar sua conta e aproveitar todos os nosso serviços
                  </li>
                </ul>
              </ol>
            </div>
          ),
        },
      ],
    },
  ];
  return (
    <>
      <Header searchQuery={filter} setSearchQuery={setFilter} />

      <h1 className="font-bold text-center mt-28 text-xl md:text-lg">
        SAC - Serviço de Atendimento ao Consumidor
      </h1>
      <section>
        {filterText("MEU PEDIDO") && (
          <section>
            <h2 className="mt-20 text-2xl mb-14 ml-8">MEU PEDIDO</h2>
            {items.map((item, idx) => (
              <div key={idx}>
                {item.pedidos.map((pedido, index) => (
                  <article>
                    <Accordion
                      key={index}
                      title={pedido.title}
                      isOpen={openAccordion.pedidos === index}
                      content={pedido.content}
                      toggle={() => toggleAccordion("pedidos", index)}
                    />
                  </article>
                ))}
              </div>
            ))}
          </section>
        )}

        {filterText("GARANTIA OU ARREPENDIMENTO") && (
          <section>
            <h2 className="mt-20 text-2xl mb-14 ml-8">
              GARANTIA OU ARREPENDIMENTO
            </h2>
            {items.map((item, idx) => (
              <div key={idx}>
                {item.garantia.map((garantia, indx) => (
                  <article>
                    <Accordion
                      key={indx}
                      title={garantia.title}
                      isOpen={openAccordion.garantia === indx}
                      content={garantia.content}
                      toggle={() => toggleAccordion("garantia", indx)}
                    />
                  </article>
                ))}
              </div>
            ))}
          </section>
       )}

        {filterText("PAGAMENTO") && (
          <section>
            <h3 className="mt-20 text-2xl mb-14 ml-8">PAGAMENTO E ESTORNO</h3>
            {items.map((item, idx) => (
              <div key={idx}>
                {item.pagamentos.map((pagamento, ind) => (
                  <article>
                    <Accordion
                      key={ind}
                      title={pagamento.title}
                      isOpen={openAccordion.pagamentos === ind}
                      content={pagamento.content}
                      toggle={() => toggleAccordion("pagamentos", ind)}
                    />
                  </article>
                ))}
              </div>
            ))}
          </section>
        )}

        {filterText("PRÉ-VENDA") && (
          <section>
            <h3 className="mt-20 text-2xl mb-14 ml-8">PRODUTOS PRÉ-VENDA</h3>
            {items.map((item, idx) => (
              <div key={idx}>
                {item.prevenda.map((prevendas, indexPrevenda) => (
                  <article>
                    <Accordion
                      key={indexPrevenda}
                      title={prevendas.title}
                      isOpen={openAccordion.prevenda === indexPrevenda}
                      content={prevendas.content}
                      toggle={() => toggleAccordion("prevenda", indexPrevenda)}
                    />
                  </article>
                ))}
              </div>
            ))}
          </section>
        )}

        {filterText("CADASTRO") && (
          <section>
            <h3 className="mt-20 text-2xl mb-14 ml-8">CADASTRO</h3>
            {items.map((item, idx) => (
              <div key={idx}>
                {item.cadastro.map((cadastros, indexCadastro) => (
                  <article>
                    <Accordion
                      key={indexCadastro}
                      title={cadastros.title}
                      isOpen={openAccordion.cadastro === indexCadastro}
                      content={cadastros.content}
                      toggle={() => toggleAccordion("cadastro", indexCadastro)}
                    />
                  </article>
                ))}
              </div>
            ))}
          </section>
        )}
      </section>
    </>
  );
};
export default Sac;
