import { useState } from "react";
import React from "react";
import { useAttendant } from "../../hooks/useAttendant";
import { useComputer } from "../../hooks/useComputer";

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
            <div>
              <img
                src={attendant.image}
                alt={attendant.name}
                className="w-40 h-40"
              />
              <p className="text-center mt-3 mb-3">{attendant.name}</p>
            </div>
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
