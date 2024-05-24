<script setup>
import { ref } from 'vue';
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';

const plants = ref([]);

const cb = (data) => {
    plants.value = data.map(polygonal => ({
        minx: polygonal.minx,
        maxx: polygonal.maxx,
        miny: polygonal.miny,
        maxy: polygonal.maxy
    }));
}

const form = { component: null, header: 'New Polygonal' };
</script>

<template>
    <VTable v-model="plants" :cb="cb" :url="'Polygonals'" :form="form">

        <Column field="minx" header="Minimum X"></Column>
        <Column field="maxx" header="Maximum X"></Column>
        <Column field="miny" header="Minimum Y"></Column>
        <Column field="maxy" header="Maximum Y"></Column>
    </VTable>
</template>