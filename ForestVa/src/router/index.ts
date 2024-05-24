import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginVue.vue';
import App from '../layouts/UserVue.vue';
import ObserverTable from '@/modules/user/views/tables/ObserverTable.vue';
import AdminTableVue from '@/modules/user/views/tables/AdminTableVue.vue';
import GroundTableVue from '@/modules/forest-va/views/tables/GroundTableVue.vue';
import PlantTableVue from '@/modules/forest-va/views/tables/PlantTableVue.vue';
import PolygonalTableVue from '@/modules/forest-va/views/tables/PolygonalTableVue.vue';
import ParcelTableVue from '@/modules/forest-va/views/tables/ParcelTableVue.vue';
import { useSession } from '@/common/site/useUser';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', name: 'login', 
      component: Login, 
    },
    {
      path: '/app', name: 'app', component: App,
      children: [
        { 
          path: '/admins',
          name: 'admins', 
          component: AdminTableVue,
          meta: {
            requiresAuth: true
          } 
        },
        { 
          path: '/ground', 
          name: 'ground', 
          component: GroundTableVue,
          meta: {
            requiresAuth: true
          } 
         },
        { 
          path: '/plants', 
          name: 'plants', 
          component: PlantTableVue, 
          meta: {
            requiresAuth: true
          } 
        },
        { 
          path: '/polygonals', 
          name: 'polygonals', 
          component: PolygonalTableVue, 
          meta: {
            requiresAuth: true
          } 
        },
        { 
          path: '/observers', 
          name: 'observers', 
          component: ObserverTable, 
          meta: {
            requiresAuth: true
          } 
        },
        { 
          path: '/parcels', 
          name: 'parcels', 
          component: ParcelTableVue, 
          meta: {
            requiresAuth: true
          } 
        },
      ],
      meta: {
        requiresAuth: true
      } 
    },

  ]
})

router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth && !useSession()){
    console.log('Unauthorized')
    router.push(from);
  }
  else
    next();
})

export default router;
