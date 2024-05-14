<template>
	<div class="slim-navbar">
	      <div class="container">
	        <ul class="nav">
				<li class="nav-item" v-if="userRole === 'Administrador'">
          <a class="nav-link" href="#">
            <i class="icon ion-android-home"></i>
            <span>Poligonal</span>
          </a>
        </li>
        <li class="nav-item" v-if="userRole === 'Administrador'">
          <a class="nav-link" href="#">
            <i class="icon ion-android-map"></i>
            <span>Parcela</span>
          </a>
        </li>
        <li class="nav-item" v-if="userRole === 'Administrador'">
          <a class="nav-link" href="#">
            <i class="icon ion-leaf"></i>
            <span>Planta</span>
          </a>
        </li>
        <li class="nav-item" v-if="userRole === 'Administrador'">
          <a class="nav-link" href="#">
            <i class="icon ion-ios-nutrition-outline"></i>
            <span>Suelo</span>
          </a>
        </li>
        <li class="nav-item" v-if="userRole === 'Administrador'">
          <a class="nav-link" href="#">
            <i class="icon ion-ios-eye-outline"></i>
            <span>Observadores</span>
          </a>
        </li>
	        </ul>
	      </div><!-- container -->
	    </div>
</template>

<script setup>
import {ref} from 'vue';
const userRole = ref('Administrador');
</script>
