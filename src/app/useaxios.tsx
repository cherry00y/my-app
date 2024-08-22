import axios from "axios";

const authToken = localStorage.getItem('token');

const useAxios = axios.create({
    baseURL: "http://localhost:8000", 
    headers: {
        'authorization': `Bearer ${authToken}`
    }
});

export default useAxios;
