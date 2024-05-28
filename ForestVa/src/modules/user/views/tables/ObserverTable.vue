<script setup lang="ts">
import VTable from '@/components/VTable.vue';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import CreateUser from '../modals/CreateUser.vue';
import { Observer } from '../../classes/Observer.ts';

const form = {component: CreateUser, header: 'modal.create.observer'};

</script>

<template>
    <VTable :controller="Observer" :form="form" dataKey="id">
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