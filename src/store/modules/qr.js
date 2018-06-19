const SET_CODE_MUTATION = 'setCode';

export default {
  namespaced: true,
  state: {
    code: '',
  },
  mutations: {
    [SET_CODE_MUTATION](state, code) {
      state.code = code;
    },
  },
  actions: {
    setCode({ commit }, val) {
      commit(SET_CODE_MUTATION, val);
    },
    resetCode({ commit }) {
      commit(SET_CODE_MUTATION, '');
    },
  },
};
