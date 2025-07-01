import React, { useState } from 'react'
import Header from '../../components/Header'
import { GoChevronUp,GoChevronDown  } from "react-icons/go";
 
const Privacy = () => {
  const [isOpen, setisOpen] = useState()
  const [searchTerm, setSearchTerm] = useState("")

  const toggleAccordion = (index) => {
    setisOpen(isOpen === index ? null : index)
  };

  const items = [
    {
      title: "Coleta de Informações",
      content: (
        <div className='p-3'>
          <p className='pl-5'>Coletamos informações pessoais quando você:</p>
          <ul className="list-disc pl-5 md:ml-11 max-w-72 m-auto md:m-0 md:max-w-full ">
            <li>Faz uma compra;</li>
            <li> Preenche formulários ou entra em contato conosco;</li>
          </ul>
          <p className='pl-5 mt-3'>As informações coletadas podem incluir: nome, e-mail, telefone, endereço.</p>
        </div>
      )
    },
    {
      title: "Uso das Informações",
      content: (
        <div className='p-3'>
          <p className='pl-5 mb-3'>As informações coletadas são utilizadas para:</p>
          <ul className="list-disc pl-5 md:ml-11 max-w-72 m-auto md:m-0 md:max-w-full">
            <li>Enviar confirmações e atualizações sobre pedidos;</li>
            <li>Melhorar sua experiência de navegação;</li>
            <li> Enviar promoções e novidades (se autorizado);</li>
            <li>Oferecer suporte ao cliente</li>
          </ul>
        </div>
      )
    },
    {
      title: "Compartilhamento de Dados",
      content: (
        <div className='p-3'>
          <p className='pl-5 mb-3'>Não vendemos, alugamos ou compartilhamos suas informações pessoais, exceto:</p>
          <ul className="list-disc pl-5 md:ml-11 max-w-72 m-auto md:m-0 md:max-w-full">
            <li>Quando necessário para o cumprimento de obrigações legais;</li>
            <li> Com prestadores de serviço que atuam em nosso nome,respeitando esta política</li>
            <li>Empresas de prevenção à fraude</li>
            <li>Empresas de serviço de garantia estendida</li>
            <li>Empresas de serviço de instalação e/ou assistência técnica</li>
            <li>Consultores, advogados, contadores e outros prestadores de serviços</li>
          </ul>
        </div>
      )
    },
    {
      title:"Segurança",
      content: (
        <div className='p-3'>
          <p className='pl-5 mb-3'>Adotamos medidas técnicas e organizacionais para proteger suas informações pessoais contra acessos não autorizados, perda ou destruição dentre elas, citamos:</p>
          <ul className="list-disc pl-5 md:ml-11 max-w-72 m-auto md:m-0 md:max-w-full">
            <li>Controle de acesso físico aos ambientes corporativos;</li>
            <li>Acesso aos dados somente por profissionais que exercem funções necessárias para atendimento das finalidades específicas;</li>
            <li>Monitoramento contínuo dos sistemas de informações, de modo a prevenir, detectar e bloquear ações danosas;</li>
            <li>Armazenamento e transferência de dados utilizando métodos seguros.</li>
          </ul>
        </div>
      )
    },
    {
      title:"Direitos do Usuário",
      content: (
        <div className='p-3'>
          <p className='pl-5 mb-3'>A Tech Zone visa atender todos os direitos de nossos clientes, conforme definido na Lei, no que tange tratamento de dados pessoais:</p>
          <ul className="list-disc pl-5 md:ml-11 max-w-72 m-auto md:m-0 md:max-w-full">
            <li>Confirmar a existência de seus dados;</li>
            <li>Acessar os dados;</li>
            <li>Obter informação adicional sobre o uso e compartilhamento de dados;</li>
            <li>Corrigir os dados;</li>
            <li>Solicitar a portabilidade dos dados;</li>
            <li>Revogar o consentimento de algum tratamento de dados;</li>
          </ul>
        </div>
      )

    },
    {
      title:"Alterações na Política",
      content:(
        <p className='pl-5 p-3'>Esta política pode ser atualizada periodicamente. A versão mais recente estará sempre disponível em nosso site com data de revisão atualizada.</p>
      )

    },
  ]

  const filteredItems = items.filter((item) => 
    item.title.toLocaleLowerCase().includes(searchTerm.toLowerCase().trim())
  )

  return (
    <>
      <Header searchQuery={searchTerm} setSearchQuery={setSearchTerm}/>
      <main>
        <section className='flex flex-col md:flex-row items-center justify-center mt-8 space-x-8'>
          <img
            src="images/logos/transparent-brand-logo.png"
            alt='logo marca da Tech Zone'  
            className='w-48 lg:w-72 m-auto md:m-0'
          />
          <div className='space-y-8'>
            <h1 className='text-lg  font-bold text-center'>Políticas de Privacidade</h1>
            <p className='max-w-80 md:max-w-md lg:max-w-2xl text-justify'>A Tech Zone valoriza a transparência no tratamento de seus dados pessoais e acredita ser fundamental que você entenda como utilizamos essas informações, bem como os seus direitos como titular desses dados.Esta política de privacidade se aplica a todas as pessoas que interagem com nossos serviços de comércio eletrônico, tanto em nossa plataforma web quanto em nosso aplicativo móvel.Ressaltamos que alguns dados são essenciais para a prestação dos nossos serviços. Caso você opte por não fornecê-los, poderá não ser possível utilizar integralmente nossa plataforma ou aplicativo. Outros dados são opcionais, mas, sem o seu consentimento, algumas funcionalidades ou formatos podem ser limitados</p>
          </div>
        </section>

        <section className='mt-18'>
            {filteredItems.map((item,index) => (
              <article
                key={index}
              >
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="flex flex-row items-center justify-between w-full px-6 py-4 bg-gray-00 hover:bg-gray-200 transition-colors"
                  >
                    <span>{item.title}</span>
                    <span className='text-2xl text-gray-600'>{isOpen === index ? <GoChevronUp /> : <GoChevronDown />} </span>
                  </button>  
                  {isOpen === index && (
                    <div>
                      <p  className='bg-gray-200'>{item.content}</p>
                    </div>
                  )}
              </article> 
            ))}
        </section>
      </main>
    </>
  )
}

export default Privacy