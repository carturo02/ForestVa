<script setup>
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import { Parcel } from '../../classes/Parcels.ts';

const form = {component: null, header: 'New Parcel'}
</script>

<template>
    <VTable :controller="Parcel" :form="form" dataKey="id">
        <Column field="id" header="Parcel"></Column>
        <Column field="beginning_date" :header="$t('table.parcel.beggining_date')"></Column>
        <Column field="minx" :header="$t('table.plant.minx')"></Column>
        <Column field="miny" :header="$t('table.plant.miny')"></Column>
        <Column field="maxx" :header="$t('table.plant.maxx')"></Column>
        <Column field="maxy" :header="$t('table.plant.maxy')"></Column>
        <Column field="poligonalid" :header="$t('table.parcel.polygonal')"></Column>
    </VTable>    
</template>