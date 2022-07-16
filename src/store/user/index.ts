import { Module } from 'vuex';
import { UserState } from '@/store/user/types';
import { RootState } from '@/store/types';

const state: UserState = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
};

export const user: Module<UserState, RootState> = {
  state,
};
