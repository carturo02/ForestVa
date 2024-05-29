<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import useEvents from '@/common/utils/useEvents';

const props = defineProps({
    controller: Object,
    cb: Function,
    form: {
        type: Object,
        required: true
    },
    dataKey: String,
    edition: {
        type: Boolean,
        default: true
    },
    deletion: {
        type: Boolean,
        default: true
    }
});
import html2pdf from 'html2pdf.js';

const { response } = props.controller.getElements();
const editingRows = ref(!props.edition);
const tableRef = ref(null); 

function create() {
    useEvents().dispatch('showDialog', props.form);
    console.log('Crear');
}

function edit(event){
    props.controller.edit(event.newData);
}

const exportarTablaAPdf = () => {
    if (!tableRef.value || !tableRef.value.$el || !tableRef.value.$el.children.length) {
        console.error("null.");
        return;
    }
    const clone = tableRef.value.$el.cloneNode(true);
    const buttons = clone.querySelectorAll('button');
    buttons.forEach(btn => btn.parentNode.removeChild(btn));

    const options = {
        filename: "datos.pdf",
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'mm', format: 'a3', orientation: 'portrait' },
    };

   
    html2pdf(clone, options);
};
</script>

<template>
    <div class="card">
        <DataTable 
            ref="tableRef" 
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
                    <div class="button-container">
                        <Button class="btn" @click="create">
                            {{$t('table.create')}}
                            <i class="icon ion-plus"></i>
                        </Button>
                        <div class="export_to_PDF" v-if="response && response.length > 0">
                            <Button class="bt1" label="Exportar a PDF" @click="exportarTablaAPdf" :style="{ backgroundColor: 'red', 'border-radius': '10px', border: 'none'}"/>
                        </div>
                    </div>
                </template>
            </Column>
            <slot></slot>
            <Column v-if="props.edition" :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
            <Column v-if="props.deletion" header="">
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
    margin-bottom: 10px;
}

.button-container {
    display: flex;
    flex-direction: column;
}
</style>
