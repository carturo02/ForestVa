<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button'
import axios from 'axios';
import useEvents from '@/common/utils/useEvents';
import { defineModel } from 'vue';
import { ref } from 'vue';
import { VueElement } from 'vue';
import { useSendRequest } from '@/common/utils/useSendRequest';

const props = defineProps({
    url: String,
    cb: Function,
    form: {
        type: {
            component: VueElement,
            header: String
        }
    },
    dataKey: String
});

const elements = defineModel();
const editingRows = ref(false);

(async ()=>{
    const response = await axios.get(`http://localhost:3000/api/${props.url}`);
    
    props.cb(response.data);
})()

function create() {
    useEvents().dispatch('showDialog', props.form);
    console.log('Crear');
}

function edit(event) {
    useSendRequest({
        url: `${props.url}/${event.data[props.dataKey]}`,
        method: 'PATCH',
        data: event.newData.value
    })
    console.log(event);
}

function delet(data) {
 
    console.log('Eliminar', data);
}
</script>

<template>
    <div class="card">
        <DataTable 
        v-model:editingRows="editingRows"
        editMode="row"
        :value="elements"
        stripedRows 
        tableStyle="min-width: 70rem"
        :dataKey="props.dataKey"
        @row-edit-save="edit"
        >
            <Column>
                <template #header>
                    <Button class="btn" @click="create">
                        CREATE NEW 
                        <i class="icon ion-plus"></i>
                    </Button>
                </template>
            </Column>
            <slot></slot>
            <Column :rowEditor="true"></Column>
            <Column header="">
                <template #body="slotProps">
                    <Button severity="danger" class="btn" @click="delet(slotProps.data)">
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

.btn{
    border-radius: 10px;
}
</style>