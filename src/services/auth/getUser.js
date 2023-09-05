import { axiosInstance } from "../../api/axiosInstance";

export const getUser = async (token) => {
  try {
    const res = await axiosInstance.get("users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data;
  } catch (error) {
    if (error.response) throw error.response.data;
    else throw new Error("something went wrong with user/me GET request");
  }
};
