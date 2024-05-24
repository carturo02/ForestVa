<template>
	<div class="slim-navbar">
	      <div class="container">
	        <ul class="nav">
        <li class="nav-item" v-if="session.rol === 'admin' || session.rol === 'observer'">
          <router-link class="nav-link" to="/plants">
            <i class="icon ion-leaf"></i>
            <span>Plants</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="session.rol === 'admin' || session.rol === 'observer'">
          <router-link class="nav-link" to="/ground">
            <i class="icon ion-ios-nutrition-outline"></i>
            <span>Ground</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="session.rol === 'admin'">
          <router-link class="nav-link" to="/observers">
            <i class="icon ion-ios-eye-outline"></i>
            <span>Observers</span>
          </router-link>
        </li>  
        <li class="nav-item" v-if="session.rol === 'superuser'">
          <router-link class="nav-link" to="/polygonals">
            <i class="icon ion-grid"></i>
            <span>Polygonals</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="session.rol === 'superuser'">
          <router-link class="nav-link" to="/parcels">
            <i class="icon ion-grid"></i>
            <span>Parcels</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="session.rol === 'superuser'">
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
import { useSession } from '@/common/site/useUser';

const session = useSession();
</script>
