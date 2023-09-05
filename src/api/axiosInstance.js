import axios from "axios";

//https://e-commerce-api-v2.academlo.tech/api/v1

export const axiosInstance = axios.create({
  baseURL: "https://ecommerce-backend-8vj7.onrender.com/",
});
