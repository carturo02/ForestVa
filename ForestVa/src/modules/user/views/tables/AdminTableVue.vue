<script setup lang="ts">
import { ref } from 'vue';
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import CreateUser from '../modals/CreateUser.vue';
import {Admin} from '../../classes/Admin.ts' ;
import InputText from 'primevue/inputtext';

const admins = ref([]);

const cb = (data) => {
    admins.value = data.map(admin => ({
        user_name: admin.user.user_name,
        first_name: admin.user.first_name,
        last_name: admin.user.last_name,
        parcel: admin.parcelid
    }));
}

const form = {component: CreateUser, header: 'New Admin'};
</script>

<template>
    <VTable :controller="Admin" :form="form" dataKey="id">
        <Column field="user_name" :header="$t('table.user.user_name')">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]"></InputText>
            </template>
        </Column>
        <Column field="first_name" :header="$t('table.user.first_name')">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]"></InputText>
            </template>
        </Column>
        <Column field="last_name" :header="$t('table.user.last_name')">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]"></InputText>
            </template>
        </Column>
        <Column field="parcelid" :header="$t('table.user.parcel')"></Column>
    </VTable>
</template>