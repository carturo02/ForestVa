<script setup>
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import { ref } from 'vue';

const parcels = ref([]);

const cb = (data)=>{
    parcels.value = data.map(parcel=>({
        ...parcel
    }))
}

const form = {component: null, header: 'New Parcel'}
</script>

<template>
    <VTable v-model="parcels" :cb="cb" :url="'Parcels'" :form="form">
        <Column field="beginning_date" header="Beggining date"></Column>
        <Column field="minx" header="Min X"></Column>
        <Column field="miny" header="Min Y"></Column>
        <Column field="maxx" header="Max X"></Column>
        <Column field="maxy" header="Max Y"></Column>
        <Column field="poligonal" header="Poligonal"></Column>
    </VTable>    
</template>