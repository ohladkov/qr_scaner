export default {
  namespaced: true,
  state: {
    code: '',
  },
  mutations: {
    setCode(state, code) {
      state.code = code;
    },
  },
  actions: {
    setCode(context, val) {
      context.commit('setCode', val);
    },
    resetCode(context) {
      context.commit('setCode', '');
    },
  },
};
