import React from 'react'

const Attendant = () => {
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
    </div>
  )
}

export default Attendant