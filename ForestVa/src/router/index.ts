import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginVue.vue';
import App from '../components/UserVue.vue';
import GroundTableVue from '../views/GroundTableVue.vue';
import AdminTableVue from '../views/AdminTableVue.vue';
import ObserverTableVue from '../views/ObserverTableVue.vue';
//import ParcelTableVue from '../views/ParcelTableVue.vue';
import PolygonalTableVue from '../views/PolygonalTableVue.vue';
import PlantTableVue from '../views/PlantTableVue.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: () => Login },
    {
      path: '/app', name: 'app', component: () => App,
      children: [
        { path: '/admins', name: 'admins', component: () => AdminTableVue },
        { path: '/ground', name: 'ground', component: () => GroundTableVue },
        { path: '/plants', name: 'plants', component: () => PlantTableVue },
        { path: '/polygonals', name: 'polygonals', component: () => PolygonalTableVue },
        { path: '/observers', name: 'observers', component: () => ObserverTableVue }
      ]
    },

  ]
})

export default router;
