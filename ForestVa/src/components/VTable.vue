<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import Button from 'primevue/button'
import { ref } from 'vue'
import axios from 'axios';
import useEvents from '@/common/utils/useEvents';
import LoginVue from './LoginVue.vue'
import { defineModel } from 'vue';

const props = defineProps({
    url: String,
    cb: Function,
});

const elements = defineModel();

(async ()=>{
    const response = await axios.get(props.url);
    
    props.cb(response.data);
})()

function create() {
    useEvents().dispatch('showDialog', LoginVue);
    console.log('Crear');
}

function edit(data) {
   
    console.log('Editar', data);
}

function delet(data) {
 
    console.log('Eliminar', data);
}
</script>

<template>
    <div class="card">
        <DataTable :value="elements" stripedRows tableStyle="min-width: 70rem">
            <slot></slot>
            <Column header="">
                <template #header>
                    <Button class="btn-create" @click="create">
                        CREATE NEW 
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