export type AuthState = {
  token: string;
  user: UserType;
  authenticated: boolean;
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

export enum AuthGetters {
  AUTHENTICATED = 'authenticated',
}
