import Header from "../../components/Header";
import { FaPix, FaTableCellsColumnLock, FaLink } from "react-icons/fa6";
import {FaUserSecret,FaQuestionCircle,FaExclamationTriangle} from "react-icons/fa";
import { RiCellphoneFill } from "react-icons/ri";
import { MdReportGmailerrorred, MdInstallDesktop } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { BsCreditCard } from "react-icons/bs";
import useTextFilter from "../../hooks/filter/useTextFilter";

const Security = () => {

  const { 
    filter, 
    setFilter, 
    filterText 
  } = useTextFilter();

  return (
    <>
      <Header searchQuery={filter} setSearchQuery={setFilter} />
      <main>
         <section>
            <h1 className="text-center mt-16  font-bold ">
              A Tech Zone acredita na privacidade e na segurança!
            </h1>
            <p className="text-justify max-w-80 md:max-w-2xl lg:max-w-3xl m-auto mt-12">
              Vivemos em um mundo cada vez mais conectado, onde a tecnologia traz
              praticidade e agilidade ao nosso dia a dia. Mas, ao mesmo tempo, surgem
              novas ameaças digitais que exigem atenção redobrada. Pensando nisso,
              reunimos aqui informações importantes para te ajudar a navegar com mais
              segurança
            </p>
            <p className="text-justify max-w-80 md:max-w-2xl lg:max-w-3xl m-auto mt-3">
              A proteção da sua privacidade também é uma prioridade para nós. Adotamos
              medidas de segurança eficazes e seguimos as melhores práticas para
              garantir que seus dados sejam tratados com o cuidado e respeito que
              merecem.
            </p>
          </section>

          {filterText("jamais,segurança, não fazemos, link falso, cobranças") && (
            <section className="grid  md:grid-cols-2 lg:grid-cols-4 gap-3 ml-8 mr-8  mt-28 mb-28">
              <article className="bg-white h-72   rounded-3xl text-center shadow-lg flex flex-col items-center justify-center">
                <FaPix
                  className="mb-8 shadow-2xl block text-yellow-800"
                  size={48}
                />
                <h3 className="text-center text-lg font-bold font-serif text-yellow-800 mb-8">
                  JAMAIS
                </h3>
                <p className="text-justify max-w-72">

                  pedimos que você realize pagamentos fora dos nossos sites ou
                  aplicativos oficiais — qualquer outra forma de cobrança deve ser
                  ignorada.
                </p>
              </article>

              <article className="bg-white h-72  rounded-3xl text-center shadow-lg flex flex-col items-center justify-center">
                <FaLink className="mb-8 shadow-2xl text-yellow-800" size={48} />
                <h3 className="text-center text-lg font-bold font-serif text-yellow-800  mb-8">
                  JAMAIS
                </h3>
                <p className="text-justify max-w-72">
                  
                  enviamos links por e-mail, SMS ou redes sociais solicitando a
                  atualização de seus dados — isso pode ser uma tentativa de fraude
                </p>
              </article>

              <article className="bg-white h-72 rounded-3xl text-center shadow-lg flex flex-col items-center justify-center">
                <FaTableCellsColumnLock
                  className="mb-8 shadow-2xl text-yellow-800"
                  size={48}
                />
                <h3 className="text-center text-lg font-bold font-serif text-yellow-800 mb-8">
                  JAMAIS
                </h3>
                <p className="text-justify max-w-72  ">
                  solicitamos o envio de senhas, informações bancárias ou dados
                  pessoais por qualquer canal de mensagem — proteja-se de golpes.
                </p>
              </article>

              <article className="bg-white h-72 rounded-3xl text-center shadow-lg flex flex-col items-center justify-center">
                <MdInstallDesktop
                  className="mb-8 shadow-2xl text-yellow-800"
                  size={48}
                />
                <h3 className="text-center text-lg font-bold font-serif text-yellow-800 mb-8">
                  JAMAIS
                </h3>
                <p className="text-justify max-w-72 md:max-w-80">
                  orientamos a instalação de qualquer programa ou aplicativo fora
                  das lojas oficiais — essa prática pode comprometer sua segurança
                </p>
              </article>
            </section>
          )}

          {filterText("detalhes,como saber sobre site falso") && (
            <section>
              <h2 className="text-center text-2xl font-bold">
                Atenção aos detalhes:
              </h2>
              <article className="flex flex-col md:flex-row items-center justify-center gap-14 mt-18 bg-white h-full p-8">
                <img
                  src="../../../images/fakeWebsite/notebookAndPhone.png"
                  alt="Ilustração explicando golpes com sites falsos"
                  className="w-96 rounded-2xl"
                />
                <div>
                  <p className="max-w-2xl text-justify">
                    Com o crescimento das compras online, também aumentaram os
                    golpes e fraudes virtuais. Uma das formas mais comuns de enganar
                    consumidores é através de sites falsos que imitam grandes lojas
                    ou marcas confiáveis. Esses sites muitas vezes têm um visual
                    semelhante ao original, mas escondem armadilhas perigosas como
                    roubo de dados, clonagem de cartões e não entrega dos produtos.
                  </p>

                  <p className="max-w-2xl text-justify">
                    Ao acessar qualquer loja virtual, verifique sempre o endereço do
                    site (URL). Sites confiáveis começam com “https://” e exibem um
                    cadeado ao lado da barra de endereço, indicando que a conexão é
                    segura. Desconfie de páginas com URLs estranhas, cheias de
                    números ou palavras incomuns, ou que tentam parecer com o nome
                    de uma loja famosa, mas com pequenas alterações (como
                    "zonetech.com" no lugar de "techzone.com.br").
                  </p>
                </div>
              </article>
            </section>
          )}

          {filterText("Como identificar um perfil de site falso") && (
            <section>
              <h2 className="text-center text-2xl font-bold mt-28">
                Como identificar um perfil de site falso:
              </h2>
              <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3 ml-8 mr-8  mt-28 mb-40">
                <article className="bg-white h-72   rounded-3xl text-center shadow-lg flex flex-col items-center justify-center">
                  <FaUserSecret
                    className="mb-8 shadow-2xl text-yellow-800"
                    size={48}
                  />
                  <p className="text-center text-lg font-bold font-serif text-yellow-800 mb-8">
                    Nome estranho ou incompleto
                  </p>
                  <p className="text-justify max-w-72   ">
                    
                    Perfis falsos usam nomes genéricos, cheios de números ou
                    parecidos com nomes reais, mas com alterações sutis.
                  </p>
                </article>

                <article className="bg-white h-72  rounded-3xl text-center shadow-lg flex flex-col items-center justify-center">
                  <FaQuestionCircle
                    className="mb-8 shadow-2xl text-yellow-800"
                    size={48}
                  />
                  <p className="text-center text-lg font-bold font-serif text-yellow-800  mb-8">
                    Nome tentando imitar empresas
                  </p>
                  <p className="text-justify max-w-72   ">
                    
                    Perfis como nomes diferentes do original são falsos e usam nomes
                    parecidos para enganar os usuários.
                  </p>
                </article>

                <article className="bg-white h-72 rounded-3xl text-center shadow-lg flex flex-col items-center justify-center">
                  <FaExclamationTriangle
                    className="mb-8 shadow-2xl text-yellow-800"
                    size={48}
                  />
                  <p className="text-center text-lg font-bold font-serif text-yellow-800 mb-8">
                    Mensagens suspeitas
                  </p>
                  <p className="text-justify max-w-72  ">
                    Textos com erros, tom urgente ou promessas fora da realidade
                    indicam golpe.
                  </p>
                </article>
              </div>
            </section>
          )}

          {filterText("denunciar,denuncie, site falso") && (
            <section className="p-16 mt-28 bg-green-500">
              <p className="text-center text-2xl font-bold p-3">Denuncie!</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
                <p className="max-w-2xl text-justify mr-8">
                  Encontrou um site suspeito ou sofreu uma tentativa de golpe? Não
                  ignore! Nos ajude a combater fraudes digitais denunciando páginas
                  falsas. Sua colaboração é essencial para manter a internet mais
                  segura e proteger outras pessoas de cair em armadilhas online.
                  Juntos, podemos enfrentar esse problema.
                </p>
                <div className="flex">
                  <RiCellphoneFill className="text-red-800" size={78} />
                  <MdReportGmailerrorred className="text-red-800" size={78} />
                </div>
              </div>
            </section>
          )}

          {filterText("forma de pagamento, pagamento, como pagar") && (
            <section>
              <h2 className="text-center text-2xl font-bold mt-28">
                Forma de pagamento
              </h2>
              <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3 ml-8 mr-8  mt-28 mb-28">
                <div className="bg-white h-72   rounded-3xl text-center shadow-lg flex flex-col items-center justify-center">
                  <FaPix
                    className="mb-8 shadow-2xl block text-yellow-800"
                    size={48}
                  />
                  <p className="text-center text-lg font-bold font-serif text-yellow-800  mb-8">
                    PIX
                  </p>
                  <p className="text-justify max-w-72 ">
                    Oferecemos a praticidade do Pix para você pagar de forma
                    instantânea, segura e sem nenhuma taxa adicional.
                  </p>
                </div>

                <div className="bg-white h-72   rounded-3xl text-center shadow-lg flex flex-col items-center justify-center">
                  <FaRegCreditCard
                    className="mb-8 shadow-2xl block text-yellow-800"
                    size={48}
                  />
                  <p className="text-center text-lg font-bold font-serif text-yellow-800  mb-8">
                    CRÉDITO
                  </p>
                  <p className="text-justify max-w-72   ">
                    Pague com cartão de crédito e parcele suas compras em até 10x
                    sem juros, garantindo mais flexibilidade.
                  </p>
                </div>

                <div className="bg-white h-72   rounded-3xl text-center shadow-lg flex flex-col items-center justify-center">
                  <BsCreditCard
                    className="mb-8 shadow-2xl block text-yellow-800"
                    size={48}
                  />
                  <p className="text-center text-lg font-bold font-serif text-yellow-800  mb-8">
                    DÉBITO
                  </p>
                  <p className="text-justify max-w-72   ">
                    Aceitamos cartões de débito para que você realize suas compras
                    com rapidez e segurança.
                  </p>
                </div>
              </div>
            </section>
          )}

          {filterText("contato,entrar em contato,email") && (
            <section>
              <h2 className="text-center text-2xl font-bold mt-28">
                Entre em contato
              </h2>
              <address className="not-italic mt-6 text-black flex justify-center text-center ">
                <h3>Entre em contato com o email:</h3> 
                <a
                  href="mailto:acessibilidade@techzone.com"
                  className="text-blue-600 underline font-extralight ml-1"
                >
                  techzoneseguranca@gmail.com
                </a>
              </address>
              <p className="text-center">Respondemos em até 48 horas!</p>
            </section>
          )}
      </main>
    </>
  );
};

export default Security;
