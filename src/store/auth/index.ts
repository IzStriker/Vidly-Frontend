import { AuthState } from '@/store/auth/types';
import { RootState } from '../types';
import { Module } from 'vuex';

const state: AuthState = {
  token: '',
  user: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
  },
};

export const auth: Module<AuthState, RootState> = {
  state,
};
