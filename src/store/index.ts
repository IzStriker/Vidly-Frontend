import { createStore, ModuleTree } from 'vuex';
import { RootState } from '@/store/types';
import { auth } from '@/store/auth';
import createPersistedState from 'vuex-persistedstate';

const modules: ModuleTree<RootState> = {
  auth,
};

export default createStore<RootState>({
  strict: true,
  modules,
  plugins: [createPersistedState()],
});
