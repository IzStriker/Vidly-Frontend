import axios, { AxiosResponse } from 'axios';
import {
  UserRegister,
  UserRegisterResponse,
  UserLogin,
  UserLoginResponse,
} from '@/models/user';

const BASE_URL = '/api';

export const registerUser = (user: UserRegister): Promise<AxiosResponse> => {
  return axios.post<UserRegisterResponse>(`${BASE_URL}/Auth/register/`, user);
};

export const loginUser = (user: UserLogin): Promise<AxiosResponse> => {
  return axios.post<UserLoginResponse>(`${BASE_URL}/auth/login/`, user);
};
