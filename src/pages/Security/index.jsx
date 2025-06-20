 import Header from '../../components/Header'
import { FaLink } from "react-icons/fa";
import { FaTableCellsColumnLock } from "react-icons/fa6";
import { FaPix } from "react-icons/fa6";
import { MdInstallDesktop } from "react-icons/md";
import { FaUserSecret, FaUserAlt, FaQuestionCircle, FaExclamationTriangle, FaClock } from "react-icons/fa";


const Security = () => {
  return (
    <div>
        <Header/>
        <h1 className='text-center mt-16  font-bold '>A Tech Zone acredita na privacidade e na segurança! </h1>
        <p className='text-justify max-w-sm md:max-w-2xl lg:max-w-3xl m-auto mt-12'>Vivemos em um mundo cada vez mais conectado, onde a tecnologia traz praticidade e agilidade ao nosso dia a dia. Mas, ao mesmo tempo, surgem novas ameaças digitais que exigem atenção redobrada. Pensando nisso, reunimos aqui informações importantes para te ajudar a navegar com mais segurança </p>
        <p className='text-justify max-w-sm md:max-w-2xl lg:max-w-3xl m-auto mt-3'>A proteção da sua privacidade também é uma prioridade para nós. Adotamos medidas de segurança eficazes e seguimos as melhores práticas para garantir que seus dados sejam tratados com o cuidado e respeito que merecem.</p>

        <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-3 ml-8 mr-8  mt-40 mb-40'> 
            <div className='bg-white h-72   rounded-3xl text-center shadow-lg flex flex-col items-center justify-center'>
                <FaPix className='mb-8 shadow-2xl block text-yellow-800' size={48}/>
                <p className='text-center text-lg font-bold font-serif text-yellow-800 mb-8'>JAMAIS</p>
                <p className='text-justify max-w-72   '> pedimos que você realize pagamentos fora dos nossos sites ou aplicativos oficiais — qualquer outra forma de cobrança deve ser ignorada.</p>
            </div>

            <div className='bg-white h-72  rounded-3xl text-center shadow-lg flex flex-col items-center justify-center'>
                <FaLink className='mb-8 shadow-2xl text-yellow-800' size={48}/>
                <p className='text-center text-lg font-bold font-serif text-yellow-800  mb-8'>JAMAIS</p>
                <p className='text-justify max-w-72   '> enviamos links por e-mail, SMS ou redes sociais solicitando a atualização de seus dados — isso pode ser uma tentativa de fraude</p>
            </div>

            <div className='bg-white h-72 rounded-3xl text-center shadow-lg flex flex-col items-center justify-center'>
                <FaTableCellsColumnLock className='mb-8 shadow-2xl text-yellow-800' size={48}/>
                <p className='text-center text-lg font-bold font-serif text-yellow-800 mb-8'>JAMAIS</p>
                <p  className='text-justify max-w-72  '>solicitamos o envio de senhas, informações bancárias ou dados pessoais por qualquer canal de mensagem — proteja-se de golpes.</p>
            </div>

            <div className='bg-white h-72 rounded-3xl text-center shadow-lg flex flex-col items-center justify-center'>
                <MdInstallDesktop className='mb-8 shadow-2xl text-yellow-800' size={48}/>

                <p className='text-center text-lg font-bold font-serif text-yellow-800 mb-8'>JAMAIS</p>
                <p  className='text-justify max-w-72 md:max-w-80'>orientamos a instalação de qualquer programa ou aplicativo fora das lojas oficiais — essa prática pode comprometer sua segurança</p>
            </div>
        </div>

        <div>
            <h2 className='text-center text-2xl font-bold'>Atenção aos detalhes:</h2>
            <div className='flex flex-col md:flex-row items-center justify-center gap-14 mt-18 bg-white h-full p-8'>
                <img 
                    src="../../../images/notebooks/teste.png" 
                    alt="" 
                    className='w-96 rounded-2xl'
                />
                <div >
                    <p className='max-w-2xl text-justify'>Com o crescimento das compras online, também aumentaram os golpes e fraudes virtuais. Uma das formas mais comuns de enganar consumidores é através de sites falsos que imitam grandes lojas ou marcas confiáveis. Esses sites muitas vezes têm um visual semelhante ao original, mas escondem armadilhas perigosas como roubo de dados, clonagem de cartões e não entrega dos produtos.</p>

                    <p className='max-w-2xl text-justify'>Ao acessar qualquer loja virtual, verifique sempre o endereço do site (URL). Sites confiáveis começam com “https://” e exibem um cadeado ao lado da barra de endereço, indicando que a conexão é segura. Desconfie de páginas com URLs estranhas, cheias de números ou palavras incomuns, ou que tentam parecer com o nome de uma loja famosa, mas com pequenas alterações (como "zonetech.com" no lugar de "techzone.com.br").</p>
                </div>
            </div>
        </div>

        <div> 
            <h2 className='text-center text-2xl font-bold mt-40'>Como identificar um perfil de site falso:</h2>

           <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-3 ml-8 mr-8  mt-40 mb-40'> 
                <div className='bg-white h-72   rounded-3xl text-center shadow-lg flex flex-col items-center justify-center'>
                    <FaUserSecret className='mb-8 shadow-2xl text-yellow-800' size={48} />
                    <p className='text-center text-lg font-bold font-serif text-yellow-800 mb-8'>Nome estranho ou incompleto</p>
                    <p className='text-justify max-w-72   '> Perfis falsos usam nomes genéricos, cheios de números ou parecidos com nomes reais, mas com alterações sutis.</p>
                </div>

                <div className='bg-white h-72  rounded-3xl text-center shadow-lg flex flex-col items-center justify-center'>
                    <FaQuestionCircle className='mb-8 shadow-2xl text-yellow-800' size={48}/>
                    <p className='text-center text-lg font-bold font-serif text-yellow-800  mb-8'>Nome tentando imitar empresas </p>
                    <p className='text-justify max-w-72   '> Perfis como nomes diferentes do original são falsos e usam nomes parecidos para enganar os usuários.</p>
                </div>

                <div className='bg-white h-72 rounded-3xl text-center shadow-lg flex flex-col items-center justify-center'>
                   <FaExclamationTriangle className='mb-8 shadow-2xl text-yellow-800' size={48} />
                    <p className='text-center text-lg font-bold font-serif text-yellow-800 mb-8'>Mensagens suspeitas</p>
                    <p  className='text-justify max-w-72  '>Textos com erros, tom urgente ou promessas fora da realidade indicam golpe.</p>
                </div>
            </div>
        </div>

        <div className='bg-green-500'>
            <p>Denuncie!</p>
            <p>cdcsdvsdvs</p>
        </div>

         <div>
            <h2 className='text-center mt-8 font-bold'>Forma de pagamento</h2>

            <div className='grid  md:grid-cols-3 gap-3  mt-12 '> 
                <div className='bg-white  h-full p-3 m-auto rounded-xl'>
                    <p className='text-center'>img</p>
                    <p className='text-center'>Jamais</p>
                    <p className='text-center'>fgirfhgiodcdscdscdsvcdscdscdcserioerhgerio</p>
                </div>

                <div className='bg-white md:w-96 h-full m-auto rounded-xl'>
                    <p>img</p>
                    <p>Jamais</p>
                    <p>fgirfhgioerhgioerhgerio</p>
                </div>

                <div className='bg-white md:w-96 h-full m-auto rounded-xl'>
                    <p>img</p>
                    <p>Jamais</p>
                    <p>fgirfhgioerhgioerhgerio</p>
                </div>
            </div>
        </div>

        <div>
            <h2>Entre em contato </h2>
        </div>



    </div>
  )
}

export default Security