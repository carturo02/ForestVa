<template>
    <div class="card">
        <DataTable :value="observer" stripedRows tableStyle="min-width: 70rem">
            <Column field="user_name" header="USER NAME"></Column>
            <Column field="user_password" header="USER PASSWORD"></Column>
            <Column field="first_name" header="FIRST NAME"></Column>
            <Column field="last_name" header="LAST NAME"></Column>
            <Column field="parcel" header="PARCEL"></Column>
            <Column header="">
                <template #header>
                    <Button class="btn-create" @click="create">
                        CREATE OBSERVER
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
import Button from 'primevue/button';
import { ref } from 'vue'
import axios from 'axios';

const observer = ref([]);

async function loadobserver(){
    const response = await axios.get('http://localhost:3000/api/Observers');
    observer.value = response.data.map(observer => ({
        user_name: observer.user.user_name,
        user_password: observer.user.user_password,
        first_name: observer.user.first_name,
        last_name: observer.user.last_name,
        parcel: observer.parcelid
    }));
    
console.log(observer.value)
}

loadobserver();

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
