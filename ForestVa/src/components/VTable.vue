<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button'
import useEvents from '@/common/utils/useEvents';
import { ref } from 'vue';
import { VueElement } from 'vue';
import { computed } from 'vue';

const props = defineProps({
    controller: Object,
    cb: Function,
    form: {
        type: {
            component: VueElement,
            header: String
        }
    },
    dataKey: String,
    edition: {
        type: Boolean,
        default: true
    },
    deletion: Boolean
});

const { response } = props.controller.getElements();
const editingRows = ref(!props.edition);

function create() {
    useEvents().dispatch('showDialog', props.form);
    console.log('Crear');
}

function edit(event){
    props.controller.edit(event.newData);
}
</script>

<template>
    <div class="card">
        <DataTable 
        v-model:editingRows="editingRows"
        editMode="row"
        :value="response"
        stripedRows 
        tableStyle="min-width: 70rem"
        :dataKey="props.dataKey"
        @row-edit-save="edit"
        >
            <Column>
                <template #header>
                    <Button class="btn" @click="create">
                        {{$t('table.create')}}
                        <i class="icon ion-plus"></i>
                    </Button>
                </template>
            </Column>
            <slot></slot>
            <Column v-if="props.edition" :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
            <Column header="">
                <template #body="slotProps">
                    <Button severity="danger" class="btn" @click="props.controller.deleteElement(slotProps.data[props.dataKey])">
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