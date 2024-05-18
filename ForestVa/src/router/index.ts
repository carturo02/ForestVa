import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginVue.vue';
import App from '../components/UserVue.vue';
import GroundTableVue from '../views/GroundTableVue.vue';
import AdminTableVue from '../views/AdminTableVue.vue';
//import ObserverTableVue from '../views/ObserverTableVue.vue';
//import ParcelTableVue from '../views/ParcelTableVue.vue';
//import PolygonalTableVue from '../views/PolygonalTableVue.vue';
import PlantTableVue from '../views/PlantTableVue.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: ()=> Login },
    { path: '/app', name:'app', component: ()=> App },
    { path: '/table', name:'table', component: ()=> AdminTableVue }
  ]
})

export default router;
