import { useState} from "react"
import React from 'react'
import { useAttendant } from "../../hooks/useAttendant"
import { useComputer } from "../../hooks/useComputer";




const Attendant = () => {
  
  const { data, isLoading, isError } = useAttendant();
  const {datas, isLoadingg, isErrorr} = useComputer();
  
  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar os atendentes.</div>;

  if (isLoadingg) return <div>Carregando...</div>;
  if (isErrorr) return <div>Erro ao carregar os atendentes.</div>;

  

    // useEffect(() => {
    //     const fetchData = async  () => {
    //         try{
    //             const response = await axios.get("/data/storeData.json")
    //             setfirst(response.data.attendant)
    //         }catch(error){
    //             console.log("erro",error)
    //             console.error("Erro ao buscar JSON:", error.message);

    //         }

    //     }
    //     fetchData()
    // },[])
    
    
  return (
    <div>
        <h1 className="font-bold text-center text-1xl ">INTERAJA COM OS NOSSOS ATEDENTES VIRTUAIS</h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-28 mt-16 mb-16">
            <div>
                <img
                    src="/images/attendant1.png"
                    alt="Imagem do computador"
                    className="w-40 h-40"
                />
                <p className='text-center mt-3 mb-3'>Marcelo</p>
                
            </div>
            <div>
                <img
                    src="/images/attendant2.png"
                    alt="Imagem do computador"
                    className="w-40 h-40"
                />
                <p className='text-center mt-3 mb-3'>Henrique</p>
            </div>
            <div>
                <img
                    src="/images/attendant3.png"
                    alt="Imagem do computador"
                    className="w-40 h-40"
                />
                <p className='text-center mt-3 mb-3'>Fernanda</p>
            </div>
            <div>
                <img
                    src="/images/attendant4.png"
                    alt="Imagem do computador"
                    className="w-40 h-40"
                />
                <p className='text-center mt-3 mb-3'>Joana</p>
            </div>
        </div>
         


         <div>
            {data.map((attendant) => (
              <div key={attendant.id}>
                <p>{attendant.name}</p>

              </div>
            ))}


            
         </div>
        
        <div>
        {datas?.map((index) => (
              <div key={index.id}>
                <p>{index.id}</p>

              </div>
            ))}
        </div>
         
    </div>
  )
}

export default Attendant