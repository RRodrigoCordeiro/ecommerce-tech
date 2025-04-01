import axios from 'axios';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


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
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <main  className="bg-white p-8 rounded-lg shadow-lg w-80 md:w-2xl lg:w-3xl max-w-3xl">
         <Link to="/" className="inline-block mb-4">
           <p className="bg-green-600 rounded-md w-28 text-center text-white font-bold p-1">
            Voltar
           </p>
        </Link>
        {product && (
          <section className="flex flex-col items-center justify-center md:flex-row md:gap-8">
            <div className='text-center'>
              <img 
                className='max-w-58 m-auto '
                src={product?.image}
                alt={product?.title}
              />
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-bold mt-8  md:w-full text-center'>{product?.title}</p>
              <p className='text-justify w-72 md:w-96  mt-8 font-light'>{product?.description}</p>
              <strong className=' text-xl mt-3 mb-8 '>
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