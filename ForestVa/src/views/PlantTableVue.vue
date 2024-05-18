
<template>
    <div class="card">
        <DataTable :value="plant" stripedRows tableStyle="min-width: 70rem">
            <Column field="structure" header="Structure" ></Column>
            <Column field="specie" header="Specie"></Column>
            <Column field="height" header="Height"></Column>
            <Column field="shaft_height" header="Shaft Height"></Column>
            <Column field="minx" header="Minimum X"></Column>
            <Column field="maxx" header="Maximum X"></Column>
            <Column field="miny" header="Minimum Y"></Column>
            <Column field="minx" header="Maximum Y"></Column>
        </DataTable>
    </div>
</template>


<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import { ref } from 'vue'
import axios from 'axios';

const plant = ref([]);

async function loadplants(){
    const response = await axios.get('http://localhost:3000/api/Plants');
    plant.value = response.data.map(plant => ({
        structure: plant.structure,
        specie: plant.specie,
        height: plant.height,
        shaft_height: plant.shaft_height,
        minx: plant.minx,
        maxx: plant.maxx,
        miny: plant.miny,
        maxy: plant.maxy
    }));
    
console.log(plant.value)
}

loadplants();
</script>

<style scoped>
.card{
    align-items: center;
    overflow: auto;
}

</style>