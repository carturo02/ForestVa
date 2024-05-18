<template>
    <div class="card">
        <DataTable :value="ground" stripedRows tableStyle="min-width: 70rem">
            <Column field="condition" header="Condition" ></Column>
            <Column field="relief_erosion" header="Relief Erosion"></Column>
            <Column field="water_table" header="Water Table"></Column>
            <Column field="vegetation" header="Vegetation"></Column>
            <Column field="puntuation" header="Puntutation"></Column>
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

const ground = ref([]);

function setPuntuation(condition, relief_erosion, water_table, vegetation) 
{
    return Math.floor((Number(condition) + Number(relief_erosion) + Number(water_table) + Number(vegetation)) / 4);
}

async function loadground(){
    const response = await axios.get('http://localhost:3000/api/Grounds');
    ground.value = response.data.map(ground => ({
        condition: ground.condition,
        relief_erosion: ground.relief_erosion,
        water_table: ground.water_table,
        vegetation: ground.vegetation,
        puntuation: setPuntuation(ground.condition, ground.relief_erosion, ground.water_table, ground.vegetation)
    }));
    
console.log(ground.value)
}

loadground();
</script>

<style scoped>
.card{
    align-items: center;
    overflow: auto;
}

</style>