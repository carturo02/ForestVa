<script setup>
import { ref } from 'vue';
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import CreatePlant from '../modals/CreatePlant.vue';

const plants = ref([]);

const cb = (data) => {
    plants.value = data.map(plant => ({
        structure: plant.structure,
        specie: plant.specie,
        height: plant.height,
        shaft_height: plant.shaft_height,
        minx: plant.minx,
        maxx: plant.maxx,
        miny: plant.miny,
        maxy: plant.maxy
    }));
}

const form = {component: CreatePlant, header: 'New Plant'};
</script>

<template>
    <VTable v-model="plants" :cb="cb" :url="'Plants'" :form="form">
        <Column field="structure" header="Structure" ></Column>
            <Column field="specie" header="Specie"></Column>
            <Column field="height" header="Height"></Column>
            <Column field="shaft_height" header="Shaft Height"></Column>
            <Column field="minx" header="Minimum X"></Column>
            <Column field="maxx" header="Maximum X"></Column>
            <Column field="miny" header="Minimum Y"></Column>
            <Column field="minx" header="Maximim Y"></Column>
    </VTable>
</template>
