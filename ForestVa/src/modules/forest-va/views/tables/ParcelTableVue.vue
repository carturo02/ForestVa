<script setup>
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import { Parcel } from '../../classes/Parcels.ts';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';

const form = {component: null, header: 'modal.create.parcel'}
</script>

<template>
    <VTable :controller="Parcel" :form="form" dataKey="id">
        <Column field="id" header="Parcel"></Column>
        <Column field="beginning_date" :header="$t('table.parcel.beggining_date')">
            <template #editor="{ data, field }">
                <Calendar v-model="data[field]" dateFormat="yy-mm-dd"></Calendar>
            </template>
        </Column>
        <Column field="minx" :header="$t('table.plant.minx')">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="miny" :header="$t('table.plant.miny')">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="maxx" :header="$t('table.plant.maxx')">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="maxy" :header="$t('table.plant.maxy')">
            <template #editor="{ data, field }">
                <InputNumber v-model="data[field]"></InputNumber>
            </template>
        </Column>
        <Column field="poligonalid" :header="$t('table.parcel.polygonal')">
        </Column>
    </VTable>    
</template>