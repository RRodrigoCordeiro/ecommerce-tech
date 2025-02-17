import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center md:gap-9  lg:gap-28 mt-28 p-20  bg-[#D9D9D9]">
      <div>
        <div>
          <p className="font-bold text-blue-600 text-sm lg:text-lg ">Mídias Sociais</p>
          <div className="mb-8 mt-8 space-y-2  grid grid-cols-2 ">
            <img 
                src="/images/LogoInstagram.png"
                alt="Logo do instagram"
                className="w-10 "
            />
            <img 
                src="/images/LogoFacebook.png"
                alt="Logo do instagram"
                className="w-10 "
            />
            <img 
                src="/images/LogoTwitter.png"
                alt="Logo do instagram"
                className="w-10 "
            />
            <img 
                src="/images/LogoYoutuber.png"
                alt="Logo do instagram"
                className="w-10 "
            />
            <img 
                src="/images/Logolinkedin.png"
                alt="Logo do instagram"
                className="w-10 "
            />
            <img 
                src="/images/LogoInstagram.png"
                alt="Logo do instagram"
                className="w-10 "
            />
            {/* <p>LOGO FACEBOOK</p>
            <p>LOGO INSTAGRAM</p>
            <p>LOGO TWITTER</p>
            <p>LOGO YOUTUBER</p>
            <p>LOGO LINKEDLIN</p>
            <p>LOGO TIKTOK</p> */}
          </div>
        </div>

        <div>
          <p className="font-bold text-blue-600  lg:text-lg">Baixe os aplicativos</p>
          <div className="mb-8 mt-8 space-y-8">
            <img
              src="/images/GooglePlay.png"
              alt="Imagem da logo do Google Play"
            />
            <img
              src="/images/AppStore.png"
              alt="Imagem da logo do Google Play"
            />
          </div>
        </div>
      </div>

      <div>
        <div>
            <p className="font-bold text-blue-600 lg:text-lg">Atendimento</p>
            <div className="mb-8 mt-8 space-y-2">
                <p>Horário de Atendimento - (Exceto feriados)</p>
                <p className="max-w-36"><span className="font-semibold">Segunda a Sexta:</span> 08:00 às 20:00</p>
                <p className="max-w-37"><span className="font-semibold">Sábado e Domingo:</span> 09:00 às 15:00</p>
                <p className="font-semibold">Endereço:</p>
                <p className="max-w-52 -mt-2">Rua Branco Cabo,123 - Cabo Branco, cep: 12345-67</p>
            </div>
        </div>
      </div>

      <div>
         <div>
            <p className="font-bold text-blue-600 lg:text-lg">SAC</p>
            <p className="mt-8 mb-8">Clique aqui</p>
         </div>
         <div>
            <p className="font-bold text-blue-600 text-lg mt-36">Institucional</p>
            <div className="mb-8 mt-8 space-y-2" >
                <p>Segurança & Privacidade</p>
                <p>Políticas de Privacidade</p>
                <p>Código de Defesa do Consumidor</p>
                <p>Sobre Nós</p>
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
            <p className="font-bold text-blue-600 text-lg mt-36">Pedidos e Compras</p>
            <div className="mb-8 mt-8 space-y-2">
                <p>Envio, entrega e coleta</p>
                <p>Devoluções e trocas</p>
                <p>Contate-nos</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
