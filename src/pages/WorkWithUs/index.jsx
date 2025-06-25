import React from 'react'
import Header from '../../components/Header'
import { IoRocket } from "react-icons/io5";
import { FaHandshake, FaTrophy,FaRegLightbulb,FaStar} from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import toast from 'react-hot-toast'; 
import { contactSchema } from '../../schemas/contactSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputMask from 'react-input-mask';
import emailjs from "@emailjs/browser";

const WorkWithUs = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const sendEmail = (data) => {

    var templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      interest: data.interest,
      message: data.message
    
    }

    emailjs
      .send(
        "service_yib8h7h",
        "template_graolzn",
        templateParams,
        "od3sxoc3hgGz0tKkv"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          toast.success("O formulário foi enviado com sucesso!");

        },
        (err) => {
          console.log("Erro", err);
          toast.error("Erro ao enviar o seu pedido");
          alert("Erro ao enviar email. Tente novamente.");
        }
      );    
  }
 
 
  return (
    <div>
      <Header/>
      <h2 className='text-center text-2xl font-bold mt-12 mb-3'>Por que trabalhar com a gente?</h2>
      <p className='max-w-80 md:max-w-2xl text-justify m-auto '>Na Tech Zone, você não encontra apenas um emprego — encontra propósito, crescimento e inovação todos os dias. Nosso time é movido por tecnologia, criatividade e a vontade de transformar o futuro. Aqui, valorizamos pessoas, incentivamos novas ideias e acreditamos que cada talento merece espaço para brilhar.</p>

      <div className='flex flex-col items-center mt-8'>
        <div className='flex items-center gap-3 mb-3'>
          <FaStar className=' shadow-2xl text-yellow-800' size={28}/>
          <h3>Ambiente Colaborativo</h3>
        </div>
        <p className='font-extralight w-80 md:w-full text-center'>Trabalhe ao lado de profissionais apaixonados e dispostos a compartilhar conhecimento.</p>
      </div>

      <div className='flex flex-col items-center mt-8'>
        <div className='flex items-center gap-3 mb-3'>
          <FaRegLightbulb className=' shadow-2xl text-yellow-800' size={28}/>
          <h3>Cultura e Inovação</h3>
        </div>
        <p className='max-w-2xl font-extralight w-80 md:w-full'>Estamos sempre em busca de soluções inteligentes e descomplicadas — e você pode fazer parte dessa transformação.</p>
      </div>

      <div className='flex flex-col items-center mt-8'>
        <div className='flex items-center gap-3 mb-3'>
          <FaHandshake className=' shadow-2xl text-yellow-800' size={28}/>
          <h3>Propóstio e Impacto</h3>
        </div>
        <p className='font-extralight w-80 md:w-full text-center'>Na Tech Zone, cada projeto tem um impacto real na vida das pessoas. Seu trabalho importa, e muito.</p>
      </div>

      <div className='flex flex-col items-center mt-12 '>
        <div className='flex items-center gap-3 mb-3'>
          <IoRocket className=' shadow-2xl text-yellow-800' size={28}/> 
          <h3>Desenvolvimento Profissional</h3>
        </div>
        <p className='max-w-2xl font-extralight w-80 md:w-full'>Investimos no seu crescimento com treinamentos, feedbacks constantes e oportunidades reais de evolução na carreira.</p>
      </div>

      <h2 className='text-center text-2xl font-bold mt-8'>Informações adicionais sobre a Tech Zone</h2>

      <div className='flex flex-col items-center mt-8'>
        <div className='flex items-center gap-3 mb-3'>
          <FaSuitcase className=' shadow-2xl text-yellow-800' size={28}/>
          <h3> O que buscamos:</h3>
        </div>
        <ul className='list-disc '>
          <li className='font-extralight '>Profissionais criativos e proativos;</li>
          <li  className='font-extralight'>Vontade de aprender e evoluir;</li>
          <li  className='font-extralight'>Compromisso com qualidade e resultados;</li>
          <li  className='font-extralight'>Colaboração em de equipe.</li>
        </ul>
      </div>

      <div className='flex flex-col items-center mt-8'>
        <div className='flex items-center gap-3 mb-3'>
          <FaTrophy className=' shadow-2xl text-yellow-800' size={28}/>
          <h3>Oferecemos:</h3>
        </div>
        <ul className='list-disc '>
          <li  className='font-extralight'>Ambiente descontraído e colaborativo;</li>
          <li  className='font-extralight'>Oportunidades reais de crescimento;</li>
          <li  className='font-extralight'>Projetos desafiadores e inovadores;</li>
          <li  className='font-extralight'>Flexibilidade e valorização do bem-estar.</li>
        </ul>
      </div>
      

      <h2 className='text-center text-2xl font-bold mt-8 mb-8'>Preencha o Formulário</h2>

      <div className='border w-88  md:w-2xl shadow-2xl  m-auto p-16 rounded-lg'>
        <form   onSubmit={handleSubmit(sendEmail)}>
          <div className='flex flex-col md:flex-row items-center justify-center gap-1 mb-3 mt-3'>
             <div className='flex flex-col'>
                <label htmlFor='name' className=''>Nome completo:</label>
                <input
                  type='text'
                  id='name'
                  className='border w-72 h-8'
                  {...register("name")}
                />
                {errors.name && <span className="text-red-500 text-center">{errors.name.message}</span>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor='email' className=''>E-mail:</label>
                  <input
                    type='email'
                    id='email'
                    className='border w-72 h-8'
                    {...register("email")}
                  />
                  {errors.email && <span className="text-red-500 text-center">{errors.email.message}</span>}
               </div>
               
          </div>

          <div className='flex flex-col  md:flex-row  items-center justify-center gap-1 mb-3 mt-3'>
             <div className='flex flex-col'>
                <label htmlFor='phone' className=''>Telefone:</label>
                <InputMask
                  mask="(99) 99999-9999" 
                  type="tel" 
                  id="phone" 
                  className='border w-72 h-8'
                  {...register("phone")}>
                </InputMask>
                {errors.phone && <span className="text-red-500 text-center">{errors.phone.message}</span>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor='interest' className=''>Área de interesse:</label>
                  <input
                    type='interest'
                    id='interest'
                    className='border w-72 h-8'
                    {...register("interest")}
                  />
                  {errors.interest && <span className="text-red-500 text-center">{errors.interest.message}</span>}
               </div>
          </div>

          <div className='flex items-center justify-center mb-8 mt-3'>
            <div className='flex flex-col'>
              <label htmlFor='message' className=''>Mensagem:</label>
                <textarea
                  type='text'
                  id='message'
                  className='border w-72 md:w-xl h-16'
                  {...register("message")}
                /> 
                {errors.message && <span className="text-red-500 text-center">{errors.message.message}</span>}
              </div>
          </div>
 
          <button
              type="submit"
              className="bg-green-500 rounded-md p-1 cursor-pointer  w-48 block m-auto"
          >
              Enviar Formulário
          </button>
        </form>
      </div>

            
    </div>
  )
}

export default WorkWithUs