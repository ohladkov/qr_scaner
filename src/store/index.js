import Vue from 'vue';
import Vuex from 'vuex';
import qr from './modules/qr';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    qr,
    auth,
  },
});
