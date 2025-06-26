/*import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
});

// Interceptor para adicionar token às requisições
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//export const register = (userData) => API.post('/register', userData);
export const login = (credentials) => API.post('/api/login', credentials);
export const getProtectedData = () => API.get('/api/users');
*/