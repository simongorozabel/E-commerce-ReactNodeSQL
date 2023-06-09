import { axiosInstance } from "../../api/axiosInstance";

export const addProductToCart = async ({ token, quantity, productId }) => {
  try {
    const body = { quantity, productId };

    const res = await axiosInstance.post("cart", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return (await res).data;
  } catch (error) {
    if (error.response)
      throw typeof error.response.data === "string"
        ? new Error(error.response.data)
        : error.response.data;
    else throw new Error("something went wrong with cart POST request");
  }
};
