import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import { IRoutes, RouteNames } from '@/router/types';
import store from '@/store';

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
    meta: { public: true },
  },
  Register: {
    path: '/register',
    name: RouteNames.Register,
    component: Register,
    meta: { public: true },
  },
};

// Convert pages into array of routes like traditional implementation of routes in vue-router
const routes: Readonly<RouteRecordRaw[]> = Object.values(pages);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _) => {
  // Only allow authenticated users to access public pages
  if (!store.getters.isAuthenticated && !to.meta.public)
    return { name: RouteNames.Login };
});

export default router;
