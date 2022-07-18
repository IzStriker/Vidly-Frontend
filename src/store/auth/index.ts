import { AuthActions, AuthState } from '@/store/auth/types';
import { RootState } from '../types';
import { ActionContext, ActionTree, Module } from 'vuex';
import { loginUser, registerUser } from '@/api';
import { UserLogin, UserRegister } from '@/models/user';
import router, { pages } from '@/router';

const state: AuthState = {
  token: '',
  user: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
  },
};

const actions: ActionTree<AuthState, RootState> = {
  async [AuthActions.REGISTER](
    context: ActionContext<AuthState, RootState>,
    payload: UserRegister,
  ) {
    await registerUser(payload);
    router.push(pages.Login.path);
  },

  async [AuthActions.LOGIN](
    context: ActionContext<AuthState, RootState>,
    payload: UserLogin,
  ) {
    await loginUser(payload);
    router.push(pages.Home.path);
  },
};

export const auth: Module<AuthState, RootState> = {
  state,
  actions,
};
