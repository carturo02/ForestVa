<script setup lang="ts">
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import CreateSuperUser from '../modals/CreateSuperUser.vue';
import { SuperUser } from '../../classes/SuperUser';

const form = {component: CreateSuperUser, header: 'modal.create.superuser'};

</script>

<template>
    <VTable :controller="SuperUser" :form="form" dataKey="id">
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
    </VTable>
</template>