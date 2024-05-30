<script setup>
import { ref, computed } from 'vue';
import html2pdf from 'html2pdf.js';

const tableEx = ref(null);
const isEditable = ref(false);
const condition = ref(2);
const erosion = ref(4);
const water = ref(3);
const vegetation = ref(5);

const averageScore = computed(() => {
    const conditionValue = Number(condition.value.value);
    const erosionValue = Number(erosion.value.value);
    const waterValue = Number(water.value.value);
    const vegetationValue = Number(vegetation.value.value);
    return (conditionValue + erosionValue + waterValue + vegetationValue) / 4;
});
const update = () => {

};

const editable = () => {
    isEditable.value = !isEditable.value;
    condition.value.readOnly = !isEditable.value;
    erosion.value.readOnly = !isEditable.value;
    water.value.readOnly = !isEditable.value;
    vegetation.value.readOnly = !isEditable.value;
    condition.value = 2;
};


const clean = () => {
    vegetation.value.value = 2;
    condition.value.value = 2;
    erosion.value.value = 2;
    water.value.value = 2;
}


const exportarTablaAPdf = () => {
    const tableElement = document.getElementById('datos');
    if (!tableElement ||!tableElement.children.length) {
        console.error("null");
        return;
    }

    const clone = tableElement.cloneNode(true);
    const buttons = clone.querySelectorAll('button');
    buttons.forEach(btn => btn.parentNode.removeChild(btn));

    const options = {
        filename: "suelos.pdf",
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 10 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf(clone, options);
}
</script>


<template>
    <div class="table_container">
        <div class="component_container">
            
            <table id="datos" ref="tableEx">
                <tr>
                    <td>
                        <span>Condición</span>
                        <input type="number" value="2" readonly ref="condition" min="2" max="5">
                    </td>
                    <td>
                        <span>Erosión del relieve</span>
                        <input type="number" value="4" readonly ref="erosion" min="2" max="5">
                    </td>
                    <td>
                        <span>Tabla de agua</span>
                        <input type="number" value="3" readonly ref="water" min="2" max="5">
                    </td>
                    <td>
                        <span>Vegetación</span>
                        <input type="number" value="5" readonly ref="vegetation" min="2" max="5">
                    </td>
                    <td>
                        <span >Puntuación Final</span>
                        <input class="points" readonly :value="averageScore">
                    </td>
                </tr>
            </table>
            <div class="button_container">
                <button class="button" id="edit" @click="editable">Editar</button>
                <button class="button" id="upd">Actualizar</button>
                <button class="button" id="clean" @click="clean">Limpiar</button>
            </div>
            <div class="button-export_container">
                <button class="button" id="exp" @click="exportarTablaAPdf">Exportar a PDF</button>
            </div>
        </div>
    </div>
</template>
<style scope>


    .table_container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 22rem; 
        width: 100%;
        background-color: transparent;
        margin-top: 4rem; 
    }
    #datos caption {
        caption-side: top;
        text-align: center;
    }

    .component_container {
       display: flex;
       flex-direction: column; 
       align-items: center; 
       background-color: #F8F8FF; 
       border-radius: 10px;
       width: 28%; 
       padding: 1rem; 
       box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
       border: 3px solid transparent;
       box-sizing: border-box;
    }


    #datos {
        border-collapse: separate;
        border-spacing: 10px; 
    }
   
    #datos span {
        text-align: left;
        margin-right: 4.5rem;
        margin-bottom: 0.8rem;
        font-weight: bold;
    }
    
    #datos td {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    
    #datos input {
        border-radius: 8px; 
        margin-bottom: 0.8rem;
        border:0.1px solid black;
        width: 2.5rem;
        margin-left: 10px;
        padding-left: 14.5px;
    }

    .button_container, .button-export_container {
        display: flex;
        justify-content:center ; 
        width: 100%; 
    }  
    .button-export_container{
     margin-top:0.7rem;
    }
   .button {
        color: white; 
        border: none; 
        border-radius: 5px; 
        padding: 7px 20px; 
        cursor: pointer; 
        font-size: 16px; 
        margin-right:0.7rem;
   }
    #exp{
        background-color: red;
    }
    #edit,#upd,#clean{
        background-color: #10b981;
    }
    #datos .points{
        background-color: transparent;
        cursor: default;
        border:none;
        padding-left: 10px;
    }

@media (max-width: 768px) {
    .component_container {
        width: 90%; 
    }
}
@media (max-width: 480px) {
    .component_container {
        width: 100%; 
    }
}
</style>