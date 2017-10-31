import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const decorate = (resolve) => {
  import('view/decorate/decorate').then((module) => {
    resolve(module);
  });
};

const market = (resolve) => {
  import('view/market/market').then((module) => {
    resolve(module);
  });
};

export default new Router({
  routes: [
    {
      path: '/decorate/:id',
      component: decorate,
    },
    {
      path: '/market',
      component: market,
    },
  ],
});
