import { createStore } from 'vuex';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';
import { user } from '@/store/user';

const store: StoreOptions<RootState> = createStore({
  modules: {
    user,
  },
});

export default new Vuex.Store(store);
