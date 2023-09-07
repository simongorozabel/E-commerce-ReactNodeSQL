import { axiosInstance } from "../../api/axiosInstance";

export const signUp = async ({
  firstName,
  lastName,
  phone,
  email,
  password,
}) => {
  try {
    const res = await axiosInstance.post("users", {
      firstName,
      lastName,
      phone,
      email,
      password,
    });

    const status = res.status;
    console.log(status);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
