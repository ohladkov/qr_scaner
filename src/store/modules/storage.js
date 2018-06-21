const SET_STATE_FROM_STORAGE_MUTATION = 'setState';
const STORAGE = 'storage';
export const IS_LOGGED_IN = 'isLoggedIn';

export default {
  namespaced: true,
  state: JSON.parse(localStorage.getItem(STORAGE)) || { [IS_LOGGED_IN]: false },
  mutations: {
    [SET_STATE_FROM_STORAGE_MUTATION](state, [key, value]) {
      state[key] = value;
    },
  },
  actions: {
    setItem({ commit }, [key, value]) {
      commit(SET_STATE_FROM_STORAGE_MUTATION, [key, value]);
      return localStorage.setItem(STORAGE, JSON.stringify(this.state[STORAGE]));
    },
  },
  getters: {
    [IS_LOGGED_IN]: state => state[IS_LOGGED_IN],
  },
};
