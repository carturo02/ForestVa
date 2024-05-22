import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginVue.vue';
import App from '../layouts/UserVue.vue';
import GroundTableVue from '../views/GroundTableVue.vue';
//import ParcelTableVue from '../views/ParcelTableVue.vue';
import PolygonalTableVue from '../views/PolygonalTableVue.vue';
import PlantTableVue from '../views/PlantTableVue.vue';
import ObserverTable from '@/modules/user/views/tables/ObserverTable.vue';
import AdminTableVue from '@/modules/user/views/tables/AdminTableVue.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: Login },
    {
      path: '/app', name: 'app', component: App,
      children: [
        { path: '/admins', name: 'admins', component: AdminTableVue },
        { path: '/ground', name: 'ground', component: GroundTableVue },
        { path: '/plants', name: 'plants', component: PlantTableVue },
        { path: '/polygonals', name: 'polygonals', component: PolygonalTableVue },
        { path: '/observers', name: 'observers', component: ObserverTable }
      ]
    },

  ]
})

export default router;
