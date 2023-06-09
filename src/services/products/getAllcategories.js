import { axiosInstance } from "../../api/axiosInstance";

export const getAllCategories = async () => {
  try {
    const res = await axiosInstance.get("categories");

    return res.data;
  } catch (error) {
    //if request go to backend but don't get a successful response (response far from 200 status)
    if (error.response) throw error.response.data;
    else throw new Error("Something went with the categorie request");
  }
};
