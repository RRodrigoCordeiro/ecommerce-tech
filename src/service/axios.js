import { useQuery } from '@tanstack/react-query';
import axiosInstance from './api' ;  

export const fetchAttendants =  async () => {
  const response = await axiosInstance.get("/storeData.json");
  return response.data.attendant;

};

export const fetchComputer = async () => {
  const response = await axiosInstance.get("/storeData.json");
  return response.data.computer;
};



// export const getImagemRelacaoRvp = async (): Promise<ImagemRelacao[]> => {
  
//     const response = await axios.get(`${baseUrl}/rvp/sp/vincular/`, {
      
//     })
  
//     return response.data
//   }
  