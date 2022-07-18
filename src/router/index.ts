import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import { IRoutes, RouteNames } from '@/router/types';
import store from '@/store';
import { AuthGetters } from '@/store/auth/types';
import { auth } from '@/store/auth';

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

router.beforeEach(to => {
  const authenticated = store.getters[AuthGetters.AUTHENTICATED];

  // Only allow authenticated users to access public pages
  if (!authenticated && !to.meta.public) return { name: RouteNames.Login };

  // Don't allow authenticated users to access Login or Register
  if (authenticated) {
    if (to.name === RouteNames.Login || to.name === RouteNames.Register) {
      return false;
    }
  }
});

export default router;
