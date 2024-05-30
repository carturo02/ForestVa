

<template>
   <VETable :controller="Plant" :form="form" dataKey="id">
        <Column field="structure" :header="$t('table.plant.structure')">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]"></InputText>
            </template>
        </Column>
        <Column field="specie" :header="$t('table.plant.specie')">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]"></InputText>
            </template>
        </Column>
        <Column field="height" :header="$t('table.plant.height')">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="shaft_height" :header="$t('table.plant.shaft_height')">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="minx" :header="$t('table.plant.minx')">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="maxx" :header="$t('table.plant.maxx')">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="miny" :header="$t('table.plant.miny')">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="maxy" :header="$t('table.plant.maxy')">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
    </VETable>
</template>

<script setup>
import { ref } from 'vue';
import VETable from '@/components/VETable.vue';
import Column from 'primevue/column';
import CreatePlant from '../modals/CreatePlant.vue';
import { Plant } from '../../classes/Plants.ts';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';

const plants = ref([]);
const form = { component: CreatePlant, header: 'modal.create.plant' };

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
</script>
