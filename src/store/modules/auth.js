import axios from 'axios';
import storage from './storage';

const SET_IS_LOGGED_IN_MUTATION = 'setIsLoggedIn';
const IS_LOGGED_IN = 'isLoggedIn';

export default {
  namespaced: true,
  state: {
    [IS_LOGGED_IN]: false,
  },
  mutations: {
    [SET_IS_LOGGED_IN_MUTATION](state) {
      state[IS_LOGGED_IN] = true;
      storage.setItem(IS_LOGGED_IN, true);
    },
  },
  actions: {
    login({ commit }, formData) {
      return axios.post(process.env.AUTH_URL, formData).then((response) => {
        if (response.data.success) {
          return commit(SET_IS_LOGGED_IN_MUTATION);
        }

        throw new Error('Invalid Credentials!');
      });
    },
  },
  getters: {
    [IS_LOGGED_IN]: state => state[IS_LOGGED_IN] || storage.getItem(IS_LOGGED_IN),
  },
};
