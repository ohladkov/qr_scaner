import axios from 'axios';

export default {
  namespaced: true,
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setIsLoggedIn(state) {
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', true);
    },
  },
  actions: {
    login(context, formData) {
      const url = 'https://mock-now-server-ojjpfycdme.now.sh/login';

      return axios.post(url, formData).then((response) => {
        if (response.data.success) {
          context.commit('setIsLoggedIn');
        }

        return response.data.success;
      }).catch((e) => {
        throw new Error(e);
      });
    },
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn || localStorage.getItem('isLoggedIn'),
  },
};
