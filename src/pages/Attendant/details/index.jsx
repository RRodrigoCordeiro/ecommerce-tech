import React from 'react'
import { useAttendantById } from '../../../hooks/useAttendantById'; 
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
         <p>ID do atendente: {id} </p>
            {attendants && (
        <div>
          <p>Email: {attendants.email}</p>
          <p>Nome: {attendants.name}</p>
        </div>
      )}
          <p>sd</p>
         
    </div>
  )
}

export default AttendantDetails