
<template>
    <div class="card">
        <DataTable :value="polygonal" stripedRows tableStyle="min-width: 70rem">
            <Column field="minx" header="MINIMUM X"></Column>
            <Column field="maxx" header="MAXIMUM X"></Column>
            <Column field="miny" header="MINIMUM Y"></Column>
            <Column field="maxy" header="MAXIMUM Y"></Column>
            <Column header="PARCELS">
                <template #body="slotProps">
                    <Button class="btn-parcel" @click="watch">
                        <i class="icon ion-ios-eye-outline"></i>
                    </Button>
                </template>
            </Column>
            <Column header="">
                <template #header>
                    <Button class="btn-create" @click="create">
                        CREATE POLYGONALS
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
import { ref } from 'vue'
import axios from 'axios';

const polygonal = ref([]);

async function loadpolygonals(){
    const response = await axios.get('http://localhost:3000/api/Polygonals');
    polygonal.value = response.data.map(polygonal => ({
        minx: polygonal.minx,
        maxx: polygonal.maxx,
        miny: polygonal.miny,
        maxy: polygonal.maxy
    }));
    
console.log(polygonal.value)
}

loadpolygonals();

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
.btn-parcel{
    color: white;
    background-color: #10f440;
    border-radius: 50%;
    border-color: #10f440;
    width: 40px;
    height: 40px;
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
.ion-ios-eye-outline{
    font-size: 20px;
}
</style>