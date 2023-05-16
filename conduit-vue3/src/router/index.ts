import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

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
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return '/login';
  }
});
export default router;
