import Vue from 'vue';
import Vuex from 'vuex';
import qr from './modules/qr';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    qr,
  },
});
