import {
  AuthActions,
  AuthMutations,
  AuthState,
  UserType,
} from '@/store/auth/types';
import { RootState } from '@/store/types';
import { ActionContext, ActionTree, Module, MutationTree } from 'vuex';
import { loginUser, registerUser } from '@/api';
import { UserLogin, UserLoginResponse, UserRegister } from '@/models/user';
import router, { pages } from '@/router';

const state: AuthState = {
  token: '',
  user: {} as UserType,
};

const mutations: MutationTree<AuthState> = {
  [AuthMutations.LOGIN](state: AuthState, payload: UserLoginResponse) {
    state.token = payload.token;
    state.user = payload.user;
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
    const res = await loginUser(payload);
    router.push(pages.Home.path);
    context.commit(AuthMutations.LOGIN, res.data);
  },
};

export const auth: Module<AuthState, RootState> = {
  state,
  mutations,
  actions,
};
