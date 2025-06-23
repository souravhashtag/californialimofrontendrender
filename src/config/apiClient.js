import axios from 'axios';
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiClient.interceptors.request.use((config) => {
    config.headers.AuthorizeToken = process.env.NEXT_PUBLIC_FRONTEND_AUTH_TOKEN || '';  
    return config;
});


export default apiClient;