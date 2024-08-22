// useAxios.ts
import axios, { AxiosInstance } from "axios";

const useAxios = (): AxiosInstance => {
  if (typeof window !== "undefined") {
    const authToken = localStorage.getItem('token');

    return axios.create({
      baseURL: "http://localhost:8000",
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
  }

  return axios.create(); // Fallback for server-side rendering
};

export default useAxios;
