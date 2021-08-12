import {createStore, createLogger} from 'vuex';

import order from './modules/order';
import cart from './modules/cart';

const store = createStore({
  // plugins: [createLogger()],
  modules: {
    order,
    cart,
  },
  state: {
    userAccessKey: null,
    localCategoryId: 0,
  },
  mutations: {
    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey;
    },
    updateLocalCategoryId(state, categoryId) {
      state.localCategoryId = categoryId;
    },
  },
});

export default store;
