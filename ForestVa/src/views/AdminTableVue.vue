<template>
    <div class="card">
        <DataTable :value="admin" stripedRows tableStyle="min-width: 70rem">
            <Column field="user_name" header="User Name" ></Column>
            <Column field="user_password" header="User Password"></Column>
            <Column field="first_name" header="First Name"></Column>
            <Column field="last_name" header="Last Name"></Column>
            <Column field="parcel" header="Parcel"></Column>
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

const admin = ref([]);

async function loadadmin(){
    const response = await axios.get('http://localhost:3000/api/Users');
    admin.value = response.data.map(admin => ({
        user_name: admin.user_name,
        user_password: admin.user_password,
        first_name: admin.first_name,
        last_name: admin.last_name,
        parcel: admin.parcel
    }));
    
console.log(admin.value)
}

loadadmin();
</script>

<style scoped>
.card{
    align-items: center;
    overflow: auto;
}

</style>