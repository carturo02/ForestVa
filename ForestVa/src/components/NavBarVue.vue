<template>
  <div class="slim-navbar">
    <div class="container">
      <ul class="nav">
        <li class="nav-item" v-if="session.rol === 'admin' || session.rol === 'observer'">
          <router-link class="nav-link" to="/plants">
            <i class="icon ion-leaf"></i>
            <span>{{ $t('rol_options.plants') }}</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="session.rol === 'admin' || session.rol === 'observer'">
          <router-link class="nav-link" to="/ground">
            <i class="icon ion-ios-nutrition-outline"></i>
            <span>{{ $t('rol_options.ground') }}</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="session.rol === 'admin'">
          <router-link class="nav-link" to="/observers">
            <i class="icon ion-ios-eye-outline"></i>
            <span>{{ $t('rol_options.observers') }}</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="session.rol === 'superuser'">
          <router-link class="nav-link" to="/polygonals">
            <i class="icon ion-grid"></i>
            <span>{{ $t('rol_options.polygonals') }}</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="session.rol === 'superuser'">
          <router-link class="nav-link" to="/parcels">
            <i class="icon ion-grid"></i>
            <span>{{ $t('rol_options.parcels') }}</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="session.rol === 'superuser'">
          <router-link class="nav-link" to="/admins">
            <i class="icon ion-ios-people"></i>
            <span>{{ $t('rol_options.admins') }}</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="session.rol === 'superuser'">
          <router-link class="nav-link" to="/superusers">
            <i class="icon ion-ios-people"></i>
            <span>{{$t('rol_options.superusers')}}</span>
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
