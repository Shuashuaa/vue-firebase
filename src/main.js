import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-indigo/theme.css';

createApp(App)
.use(PrimeVue)
.mount('#app')
