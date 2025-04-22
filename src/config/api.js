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
    const response = await apiClient.get('/blog/',{
      cache: "no-store" 
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const BlogDetails = async (url) => {
  try {
    const response = await apiClient.get(`/blog/${url}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const FaqList = async () => {
    try {
      const response = await apiClient.get('/faq/');
      return response.data;
    } catch (error) {
      throw error;
    }
};