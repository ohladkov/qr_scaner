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
        isUser: true,
      },
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
      meta: {
        isUser: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        isUser: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthorized = store.getters['auth/isLoggedIn'];

  if (to.meta.isUser && !isAuthorized) {
    return next('/login');
  }

  if (!to.meta.isUser && isAuthorized) {
    return next('/');
  }

  return next();
});

export default router;
