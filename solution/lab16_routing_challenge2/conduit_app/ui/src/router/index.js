import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import TwoLists from '../components/TwoLists.vue';
//import ArticlePreview from '../components/ArticlePreview.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
    {
      name: 'twolists',
      path: '/twolists',
      components: {
        default: TwoLists,
        TwoLists,
        Login,
      },
    },
  ],
});
