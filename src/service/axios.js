
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

