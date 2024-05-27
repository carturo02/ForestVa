import './assets/main.css'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadSession } from './common/site/useUser';
import i18n from './plugins/i18n';

const app = createApp(App)

app.use(router)
app.use(i18n);
app.use(PrimeVue)
app.use(ToastService);
app.mount('#app')

loadSession();