// utils/axiosInstance.js
import axios from 'axios';
import { BASE_URL } from './useaxios';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});

export default axiosInstance;
