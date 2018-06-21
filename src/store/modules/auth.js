import axios from 'axios';
import { IS_LOGGED_IN } from './storage';

export default {
  namespaced: true,
  actions: {
    login({ dispatch }, formData) {
      return axios.post(process.env.AUTH_URL, formData).then((response) => {
        if (response.data.success) {
          return dispatch('storage/setItem', [IS_LOGGED_IN, true], { root: true });
        }

        throw new Error('Invalid Credentials!');
      });
    },
  },
};
