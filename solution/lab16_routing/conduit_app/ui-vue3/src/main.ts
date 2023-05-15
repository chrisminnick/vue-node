import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { API_URL } from './common/config';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';

import './assets/main.css';
axios.defaults.baseURL = API_URL;

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.mount('#app');
