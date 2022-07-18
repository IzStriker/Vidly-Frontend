import { ActionTypes, AuthState } from '@/store/auth/types';
import { RootState } from '../types';
import { ActionContext, ActionTree, Module } from 'vuex';
import { registerUser } from '@/api';
import { UserRegister } from '@/models/user';
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
  async [ActionTypes.REGISTER](
    context: ActionContext<AuthState, RootState>,
    payload: UserRegister,
  ) {
    await registerUser(payload);
    router.push(pages.Login.path);
  },
};

export const auth: Module<AuthState, RootState> = {
  state,
  actions,
};
