import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../components/Home.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../components/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
