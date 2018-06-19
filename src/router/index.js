import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Scan from '@/components/Scan';
import Result from '@/components/Result';
import Login from '@/components/Login';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      component: Login,
      redirect: '/',
    },
    {
      path: '/scan',
      name: 'Scan',
      component: Scan,
      alias: '/',
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        authRequired: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthorized = store.getters['auth/isLoggedIn'];

  if (to.meta.authRequired && !isAuthorized) {
    return next({ name: 'Login' });
  }

  if (!to.meta.authRequired && isAuthorized) {
    return next({ name: 'Scan' });
  }

  return next();
});

export default router;
