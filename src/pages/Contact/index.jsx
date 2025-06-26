import React from 'react'
import Header from '../../components/Header'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputMask from 'react-input-mask';
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast'; 
import { contact } from '../../schemas/contactSchema';
 

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver:zodResolver(contact),
        defaultValues: {
            // valores que os campos começam, assim evita undefined
            name: '',
            email: '',
            phone: '',       
            message: '',
        },
    })

    const sendEmail = (data) => {

      var templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
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
                reset();
            },
            (err) => {
                console.log("Erro", err);
                toast.error("Erro ao enviar o seu pedido");
            }
        );  
    }

  return (
    <div>
        <Header/>
        <main>
            <h1 className="font-bold text-center mt-8 text-xl md:text-lg mb-8">Fale Conosco</h1>
            <section className='border w-88  md:w-2xl shadow-2xl  m-auto p-16 rounded-lg flex flex-col items-center'>
                <h2 className='text-center mb-8'>Envie sua mensagem</h2>
                <form 
                    onSubmit={handleSubmit(sendEmail)}
                >
                    <div className='flex flex-col mb-3'>
                        <label htmlFor='name'>Nome completo:</label>
                        <input 
                            type="text" 
                            id='name'     
                            className='border w-72 h-8'
                            {...register("name")}
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label htmlFor='email'>E-mail:</label>
                        <input 
                            type="email" 
                            id='email'   
                            className='border w-72 h-8'
                            {...register("email")}
                        />
                        {errors.email && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label htmlFor='phone'>Telefone:</label>
                        <InputMask
                            mask="(99) 99999-9999" 
                            type="tel" 
                            id="phone" 
                            className='border w-72 h-8'
                            {...register("phone")}
                        >
                        </InputMask>
                        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}   
                    </div>
                     <div className='flex flex-col'>
                        <label htmlFor='message'>Messagem:</label>
                        <textarea 
                          
                            id='message'  
                            className='border w-72  h-16'
                            {...register("message")}
                        />
                        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 rounded-md p-1 cursor-pointer  w-48 block m-auto mt-8"
                    >
                         Enviar Formulário
                    </button>
                </form>
            </section>
        </main>
    </div>
  )
}

export default Contact