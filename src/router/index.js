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
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (typeof to.meta.authRequired === 'undefined') {
    return next();
  }

  const isAuthorized = store.getters['storage/isLoggedIn'];

  if (!to.meta.authRequired && isAuthorized) {
    return next({ name: 'Scan' });
  }

  if (to.meta.authRequired && !isAuthorized) {
    return next({ name: 'Login' });
  }

  return next();
});

export default router;
