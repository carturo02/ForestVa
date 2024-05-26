<script setup>
import { ref } from 'vue';
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import CreatePlant from '../modals/CreatePlant.vue';
import { Plant } from '../../classes/Plants.ts';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
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

const form = { component: CreatePlant, header: 'New Plant' };
</script>

<template>
    <VTable :controller="Plant" :form="form" dataKey="id">
        <Column field="structure" header="Structure">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]"></InputText>
            </template>
        </Column>
        <Column field="specie" header="Specie">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]"></InputText>
            </template>
        </Column>
        <Column field="height" header="Height">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="shaft_height" header="Shaft Height">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="minx" header="Minimum X">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="maxx" header="Maximum X">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="miny" header="Minimum Y">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="maxy" header="Maximum Y">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
    </VTable>
</template>