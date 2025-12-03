import axiosInstance from "../lib/axiosInstance.js";

export const createBlog = async (blogData) => {
  const response = await axiosInstance.post("/", blogData);
  return response.data;
};
