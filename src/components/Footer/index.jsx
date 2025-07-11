import { useState } from "react";
import { Link } from "react-router-dom";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const items = [
    {
      title: "Atendimento",
      content: (
        <div>
          <p className="font-bold">Horários:</p>
          <ul>
            <li>Segunda à Sexta - <span className="font-extralight">08:00 às 20:00</span></li>
            <li>Sábado e Domingo - <span className="font-extralight">09:00 às 15:00 (Exceto feriados)</span></li>
          </ul>
        </div>
      ),
    },
    {
      title: "SAC", 
      content: (
        <div>
           <Link to="/sac">
             Serviço de Atendimento ao Cliente
           </Link>
        </div> 
      ),
    },
    {
      title: "Institucional",
      content: (
       <ul className="list-disc p-3 text-start">
          <li className="mb-3">
            <Link to="/security">
              Segurança & Privacidade
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/privacy">
              Políticas de Privacidade
            </Link>
          </li>
          <li className="mb-3">
          <a
            href="https://www.procon.df.gov.br/wp-content/uploads/2019/08/Codigo-do-consumidor-FINAL.pdf"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código de Defesa do Consumidor
          </a>
          </li>
          <li className="mb-3">
            <Link to="/about">
              Sobre nós
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/workWithUs">
              Trabalhe conosco
            </Link>
          </li>
        </ul>
      ),
    },
    { title: "Acessibilidade", 
      content:(
        <Link to="/accessibility">
          Acessibilidade
        </Link>
      ), 
    },
    {
      title: "Pedidos e compras",
      content:(
        <div>
          <ul className="list-disc p-3 text-start">
            <li>
              <Link to="/shippingDeliveryPickup" className="block mb-3">
                Envio, entrega e coleta
              </Link>
            </li>
            <li> 
              <Link to="/returnsAndExchanges" className="block mb-3">
                Devoluções e trocas
              </Link>
            </li>
            <li> 
              <Link to="/contact" className="block mb-3">
                Contate-nos
              </Link>
            </li>
          </ul>
        </div>
      ), 
    },
  ];

  return (
    <footer>
      <div className="hidden md:flex justify-center md:gap-9 lg:gap-28 mt-28 p-20 bg-[#D9D9D9]">
        <div>
          <section>
            <h2 className="font-bold text-[#000000] text-sm lg:text-lg ">
              Mídias Sociais
            </h2>
            <div className="mb-8 mt-8 space-y-2  grid grid-cols-2 ">
              <img
                src="/images/socialMedia/LogoInstagram.png"
                alt="Logo do instagram"
                width={192} 
                height={192} 
                className="w-10 "
              />
              <img
                src="/images/socialMedia/LogoFacebook.png"
                alt="Logo do Facebook"
                width={192}   
                height={192} 
                className="w-10 "
              />
              <img
                src="/images/socialMedia/LogoTwitter.png"
                alt="Logo do Twitter"
                width={192} 
                height={192} 
                className="w-10 "
              />
              <img
                src="/images/socialMedia/LogoYoutuber.png"
                alt="Logo do Youtuber"
                width={192} 
                height={192} 
                className="w-10 "
              />
              <img
                src="/images/socialMedia/Logolinkedin.png"
                alt="Logo do Linkedin"
                width={192} 
                height={192} 
                className="w-10 "
              />
              <img
                src="/images/socialMedia/LogoThreads.png"
                alt="Logo do Threads"
                width={192} 
                height={192} 
                className="w-12"
              />
            </div>
          </section>

          <section>
            <h2 className="font-bold text-[#000000]  lg:text-lg">
              Baixe os aplicativos
            </h2>
            <div className="mb-8 mt-8 space-y-8">
              <img
                src="/images/downloadsApp/GooglePlay.png"
                alt="Imagem da logo do Google Play"
                width={192} 
                height={192} 
              />
              <img
                src="/images/downloadsApp/AppStore.png"
                alt="Imagem da logo da App Store"
                width={192} 
                height={192} 
              />
            </div>
          </section>
        </div>

        <section>
            <h2 className="font-bold text-[#000000] lg:text-lg">Atendimento</h2>
            <div className="mb-8 mt-8 space-y-2">
              <p>Horário de Atendimento - (Exceto feriados)</p>
              <p className="max-w-36">
                <span className="font-semibold">Segunda a Sexta:</span> 08:00 às
                20:00
              </p>
              <p className="max-w-37">
                <span className="font-semibold">Sábado e Domingo:</span> 09:00
                às 15:00
              </p>
              <p className="font-semibold">Endereço:</p>
              <address className="not-italic max-w-52 -mt-2">
                Rua Branco Cabo, 123 – Cabo Branco, CEP: 12345-67
              </address>
            </div>
        </section>

        <section>
          <section>
            <h2 className="font-bold text-[#000000] lg:text-lg">SAC</h2>
            <Link to="/sac" className="mt-8 mb-8 block">
              Serviço de Atendimento ao Cliente  
            </Link>
          </section>

          <div>
            <p className="font-bold text-[#000000] text-lg mt-36">
              Institucional
            </p>
            <nav className="mb-8 mt-8 space-y-2">
              <Link to="/security" className="block">
                Segurança & Privacidade
              </Link>
              <Link to="/privacy" className="block" >
                Políticas de Privacidade
              </Link>
              <a
                href="https://www.procon.df.gov.br/wp-content/uploads/2019/08/Codigo-do-consumidor-FINAL.pdf"
                rel="noopener noreferrer"
                className="block"
                target="_blank"
    
              >
                 Código de Defesa do Consumidor
              </a>
              <Link to="/about" className="block">
                Sobre Nós
              </Link>
              <Link to="/workWithUs" className="block">
                 Trabalhe Conosco
              </Link>
            </nav>
          </div>
        </section>

        <section>
          <div>
            <h2 className="font-bold text-[#000000] lg:text-lg mb-8">Acessibilidade</h2>
            <Link to="/accessibility">
              <span >Acessibilidade</span>
            </Link>
          </div>
          <nav>
            <p className="font-bold text-[#000000] text-lg mt-28">
              Pedidos e Compras
            </p>
            <div className="mb-8 mt-8 space-y-2">
              <Link to="/shippingDeliveryPickup" className="block">
                <p>Envio, entrega e coleta</p>
              </Link>
              <Link to="/returnsAndExchanges" className="block">
                <p>Devoluções e trocas</p>
              </Link>
              <Link to="/contact" className="block">
                <p>Contate-nos</p>
              </Link>
            </div>
          </nav>
        </section>
      </div>

      <section className="flex flex-col md:hidden justify-center md:gap-9 lg:gap-28 mt-28 p-20 bg-[#D9D9D9]">
        <div className="max-w-lg space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-lg">
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 gap-12"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <span>{isOpen === index ? <GoChevronUp /> : <GoChevronDown />}</span>
              </button>
              {isOpen === index && (
                <div className="p-4 text-center bg-white border-t">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-black  text-center mt-12 font-bold text-lg">
            Midias Sociais
          </h2>
          <div className="mb-8 mt-8 space-y-2 grid grid-cols-3 justify-items-center items-center ">
            <img
              src="/images/socialMedia/LogoInstagram.png"
              alt="Logo do instagram"
              width={192} 
              height={192} 
              className="w-10 "
            />
            <img
              src="/images/socialMedia/LogoFacebook.png"
              alt="Logo do Facebook"
              width={192} 
              height={192} 
              className="w-10 "
            />
            <img
              src="/images/socialMedia/LogoTwitter.png"
              alt="Logo do Twitter"
              width={192} 
              height={192} 
              className="w-10 "
            />
            <img
              src="/images/socialMedia/LogoYoutuber.png"
              alt="Logo do Youtuber"
              width={192} 
              height={192} 
              className="w-10 "
            />
            <img
              src="/images/socialMedia/Logolinkedin.png"
              alt="Logo do Linkedin"
              width={192}  
              height={192} 
              className="w-10 "
            />
            <img
              src="/images/socialMedia/LogoThreads.png"
              alt="Logo do Threads"
              width={192} 
              height={192} 
              className="w-12 "
            />
          </div>
        </div>
        <div>
          <h2 className="text-black text-center mt-12 font-bold text-lg">
            Baixe os aplicativos
          </h2>
          <div className="mb-8 mt-8 flex flex-col items-center justify-center gap-8 ">
            <img
              src="/images/downloadsApp/GooglePlay.png"
              alt="Logo do Google Play"
              width={192} 
              height={192} 
              className="w-48"
            />
            <img
              src="/images/downloadsApp/AppStore.png"
              alt="Logo do App Store"
              width={192} 
              height={192} 
              className="w-48 "
            />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
