import axios from 'axios';
import axiosInstance from './api' ;  

export const fetchAttendants =  async () => {
  const response = await axiosInstance.get("/storeData.json");
  return response.data.attendant;

};

export const fetchAttendantById = async (id) => {
  const response = await axiosInstance.get(`/storeData.json`);
  const attendants = response.data.attendant;
  return attendants.find((attendant) => attendant.id === Number(id));
};


export const fetchComputer = async () => {
  const response = await axiosInstance.get("/storeData.json");
  return response.data.computer;
};


export const fetchNotebook = async () => {
  const response = await axiosInstance.get("/storeData.json")
  return response.data.notebook;
}

export const fetchCep =  async (cep) => {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  console.log(" Dados do CEP:", response.data);
  return response.data;

}

export const fetchProductHeader = async() => {
  const response = await axiosInstance.get("/storeData.json")
  return response.data.productsHeader;
}

export const fetchProductHeaderComputer = async(id) => {
  const response = await axiosInstance.get("/storeData.json");
  const computer = response.data.productsHeader.computer
  return computer.find((computer) => computer.id === Number(id));
}

