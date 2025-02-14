import { createApp } from 'vue'
import App from './App.vue'

import '@/index.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import 'primeicons/primeicons.css'
import router from './router';

const app = createApp(App)
app.use(router);
app.use(Toast)
app.mount('#app')
