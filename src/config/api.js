import apiClient from './apiClient';


export const pageData = async (slug) => {
  try {
    const response = await apiClient.get(`/page/${slug}`);
    return response.data; 
  } catch (error) {
    throw error; 
  }
};
export const ListBlog = async () => {
  try {
    const response = await apiClient.get('/blog/');
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const BlogDetails = async () => {
  try {
    const response = await apiClient.get('/blog/');
    return response.data;
  } catch (error) {
    throw error;
  }
};