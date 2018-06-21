import Vue from 'vue';
import Vuex from 'vuex';
import qr from './modules/qr';
import auth from './modules/auth';
import storage from './modules/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    qr,
    auth,
    storage,
  },
});
