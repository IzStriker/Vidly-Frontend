export type AuthState = {
  token: string;
  user: UserType;
};

export type UserType = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
};
