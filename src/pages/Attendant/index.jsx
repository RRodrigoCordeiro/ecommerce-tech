import { useState } from "react";
import React from "react";
import { useAttendant } from "../../hooks/attendant/useAttendant"; 
import { Link } from 'react-router-dom';

const Attendant = () => {
  const { data: attendants } = useAttendant();

  //  if (isLoading) return <p>Carregando...</p>;
  // if (isError) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <h1 className="font-bold text-center text-1xl ">
        INTERAJA COM OS NOSSOS ATEDENTES VIRTUAIS
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-28 mt-16 mb-16">
        {attendants?.map((attendant) => (
          <div key={attendant.id}>
             <Link to={`/attendantDetails/${attendant.id}`}>
            <div>
              <img
                src={attendant.image}
                alt={attendant.name}
                className="w-40 h-40"
              />
              <p className="text-center mt-3 mb-3">{attendant.name}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>



      {/* <div>
        {attendants?.map((attendant) => (
          <div key={attendant.id}>
            <p>{attendant.name}</p>
            <p>{attendant.role}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Attendant;
