import React from 'react'
import { useParams } from 'react-router-dom'
import { useComputerHeaderById } from '../../hooks/productHeader/computer/useComputer';

const HeaderDetail = () => {
  const {id} = useParams();
  
 
  
  return (
    <div>index COMPUTADOR {id}</div>
  )
}

export default HeaderDetail