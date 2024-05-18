<template>
	<div class="slim-navbar">
	      <div class="container">
	        <ul class="nav">
        <!--Admin-->
        <li class="nav-item" v-if="userRole === 'admin'">
          <a class="nav-link" href="#">
            <i class="icon ion-leaf"></i>
            <span>Plantas</span>
          </a>
        </li>
        <li class="nav-item" v-if="userRole === 'admin'">
          <a class="nav-link" href="#">
            <i class="icon ion-ios-nutrition-outline"></i>
            <span>Suelo</span>
          </a>
        </li>
        <li class="nav-item" v-if="userRole === 'admin'">
          <a class="nav-link" href="#">
            <i class="icon ion-ios-eye-outline"></i>
            <span>Observadores</span>
          </a>
        </li>
        <!--Observer-->
        <li class="nav-item" v-if="userRole === 'observer'">
          <a class="nav-link" href="#">
            <i class="icon ion-leaf"></i>
            <span>Plantas</span>
          </a>
        </li>
        <li class="nav-item" v-if="userRole === 'observer'">
          <a class="nav-link" href="#">
            <i class="icon ion-ios-nutrition-outline"></i>
            <span>Suelo</span>
          </a>
        </li>
        <!--Superuser-->    
        <li class="nav-item" v-if="userRole === 'superuser'">
          <a class="nav-link" href="#">
            <i class="icon ion-leaf"></i>
            <span>Poligonales</span>
          </a>
        </li>
        <li class="nav-item" v-if="userRole === 'superuser'">
          <a class="nav-link" href="#">
            <i class="icon ion-ios-nutrition-outline"></i>
            <span>Administradores</span>
          </a>
        </li>    
	        </ul>
	      </div><!-- container -->
	    </div>
</template>

<script setup>
import {ref} from 'vue';
const userRole = ref('superuser');
</script>
