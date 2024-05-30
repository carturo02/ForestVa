<script setup>
import { ref } from 'vue';
import html2pdf from 'html2pdf.js';

const tableEx = ref(null);

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
};

</script>


<template>
    <div class="table_container">
        <div class="component_container">
            <div class="button-export_container">
                <button class="action-button" id="exp" @click="exportarTablaAPdf">Exportar a PDF</button>
            </div>
            <table id="datos" ref="tableEx">
                <caption><h3>Datos del suelo</h3></caption>
                <tr>
                    <td>
                        <span>Condición</span>
                        <input type="number" readonly>
                    </td>
                    <td>
                        <span>Erosión del relieve</span>
                        <input type="number" readonly>
                    </td>
                    <td>
                        <span>Tabla de agua</span>
                        <input type="number" readonly>
                    </td>
                    <td>
                        <span>Vegetación</span>
                        <input type="number" readonly>
                    </td>
                    <td>
                        <span>Puntuación Final</span>
                        <input type="number" readonly>
                    </td>
                </tr>
            </table>
            <div class="button_container">
                <button class="action-button" id="edit">Editar</button>
                <button class="action-button" id="upd">Actualizar</button>
                <button class="action-button" id="clean">Limpiar</button>
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
       background-color: lightgreen; 
       border-radius: 10px;
       width: 30%; 
       padding: 1rem; 
    }


    #datos {
        border-collapse: separate;
        border-spacing: 10px; 
    }
   
    #datos span {
        text-align: left;
        margin-right: 2.5rem;
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
        border:none;
    }
    .button_container, .button-export_container {
    display: flex;
    justify-content:center; 
    width: 100%; 
}  
   .action-button {
        color: white; 
        border: none; 
        border-radius: 5px; 
        padding: 10px 20px; 
        cursor: pointer; 
        font-size: 16px; 
        margin-right:0.7rem;
   }
    #exp{
        background-color: red;
    }
    #edit,#upd,#clean{
        background-color: green;
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