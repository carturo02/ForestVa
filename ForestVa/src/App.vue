<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
  <button @click="()=>visible = true">Click me</button>
  <div class="card flex justify-content-center">
  <Dialog v-model:visible="visible" modal>
    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eveniet, minima eligendi repellendus hic quam ipsa voluptate ad. Eos velit explicabo neque recusandae impedit eius nostrum eveniet, possimus aspernatur dignissimos.</h1>
  </Dialog>
  </div>
  <div id="app">
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
