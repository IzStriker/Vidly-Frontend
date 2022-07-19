import { UserType } from '@/store/auth/types';

export type UserRegister = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export type RegistrationError = {
  code?: string;
  description: string;
};

export type UserRegisterResponse = {
  Status: string;
  Message?: string;
  Errors?: RegistrationError[];
};

export type UserLoginResponse = {
  token: string;
  expiration: string;
  user: UserType;
};
