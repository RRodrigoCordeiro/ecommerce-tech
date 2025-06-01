import React from 'react'
import { useParams } from 'react-router-dom';

const ProductHeader = () => {
     const { id } = useParams();
  return (
    <div>index #{id} dsds</div>
  )
}

export default ProductHeader