import axios, { Axios, AxiosResponse } from "axios";
import { UserRegister, UserRegisterResponse } from "@/models/user";

// Move to dotenv
const BASE_URL = /*process.env.VUE_APP_BACKEND_URL + */ "/api";

export const registerUser = (user: UserRegister): Promise<AxiosResponse> => {
  console.log(process.env.VUE_APP_BACKEND_URL);
  return axios.post<UserRegisterResponse>(`${BASE_URL}/Auth/register/`, user);
};
