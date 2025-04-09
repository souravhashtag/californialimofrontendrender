import axios from 'axios';
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiClient.interceptors.request.use((config) => {
    config.headers.AuthorizeToken = `V1@FrontAppV1`;  
    return config;
});


export default apiClient;