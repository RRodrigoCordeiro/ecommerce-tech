import axios from 'axios';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
      }catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[id])


  return (
    <div>
      <main>
        {product && (
          <section >
            <div>
              <img 
                src={product?.image}
                alt={product?.title}
              />
            </div>
            <div>
              <p>{product?.title}</p>
              <p>{product?.description}</p>
              <strong className='text-zinc-700/90 text-xl '>
              {product.price ? product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : 'Preço indisponível'}
               </strong>
            </div>
          </section>
        )}
      </main>

    </div>
  )
}
export default ProductDetail