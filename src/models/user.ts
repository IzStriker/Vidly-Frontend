export type UserRegister = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
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
