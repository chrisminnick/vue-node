import { createApp } from 'vue';
import App from './App.vue';
import { API_URL } from './common/config';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './assets/main.css';
axios.defaults.baseURL = API_URL;

const app = createApp(App);
app.use(VueAxios, axios);
app.mount('#app');
