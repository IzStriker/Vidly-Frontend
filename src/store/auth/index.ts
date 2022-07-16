import { AuthState } from '@/store/auth/types';
import { RootState } from '../types';
import { Module } from 'vuex';

const state: AuthState = {
  token: '',
};

export const user: Module<AuthState, RootState> = {
  state,
};
