import React from "react";
import Header from "../../components/Header";

const ShippingDeliveryPickup = () => {
  return (
    <div>
      <Header searchQuery={undefined} setSearchQuery={undefined} />
      <main>
        <section 
          id="envio" 
          className="py-12 px-4 md:px-8 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Envio, Entrega e Coleta
          </h2>
          <p className="mb-4 text-gray-800">
            Trabalhamos para garantir que seus pedidos cheguem com rapidez,
            segurança e transparência. Veja abaixo como funcionam as opções de
            envio, prazos e coleta:
          </p>

          <ul className="list-disc list-inside space-y-3 ml-8 text-gray-800">
            <li>
              <strong>Opções de Envio:</strong> Oferecemos entrega via
              transportadoras parceiras e Correios. Você pode escolher a melhor
              opção no momento da compra.
            </li>
            <li>
              <strong>Prazos de Entrega:</strong> O prazo varia conforme a sua
              localidade e o método escolhido, mas geralmente entregamos entre 3
              e 10 dias úteis.
            </li>

            <li>
              <strong>Rastreamento:</strong> Após o envio, você receberá um
              código para acompanhar o status da entrega diretamente no site da
              transportadora.
            </li>
            <li>
              <strong>Coleta no Ponto Físico:</strong> Para sua comodidade, você
              pode optar pela retirada dos produtos em nossa loja física,
              localizada no endereço:Rua Branco Cabo, 123 - Cabo Branco, CEP:
              12345-67. O pedido ficará disponível para coleta em até 2 dias
              úteis após a confirmação.
            </li>
            <li>
              <strong>Contato para Dúvidas:</strong> Se precisar de suporte
              sobre envio ou coleta, entre em contato com nosso atendimento pelo
              telefone email{" "}
              <a
                href="mailto:suporte@techzone.com"
                className="text-blue-600 underline"
              >
                suporte@techzone.com
              </a>
              .
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ShippingDeliveryPickup;
