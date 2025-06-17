import React from 'react'
import Header from '../../components/Header'

const Privacy = () => {
  return (
    <div>
      <Header searchQuery={undefined} setSearchQuery={undefined}/>
      <div className='flex flex-row items-center justify-center mt-8'>
        <img
          src="images/logos/transparent-brand-logo.png"  
        />
        <div >
          <h1>Políticas de Privacidade</h1>
          <p className='max-w-2xl'>Prezado Cliente, o KaBuM! entende que é fundamental explicar de modo transparente nossos processos de tratamento de dados, bem como esclarecer seus direitos como titular destes dados. Esta política se aplica à todas as pessoas que interagem com nossos serviços de Comércio Eletrônico na plataforma web e no aplicativo móvel. Lembrando que alguns dados são necessários para a prestação de nossos serviços. Desta forma, caso você não os queira fornecer, poderá optar por não utilizar nossa plataforma/aplicativo. Alguns outros dados não terão o caráter obrigatório, mas a ausência de seu consentimento poderá comprometer a prestação dos nossos serviços a você, como é o caso de recursos terem sua formatação e funcionalidades limitadas em nossa plataforma/aplicativo. KABUM S.A. é o controlador dos dados pessoais tratados em nossa plataforma/aplicativo.</p>

        </div>

      </div>
    </div>
  )
}

export default Privacy