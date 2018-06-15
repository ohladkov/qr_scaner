import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Scan from '@/components/Scan';
import Result from '@/components/Result';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/scan',
      name: 'Scan',
      component: Scan,
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
    },
  ],
});
