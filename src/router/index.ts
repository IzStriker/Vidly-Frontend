import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import { IRoutes, RouteNames } from '@/router/types';

// Allow reference to routes without magic strings.
export const pages: IRoutes = {
  Home: {
    path: '/',
    name: RouteNames.Home,
    component: Home,
  },
  Login: {
    path: '/login',
    name: RouteNames.Login,
    component: Login,
  },
  Register: {
    path: '/register',
    name: RouteNames.Register,
    component: Register,
  },
};

// Convert pages into array of routes like traditional implementation of routes in vue-router
const routes: Readonly<RouteRecordRaw[]> = Object.values(pages);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
