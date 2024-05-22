<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { ref } from 'vue';
import useEvents from './common/utils/useEvents';
import type { VNode } from 'vue';
import { Console } from 'console';

const dialogVisible = ref(false);

useEvents().addListener('showDialog', (component: CustomEventInit)=>{
  dialogVisible.value = true;
  modalBody = component.detail.component;
  header.value = component.detail.header;
});


let modalBody: VNode | null = null;
const header = ref('');
</script>

<template>
  <div id="app">
  <Dialog class="c-dialog" v-model:visible="dialogVisible" modal :header="header">
    <modalBody ref="component"/>
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
