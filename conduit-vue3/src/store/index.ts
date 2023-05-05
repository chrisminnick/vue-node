import { createPinia } from 'pinia';
import { App } from 'vue';
const pinia = createPinia();
export const useStore = pinia.store;
