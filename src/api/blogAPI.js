import axiosInstance from "../lib/axiosInstance.js";

export const createBlog = async (blogData) => {
  const response = await axiosInstance.post("/", blogData);
  return response.data;
};

export const getAllBlogs = async () => {
  const response = await axiosInstance.get("/");
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await axiosInstance.get(`/${id}`);
  return response.data;
};
