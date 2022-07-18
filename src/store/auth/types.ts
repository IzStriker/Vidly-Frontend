export type AuthState = {
  token: string;
  user: UserType;
  authenticated: boolean;
};

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export enum AuthActions {
  REGISTER = 'Register',
  LOGIN = 'Login',
  LOGOUT = 'Logout',
}

export enum AuthMutations {
  LOGIN = 'Login',
  LOGOUT = 'Logout',
}

export enum AuthGetters {
  AUTHENTICATED = 'authenticated',
  USER_SUMMARY = 'userSummary',
}
