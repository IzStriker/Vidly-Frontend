import axios, { AxiosResponse } from 'axios';
import { UserRegister, UserRegisterResponse, UserLogin } from '@/models/user';

// Move to dotenv
const BASE_URL = '/api';

export const registerUser = (user: UserRegister): Promise<AxiosResponse> => {
  return axios.post<UserRegisterResponse>(`${BASE_URL}/Auth/register/`, user);
};

export const loginUser = (user: UserLogin): Promise<AxiosResponse> => {
  return axios.post(`${BASE_URL}/auth/login/`, user);
};
