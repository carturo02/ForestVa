<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { provide } from 'vue';
import { ref } from 'vue';

const dialogVisible = ref(false);
provide('dialogVisible', dialogVisible);
</script>

<template>
  <div id="app">
  <Dialog v-model:visible="dialogVisible" modal></Dialog>
  <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
