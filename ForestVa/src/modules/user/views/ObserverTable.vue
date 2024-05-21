<script setup>
import { ref } from 'vue';
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';

const observers = ref([]);

const cb = (data)=>{
    observers.value = data.map(observer => ({
        user_name: observer.user.user_name,
        first_name: observer.user.first_name,
        last_name: observer.user.last_name,
        parcel: observer.parcelid
    }))
}
</script>

<template>
    <VTable v-model="observers" :cb="cb" :url="'http://localhost:3000/api/Observers'">
        <Column field="user_name" header="USER NAME"></Column>
        <Column field="first_name" header="FIRST NAME"></Column>
        <Column field="last_name" header="LAST NAME"></Column>
        <Column field="parcel" header="PARCEL"></Column>
    </VTable>
</template>