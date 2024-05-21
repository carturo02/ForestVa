
<template>
    <div class="card">
        <DataTable :value="plant" stripedRows tableStyle="min-width: 70rem">
            <Column field="structure" header="STRUCTURE" ></Column>
            <Column field="specie" header="SPECIE"></Column>
            <Column field="height" header="HEIGHT"></Column>
            <Column field="shaft_height" header="SHAFT HEIGHT"></Column>
            <Column field="minx" header="MINIMUM X"></Column>
            <Column field="maxx" header="MAXIMUM X"></Column>
            <Column field="miny" header="MINIMUM Y"></Column>
            <Column field="minx" header="MAXIMUM Y"></Column>
            <Column header="">
                <template #header>
                    <Button class="btn-create" @click="create">
                        CREATE PLANT
                        <i class="icon ion-plus"></i>
                    </Button>
                </template>
                <template #body="slotProps">
                    <Button class="btn" @click="edit(slotProps.data)">
                        <i class="icon ion-edit"></i>
                    </Button>
                    <Button class="btn" @click="delet(slotProps.data)">
                        <i class="icon ion-close"></i>
                    </Button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>


<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import Button from 'primevue/button'
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

function create() {
   
    console.log('Crear');
}

function edit(data) {
   
    console.log('Editar', data);
}

function delet(data) {
 
    console.log('Eliminar', data);
}
</script>

<style scoped>
.card{
    align-items: center;
    overflow: auto;
}

.btn-create{
    color: white;
    background-color: #10f440;
    align-items: center;
    font-weight: bold;
    height: 30px;
    border-radius: 0.5rem;
    border-color: #10f440;
}
.btn{
    margin-left: 0.5rem;
    color: white;
    background-color: #10f440;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
}
</style>