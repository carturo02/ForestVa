<script setup>
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import { Polygonal } from '../../classes/Polygonals';
import InputNumber from 'primevue/inputnumber';
import CreatePolygonal from '../modals/CreatePolygonal.vue';

const form = { component: CreatePolygonal, header: 'New Polygonal' };
</script>

<template>
    <VTable :controller="Polygonal" :form="form" dataKey="id" :editon="true">
        <Column field="id" :header="$t('table.parcel.polygonal')"></Column>
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
    </VTable>
</template>