import { axiosInstance } from "../../api/axiosInstance";

export const updateCart = async ({ cartProductId, newQuantity, token }) => {
  try {
    const body = {
      quantity: newQuantity,
    };

    await axiosInstance.put(`cart/${cartProductId}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error.response)
      throw typeof error.response.data === "string"
        ? new Error(error.response.data)
        : error.response.data;
    else throw new Error("Something went wrong with the cart PUT request.");
  }
};
