<script setup lang="ts">
import { ref } from 'vue';
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import CreateUser from '../modals/CreateUser.vue';
import { Observer } from '../../classes/Observer.ts';
const observers = ref([]);

const form = {component: CreateUser, header: 'New Observer'};

</script>

<template>
    <VTable :controller="Observer" :form="form" dataKey="id">
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
        <Column field="parcelid" header="Parcel"></Column>
    </VTable>
</template>