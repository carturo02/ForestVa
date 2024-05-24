<script setup>
import { ref } from 'vue';
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import CreateUser from '../modals/CreateUser.vue'

const observers = ref([]);

const cb = (data)=>{
    observers.value = data.map(observer => ({
        id: observer.id,
        user_name: observer.user.user_name,
        first_name: observer.user.first_name,
        last_name: observer.user.last_name,
        parcel: observer.parcelid
    }))
}

const form = {component: CreateUser, header: 'New Observer'};
</script>

<template>
    <VTable v-model="observers" :cb="cb" :url="'Observers'" :form="form" dataKey="id">
        <Column field="user_name" header="User Name">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]"></InputText>
            </template>
        </Column>
        <Column field="first_name" header="First Name">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]"></InputText>
            </template>
        </Column>
        <Column field="last_name" header="Last Name">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]"></InputText>
            </template>
        </Column>
        <Column field="parcel" header="Parcel"></Column>
    </VTable>
</template>