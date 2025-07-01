import React from "react";
import Header from "../../components/Header";

const Accessibility = () => {
  return (
    <>
      <Header searchQuery={undefined} setSearchQuery={undefined} />
      <main>
        <section
          className="py-12 px-4 md:px-8 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-semibold mb-6 text-gray-800">
            Acessibilidade
          </h1>
          <p className="mb-4 text-black text-justify">
            Nosso site foi desenvolvido com foco em acessibilidade, buscando
            garantir que todas as pessoas — inclusive aquelas com deficiência
            visual, auditiva, motora ou cognitiva — possam navegar com
            autonomia, conforto e segurança.
          </p>
          <p className="mb-4 text-black text-justify">
            Aplicamos boas práticas baseadas nas diretrizes internacionais de
            acessibilidade para conteúdo web (WCAG 2.1), incluindo:
          </p>
          <ul className="list-disc ml-8 list-inside space-y-2 text-black text-justify">
            <li>
              Uso correto de marcação semântica (como headings, landmarks e
              labels)
            </li>
            <li>Compatibilidade com leitores de tela</li>
            <li>Texto alternativo em todas as imagens relevantes</li>
            <li>Navegação acessível por teclado</li>
            <li>Contraste adequado entre texto e fundo</li>
            <li>Foco visível em elementos interativos</li>
          </ul>
          <address className="not-italic mt-6 text-black">
            Se você encontrar qualquer dificuldade ou barreira ao navegar por
            este site, por favor entre em contato com nossa equipe. Estamos à
            disposição para melhorar:
            <a
              href="mailto:acessibilidade@techzone.com"
              className="text-blue-600 underline font-extralight ml-1"
            >
              acessibilidade@techzone.com
            </a>
          </address>
        </section>
      </main>
    </>
  );
};

export default Accessibility;
