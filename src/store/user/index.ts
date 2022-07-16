import { Module } from 'vuex';
import { UserState } from '@/store/user/types';
import { RootState } from '@/store/types';

export const user: Module<UserState, RootState> = {};
