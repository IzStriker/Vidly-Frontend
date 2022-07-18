import { ModuleTree } from 'vuex';

export interface RootState {
  strict: boolean;
  modules: ModuleTree<RootState>;
}
