<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { ref } from 'vue';
import useEvents from './common/utils/useEvents';
import type { VNode } from 'vue';

const dialogVisible = ref(false);

useEvents().addListener('showDialog', (component: CustomEventInit)=>{
  dialogVisible.value = true;
  modalBody = component.detail;
});

let modalBody: VNode | null = null;
</script>

<template>
  <div id="app">
  <Dialog v-model:visible="dialogVisible" modal>
    <modalBody/>
  </Dialog>
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
