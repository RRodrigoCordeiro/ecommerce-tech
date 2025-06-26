import React from "react";
import Header from "../../components/Header";

const Accessibility = () => {
  return (
    <div>
      <Header searchQuery={undefined} setSearchQuery={undefined} />
      <main>
        <section
          id="acessibilidade"
          className="py-12 px-4 md:px-8 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Acessibilidade
          </h2>
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
          <p className="mt-6 text-black">
            Se você encontrar qualquer dificuldade ou barreira ao navegar por
            este site, por favor entre em contato com nossa equipe. Estamos à
            disposição para melhorar:
            <a
              href="mailto:acessibilidade@seudominio.com"
              className="text-blue-600 underline font-extralight  ml-1"
            >
              acessibilidade@techzone.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Accessibility;
