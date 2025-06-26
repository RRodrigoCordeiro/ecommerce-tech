import React from "react";
import Header from "../../components/Header";

const ReturnsAndExchanges = () => {
  return (
    <div>
      <Header searchQuery={undefined} setSearchQuery={undefined} />
      <main>
        <section
          id="trocas-devolucoes"
          className="py-12 px-4 md:px-8 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Trocas e Devoluções
          </h2>
          <p className="mb-4 text-gray-800">
            Nosso compromisso é com a sua satisfação. Se você precisar trocar ou
            devolver um produto, siga as orientações abaixo:
          </p>

          <ul className="list-disc list-inside space-y-3 ml-8 text-gray-800">
            <li>
              <strong>Prazo para Trocas e Devoluções:</strong> Você tem até
              <strong> 7 dias corridos</strong> após o recebimento do produto
              para solicitar a devolução ou troca, conforme o Código de Defesa
              do Consumidor.
            </li>
            <li>
              <strong>Condições do Produto:</strong> O item deve estar em
              perfeitas condições, sem sinais de uso, com a embalagem original e
              todos os acessórios.
            </li>
            <li>
              <strong>Como Solicitar: </strong> Envie um e-mail para{" "}
              <a
                href="mailto:suporte@techzone.com"
                className="text-blue-600 underline"
              >
                suporte@techzone.com {" "}
              </a> 
                com o número do pedido, nome completo e motivo da solicitação.
            </li>
            <li>
              <strong>Custos de Envio:</strong> O custo do frete de devolução ou
              troca será analisado conforme o motivo (ex: defeito, erro no
              envio, arrependimento).
            </li>
            <li>
              <strong>Devolução por Arrependimento:</strong> Em caso de
              arrependimento, o reembolso será realizado após o recebimento e
              análise do produto.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ReturnsAndExchanges;
