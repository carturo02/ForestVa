<script setup lang="ts">
import Dropdown from 'primevue/dropdown';

</script>

<template>
    <div class="locale-changer">
      <Dropdown v-model="$i18n.locale" :options="$i18n.availableLocales"></Dropdown>
    </div>
</template>