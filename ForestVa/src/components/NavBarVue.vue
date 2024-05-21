<template>
	<div class="slim-navbar">
	      <div class="container">
	        <ul class="nav">
        <li class="nav-item" v-if="userRole === 'admin' || userRole === 'observer'">
          <router-link class="nav-link" to="/plants">
            <i class="icon ion-leaf"></i>
            <span>Plants</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="userRole === 'admin' || userRole === 'observer'">
          <router-link class="nav-link" to="/ground">
            <i class="icon ion-ios-nutrition-outline"></i>
            <span>Ground</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="userRole === 'admin'">
          <router-link class="nav-link" to="/observers">
            <i class="icon ion-ios-eye-outline"></i>
            <span>Observers</span>
          </router-link>
        </li>  
        <li class="nav-item" v-if="userRole === 'superuser'">
          <router-link class="nav-link" to="/polygonals">
            <i class="icon ion-grid"></i>
            <span>Polygonals</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="userRole === 'superuser'">
          <router-link class="nav-link" to="/admins">
            <i class="icon ion-ios-people"></i>
            <span>Admins</span>
          </router-link>
        </li>    
	        </ul>
	      </div><!-- container -->
	    </div>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';

const userRole = ref('admin');
const router = useRouter();

const navigate = (route) => {
  router.push(route);
}
</script>
