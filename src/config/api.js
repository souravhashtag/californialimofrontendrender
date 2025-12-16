import apiClient from './apiClient';


export const pageData = async (slug) => {
  try {
    const response = await apiClient.get(`/page/${slug}`);
    return response.data; 
  } catch (error) {
    return {};
  }
};
export const ListBlog = async () => {
  try {
    const response = await apiClient.get('/blog/',{
      cache: "no-store" 
    });
    return response.data;
  } catch (error) {
    return [];
  }
};
export const BlogDetails = async (url) => {
  try {
    const response = await apiClient.get(`/blog/${url}`);
    return response.data;
  } catch (error) {
    return {};
  }
};

export const FaqList = async () => {
    try {
      const response = await apiClient.get('/faq/');
      return response.data;
    } catch (error) {
      return [];
    }
};

// Fetch company details
export const getCompany = async () => {
  try {
    const res = await apiClient.get('/company');
    return res.data.company;
  } catch (error) {
    return null;
  }
};
