import {
  AuthActions,
  AuthGetters,
  AuthMutations,
  AuthState,
  UserType,
} from '@/store/auth/types';
import {
  ActionContext,
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';
import { RootState } from '@/store/types';
import { loginUser, registerUser } from '@/api';
import { UserLogin, UserLoginResponse, UserRegister } from '@/models/user';
import router, { pages } from '@/router';

const state: AuthState = {
  token: '',
  user: {} as UserType,
  authenticated: false,
};

const mutations: MutationTree<AuthState> = {
  [AuthMutations.LOGIN](state: AuthState, payload: UserLoginResponse) {
    state.token = payload.token;
    state.user = payload.user;
    state.authenticated = true;
  },

  [AuthMutations.LOGOUT](state: AuthState) {
    state.token = '';
    state.authenticated = false;
    state.user = {} as UserType;
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

  [AuthActions.LOGOUT](context: ActionContext<AuthState, RootState>) {
    context.commit(AuthMutations.LOGOUT);
    router.push(pages.Login.path);
  },
};

const getters: GetterTree<AuthState, RootState> = {
  [AuthGetters.AUTHENTICATED](state: AuthState): boolean {
    return state.authenticated;
  },

  [AuthGetters.USER_SUMMARY](state: AuthState): string {
    return `${state.user.firstName} ${state.user.lastName} <${state.user.email}>`;
  },
};

export const auth: Module<AuthState, RootState> = {
  state,
  mutations,
  actions,
  getters,
};
