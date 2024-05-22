<script setup>
import { ref } from 'vue';
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';

const admins = ref([]);

const cb = (data) => {
    admins.value = data.map(admin => ({
        user_name: admin.user.user_name,
        first_name: admin.user.first_name,
        last_name: admin.user.last_name,
        parcel: admin.parcelid
    }));
}
</script>

<template>
    <VTable v-model="observers" :cb="cb" :url="'Admins'">
        <Column field="user_name" header="USER NAME"></Column>
        <Column field="first_name" header="FIRST NAME"></Column>
        <Column field="last_name" header="LAST NAME"></Column>
        <Column field="parcel" header="PARCEL"></Column>
    </VTable>
</template>