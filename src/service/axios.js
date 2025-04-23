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


