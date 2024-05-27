<script setup>
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import { Polygonal } from '../../classes/Polygonals';

const form = { component: null, header: 'New Polygonal' };
</script>

<template>
    <VTable :controller="Polygonal" :form="form" dataKey="id">
        <Column field="id" :header="$t('table.parcel.polygonal')"></Column>
        <Column field="minx" :header="$t('table.plant.minx')"></Column>
        <Column field="maxx" :header="$t('table.plant.maxx')"></Column>
        <Column field="miny" :header="$t('table.plant.miny')"></Column>
        <Column field="maxy" :header="$t('table.plant.maxy')"></Column>
    </VTable>
</template>