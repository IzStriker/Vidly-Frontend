import { RouteRecordRaw } from 'vue-router';

export enum RouteNames {
  Home = 'Home',
  Login = 'Login',
  Register = 'Register',
}
export interface IRoutes {
  Home: RouteRecordRaw;
  Login: RouteRecordRaw;
  Register: RouteRecordRaw;
}
