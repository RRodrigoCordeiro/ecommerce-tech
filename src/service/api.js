import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "/data",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;