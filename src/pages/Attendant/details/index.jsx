import React from 'react'
import { useAttendantById } from '../../../hooks/attendant/useAttendantById'; 
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header';
const AttendantDetails = () => {
  const { id } = useParams();
  const { data: attendants, isLoading, error} = useAttendantById(id);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  
  return (
    <div>
      <Header/>
        
          {attendants && (
            <div className='flex flex-col md:flex-row justify-center gap-20 mt-11 '>
              <img
                src={attendants.image}
                alt={attendants.name}
          
                className='h-48 w-48 block m-auto md:m-0 md:h-48 '
              />
              <div className='space-y-3 gap-3 text-justify m-auto md:m-0 grid  lg:grid-cols-2'>
                <p className='font-light'><span className='font-semibold'>Email:</span> {attendants.email}</p>
                <p  className='font-light'><span className='font-semibold'>Nome:</span> {attendants.name}</p>
                <p  className='font-light'><span className='font-semibold'>Função:</span> {attendants.role}</p>
                <p  className='font-light'><span className='font-semibold'>Telefone:</span> {attendants.phone}</p>
                <p  className='font-light'><span className='font-semibold'>Nível de Satisfação:</span> {attendants.rating}</p>
                <p  className='font-light'><span className='font-semibold'>Horário de Trabalho: </span>{attendants.working_hours}</p>
              </div>
            </div>
           )}
    </div>
  )
}

export default AttendantDetails