import './assets/main.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadSession } from './common/site/useUser';

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.mount('#app')

loadSession();