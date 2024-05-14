<template>
    <div>
      <table class="tb1">
        <thead>
          <tr>
            <th v-for="column in columns" v-bind:key="column.name">
              <h2 :class="column.headerClass">{{ column.displayName }}</h2>
            </th>
            <th class="new">
              <button class="create" @click.stop="openModal"><img src="/src/components/icons/create-1.ico"></button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" v-bind:key="index">
            <td v-for="column in columns" v-bind:key="column.name">
              <input v-if="column.type === 'checkbox'" type="checkbox" :id="`${column.name}-checkbox`">
              <span v-else>{{ item[column.name] }}</span>
            </td>
            <td class="edit_del">
              <button class="edit" @click.stop="editItem(index)"><img src="/src/components/icons/edit.ico"></button>
              <button class="delete" @click.stop="deleteItem(index)"><img src="/src/components/icons/trash.ico"></button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="showModal" class="modal">
      <div class="modal-content">
        <form @submit.prevent="addItem" class="form-style">
          <div class="form-row" v-for="column in columns" :key="column.name">
            <label :for="`${column.name}-input`" class="form-label">{{ column.displayName }}:</label>
            <input :id="`${column.name}-input`" class="form-input"   maxlength="20" v-model="newItem[column.name]" required>
          </div>
          <div class="button-group">
            <button class="acept" type="submit">Aceptar</button>
            <button class="clean" type="reset">Limpiar</button>
            <button class="cancel" @click="closeModal">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="showDeleteConfirm" class="modal_confirm">
    <div class="modal_confirm-content">
        <h1><strong>¿Estás seguro de que quieres eliminar este elemento?</strong></h1>
      <div class="button-group_confirm">
        <button class="confirmDelete" @click="confirmDelete">Eliminar</button>
        <button class="cancelDelete" @click="cancelDelete">Cancelar</button>
      </div>
    </div>
  </div>
  </div>
</template>
//script para pruebas
<script setup>
import { ref } from 'vue';

const columns = ref([
  { name: 'poligonal', displayName: 'POLIGONAL', headerClass: 'enc-2' },
  { name: 'parcela', displayName: 'PARCELA', headerClass: 'enc-3' },
  { name: 'altura', displayName: 'ALTURA', headerClass: 'enc-4' },
  { name: 'altura_rama', displayName: 'ALTURA DE LA RAMA', headerClass: 'enc-5' },
  { name: 'especie', displayName: 'ESPECIE', headerClass: 'enc-6' },
  { name: 'estrato', displayName: 'ESTRATO', headerClass: 'enc-7' }
]);
const data = ref([]);
const showModal = ref(false);
const showDeleteConfirm = ref(false);
let deleteIndex = ref(-1);
let editIndex = ref(-1);

const newItem = ref(
  columns.value.reduce((acc, column) => {
    acc[column.name] = '';
    return acc;
  }, {})
);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const addItem = () => {
  if(validateForm ()){
  if (editIndex.value === -1) {
    data.value.push({...newItem.value});
  } else {
    data.value[editIndex.value] = {...newItem.value};
    editIndex.value = -1;
  }
  resetNewItem();
 }
  closeModal();
};

const deleteItem = (index) => {
  deleteIndex.value = index;
  showDeleteConfirm.value = true;
};

const confirmDelete = () => {
  data.value.splice(deleteIndex.value, 1);
  
  showDeleteConfirm.value = false;
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
};

const editItem = (index) => {
  Object.assign(newItem.value, data.value[index]);
  editIndex.value = index;
  openModal();
};

const resetNewItem = () => {
  Object.keys(newItem.value).forEach(key => {
    newItem.value[key] = '';
  });
};
//funtions for load and post
const validateForm = () => {
  let flag = true;
  if (isNaN(newItem.value.altura)) {
    alert('La altura debe ser un número.');
    flag = false;
  }
  if (newItem.value.altura <= 0) {
    alert('La altura debe ser un número positivo.');
    flag = false;
  }
  if(isNaN(newItem.value.altura_rama)){
    alert('La altura de la rama debe ser un número');
    flag = false;
  }
  if (newItem.value.altura_rama <= 0) {
    alert('La altura de la rama debe ser un número positivo.');
    flag = false;
  }
  return flag;
};
/*
const validateString = (str) => {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/; 
  return regex.test(str);
};
*/
</script>
<!-- Descomentar este script setup y eliminar el anterior este hace la comunicación con el back
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const columns = ref([
  { name: 'poligonal', displayName: 'POLIGONAL', headerClass: 'enc-2' },
  { name: 'parcela', displayName: 'PARCELA', headerClass: 'enc-3' },
  { name: 'altura', displayName: 'ALTURA', headerClass: 'enc-4' },
  { name: 'altura_rama', displayName: 'ALTURA DE LA RAMA', headerClass: 'enc-5' },
  { name: 'especie', displayName: 'ESPECIE', headerClass: 'enc-6' },
  { name: 'estrato', displayName: 'ESTRATO', headerClass: 'enc-7' },
]);
const data = ref([]);
const showModal = ref(false);
let editIndex = ref(-1);

const newItem = ref(
  columns.value.reduce((acc, column) => {
    acc[column.name] = '';
    return acc;
  }, {})
);

// URL del backed para la comunicación
const baseURL = 'http://../api';

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const validateForm = () => {
  let flag = true;
  if (isNaN(newItem.value.altura)) {
    alert('La altura debe ser un número.');
    flag = false;
  }
  if (newItem.value.altura <= 0) {
    alert('La altura debe ser un número positivo.');
    flag = false;
  }
  if(isNaN(newItem.value.altura_rama)){
    alert('La altura de la rama debe ser un número');
    flag = false;
  }
  if (newItem.value.altura_rama <= 0) {
    alert('La altura de la rama debe ser un número positivo.');
    flag = false;
  }
  return flag;
};
const validateString = (str) => {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/; 
  return regex.test(str);
};


const addItem = async () => {
  if(validateForm()){
  if (editIndex.value === -1) {
    await postItem(newItem.value);
  } else {
    await updateItem(editIndex.value, newItem.value);
    editIndex.value = -1;
  }
  resetNewItem();
 }
  closeModal();
};

const postItem = async (item) => {
  try {
    await axios.post(`${baseURL}/ruta-para-añadir`, item);
    loadData();
  } catch (error) {
    console.error('Hubo un error al añadir el ítem:', error);
  }
};

const deleteItem = async (index) => {
  try {
    const item = data.value[index];
    await axios.delete(`${baseURL}/ruta-para-eliminar/${item.id}`);
    loadData();
  } catch (error) {
    console.error('Hubo un error al eliminar el ítem:', error);
  }
};

const updateItem = async (index, newItem) => {
  try {
    const item = data.value[index];
    await axios.put(`${baseURL}/ruta-para-actualizar/${item.id}`, newItem);
    loadData();
  } catch (error) {
    console.error('Hubo un error al actualizar el ítem:', error);
  }
};

const resetNewItem = () => {
  Object.keys(newItem.value).forEach(key => {
    newItem.value[key] = '';
  });
};

const loadData = async () => {
  try {
    const response = await axios.get(`${baseURL}/ruta-de-tus-datos`);
    // Asumiendo que el backend devuelve un objeto con dos propiedades: 'columns' y 'data'
    columns.value = response.data.columns.map(column => ({
      name: column,
      displayName: column.toUpperCase(),
      headerClass: 'enc-' + (columns.value.length + 2),  // Ajusta esto según tus necesidades
    }));
    data.value = response.data.data;
  } catch (error) {
    console.error('Hubo un error al cargar los datos:', error);
  }
};
</script>

 -->
 <script>
    </script>
<!-- Descomentar este script setup y eliminar el anterior este hace la comunicación con el back
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const columns = ref([]);
const data = ref([]);
const showModal = ref(false);
let editIndex = ref(-1);

const newItem = ref(
  columns.value.reduce((acc, column) => {
    acc[column.name] = { value: '', error: '' };
    return acc;
  }, {})
);


// URL del backed para la comunicación
const baseURL = 'http://../api';

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const validateForm = () => {
  let isValid = true;
  for (let column of columns.value) {
    let value = newItem.value[column.name].value;
    if (column.type === 'number' && isNaN(Number(value))) {
      newItem.value[column.name].error = 'Debe ser un número.';
      isValid = false;
    } else if (column.type === 'text' && typeof value !== 'string') {
      newItem.value[column.name].error = 'Debe ser texto.';
      isValid = false;
    } else {
      newItem.value[column.name].error = '';
    }
  }
  return isValid;
};

const validateString = (str) => {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/; 
  return regex.test(str);
};
const addItem = async () => {
  if(validateForm()){
  if (editIndex.value === -1) {
    await postItem(newItem.value);
  } else {
    await updateItem(editIndex.value, newItem.value);
    editIndex.value = -1;
  }
  resetNewItem();
 }
  closeModal();
};

const postItem = async (item) => {
  try {
    await axios.post(`${baseURL}/ruta-para-añadir`, item);
    loadData();
  } catch (error) {
    console.error('Hubo un error al añadir el ítem:', error);
  }
};

const deleteItem = (index) => {
  deleteIndex.value = index;
  showDeleteConfirm.value = true;
};

const confirmDelete = async () => {
  try {
    const item = data.value[deleteIndex.value];
    await axios.delete(`${baseURL}/ruta-para-eliminar/${item.id}`);
    loadData();
  } catch (error) {
    console.error('Hubo un error al eliminar el ítem:', error);
  }
  showDeleteConfirm.value = false;
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
};

const updateItem = async (index, newItem) => {
  try {
    const item = data.value[index];
    await axios.put(`${baseURL}/ruta-para-actualizar/${item.id}`, newItem);
    loadData();
  } catch (error) {
    console.error('Hubo un error al actualizar el ítem:', error);
  }
};

const resetNewItem = () => {
  Object.keys(newItem.value).forEach(key => {
    newItem.value[key] = '';
  });
};

const loadData = async () => {
  try {
    const response = await axios.get(`${baseURL}/ruta-de-tus-datos`);
    // Asumiendo que el backend devuelve un objeto con dos propiedades: 'columns' y 'data'
    columns.value = response.data.columns.map(column => ({
      name: column,
      displayName: column.toUpperCase(),
      headerClass: 'enc-' + (columns.value.length + 2),  // Ajusta esto según tus necesidades
    }));
    data.value = response.data.data;
  } catch (error) {
    console.error('Hubo un error al cargar los datos:', error);
  }
};
</script>
 </script>

-->

<style>
/* Estilos generales */
body {
  font-family: Arial, sans-serif;
  background-color: #F0F8E8; /* Un color verde claro para simbolizar la naturaleza */
}

.modal,.modal_confirm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1050;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4); /* Un fondo oscuro para mejorar el contraste */
}

.modal-content,.modal-content_confirm {
  background-color: #FFF8DC; /* Un color claro para mantener la legibilidad */
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5%;
}
.form-style {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.button-group {
  display: flex;
  /*justify-content: space-between;*/
  width: 100%;
}
.button-group_confirm{
    display: flex;
    justify-content: center;
}

.cancel,.clean,.acept {
  margin: 10px;
  background-color: #008000; /* Un verde oscuro para los botones */
  color: #FFFFFF; /* Texto blanco para contraste */
  font-size: 1.2rem;
}

.acept{
    vertical-align: middle; 
    margin-right: 6.2rem;
}

.tb1 {
  width: 100%;
  border-collapse: collapse;
}

.tb1 th,.tb1 td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  border: 1px solid #008000; /* Un borde verde para conectar con la temática */
}

.tb1 th {
  background-color: #006400; /* Verde oscuro para los encabezados */
  font-weight: 700;
}

th h2{
font-weight: 700;
color:white;
}
td{
    font-weight: 700;
}

.tb1 td {
  background-color: #FFF8DC; /* Un color claro para mantener la legibilidad */
}

.create,.edit,.delete {
  /*border: 0.5px solid #008000; /* Un borde verde para conectar con la temática */
  /*border-radius: 50%;*/
  border: none;

  
}

.create {
    background-color: transparent;
}

.edit {
    background-color: transparent;
}

.delete {
background-color: transparent;
}

.confirmDelete,.cancelDelete {
  font-size: 1.6rem;
  border-radius: 10%;
  border: 0.1rem solid black;
  background-color:transparent;
  color: black;
  font-weight: 700;
  margin-left: 2rem;
}

.confirmDelete {
  margin-right: 2rem;
}

@media screen and (max-width: 600px) {
 .tb1 th,.tb1 td {
    display: block;
  }

 .tb1 th {
    text-align: center;
  }

 .tb1 td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

 .tb1 td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.form-label {
  flex-basis: 40%;
  text-align: left;
  font-weight: bold;
  vertical-align: middle; 
  padding: 0.3rem 0.7rem;
}

.form-input {
  flex-basis: 58%;
  text-align: right;
  border-radius: 5%;
  text-align: left;
  padding-left: 0.8rem;
}

</style>



