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

export enum AuthActions {
  REGISTER = 'Register',
  LOGIN = 'Login',
}

export enum AuthMutations {
  LOGIN = 'Login',
}
