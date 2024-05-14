import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginVue.vue';
import App from '../components/UserVue.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: ()=> Login },
    { path: '/app', name:'app', component: ()=> App }
  ]
})

export default router;
