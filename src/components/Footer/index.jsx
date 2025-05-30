import { useState } from "react";
import { Link } from "react-router-dom";

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
          <p>Horários:</p>
          <ul>
            <li>Segunda à Sexta - 08:00 às 20:00</li>
            <li>Sábado e Domingo - 09:00 às 15:00 (Exceto feriados)</li>
          </ul>
        </div>
      ),
    },
    { title: "SAC", content: "Clique aqui" },
    {
      title: "Institucional",
      content: (
        <ul>
          <li>Segurança & Privacidade</li>
          <li>Políticas de Privacidade</li>
          <li>Código de Defesa do Consumidor</li>
          <li>Sobre nós</li>
          <li>Trabalhe conosco</li>
        </ul>
      ),
    },
    { title: "Acessibilidade", content: "Acessibilidade" },
    {
      title: "Pedidos e compras",
      content: "Envio, entrega e coleta; Devoluções e trocas; Contate-nos",
    },
  ];

  return (
    <div>
      <div className="hidden md:flex justify-center md:gap-9 lg:gap-28 mt-28 p-20 bg-[#D9D9D9]">
        <div>
          <div>
            <p className="font-bold text-blue-600 text-sm lg:text-lg ">
              Mídias Sociais
            </p>
            <div className="mb-8 mt-8 space-y-2  grid grid-cols-2 ">
              <img
                src="/images/socialMedia/LogoInstagram.png"
                alt="Logo do instagram"
                className="w-10 "
              />
              <img
                src="/images/socialMedia/LogoFacebook.png"
                alt="Logo do Facebook"
                className="w-10 "
              />
              <img
                src="/images/socialMedia/LogoTwitter.png"
                alt="Logo do Twitter"
                className="w-10 "
              />
              <img
                src="/images/socialMedia/LogoYoutuber.png"
                alt="Logo do Youtuber"
                className="w-10 "
              />
              <img
                src="/images/socialMedia/Logolinkedin.png"
                alt="Logo do Linkedin"
                className="w-10 "
              />
              <img
                src="/images/socialMedia/LogoInstagram.png"
                alt="Logo do instagram"
                className="w-10 "
              />
            </div>
          </div>

          <div>
            <p className="font-bold text-blue-600  lg:text-lg">
              Baixe os aplicativos
            </p>
            <div className="mb-8 mt-8 space-y-8">
              <img
                src="/images/downloadsApp/GooglePlay.png"
                alt="Imagem da logo do Google Play"
              />
              <img
                src="/images/downloadsApp/AppStore.png"
                alt="Imagem da logo da App Store"
              />
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="font-bold text-blue-600 lg:text-lg">Atendimento</p>
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
              <p className="max-w-52 -mt-2">
                Rua Branco Cabo,123 - Cabo Branco, cep: 12345-67
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="font-bold text-blue-600 lg:text-lg">SAC</p>
            <Link to="/sac">
              <p className="mt-8 mb-8">Clique aqui</p>
            </Link>
          </div>
          <div>
            <p className="font-bold text-blue-600 text-lg mt-36">
              Institucional
            </p>
            <div className="mb-8 mt-8 space-y-2">
              <Link className="block">
                <p>Segurança & Privacidade</p>
              </Link>
              <Link className="block">
                <p>Políticas de Privacidade</p>
              </Link>
              <Link className="block">
                <p>Código de Defesa do Consumidor</p>
              </Link>
              <Link to="/about" className="block">
                <p>Sobre Nós</p>
              </Link>
              <p>Trabalhe Conosco</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="font-bold text-blue-600 lg:text-lg">Acessibilidade</p>
            <p className="mb-8 mt-8">Acessibilidade</p>
          </div>
          <div>
            <p className="font-bold text-blue-600 text-lg mt-36">
              Pedidos e Compras
            </p>
            <div className="mb-8 mt-8 space-y-2">
              <p>Envio, entrega e coleta</p>
              <p>Devoluções e trocas</p>
              <p>Contate-nos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:hidden justify-center md:gap-9 lg:gap-28 mt-28 p-20 bg-[#D9D9D9]">
        <div className="max-w-lg space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-lg">
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 gap-12"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <span>{isOpen === index ? "-" : "+"}</span>
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
          <h1 className="text-blue-600 text-center mt-12 font-bold text-lg">
            Midias Sociais
          </h1>
          <div className="mb-8 mt-8 space-y-2 grid grid-cols-3 justify-items-center items-center ">
            <img
              src="/images/socialMedia/LogoInstagram.png"
              alt="Logo do instagram"
              className="w-10 "
            />
            <img
              src="/images/socialMedia/LogoFacebook.png"
              alt="Logo do Facebook"
              className="w-10 "
            />
            <img
              src="/images/socialMedia/LogoTwitter.png"
              alt="Logo do Twitter"
              className="w-10 "
            />
            <img
              src="/images/socialMedia/LogoYoutuber.png"
              alt="Logo do Youtuber"
              className="w-10 "
            />
            <img
              src="/images/socialMedia/Logolinkedin.png"
              alt="Logo do Linkedin"
              className="w-10 "
            />
            <img
              src="/images/socialMedia/LogoInstagram.png"
              alt="Logo do instagram"
              className="w-10 "
            />
          </div>
        </div>
        <div>
          <h1 className="text-blue-600 text-center mt-12 font-bold text-lg">
            Baixe os aplicativos
          </h1>
          <div className="mb-8 mt-8 flex flex-col items-center justify-center gap-8 ">
            <img
              src="/images/downloadsApp/GooglePlay.png"
              alt="Logo do Google Play"
              className="w-48"
            />
            <img
              src="/images/downloadsApp/AppStore.png"
              alt="Logo do App Store"
              className="w-48 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
