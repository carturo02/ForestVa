<script setup lang="ts">
</script>

<template>
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
