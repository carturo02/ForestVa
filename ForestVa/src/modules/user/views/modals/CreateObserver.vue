<script setup lang="ts">
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import { useSendRequest } from '@/common/utils/useSendRequest';
import Button from 'primevue/button'
import { ref } from 'vue';
import { Observer } from '../../classes/Observer';

function createUser(event) {
    /*useSendRequest({
        url: 'Observers',
        method: 'POST',
        data: user.value,
    })*/
    Observer.createElement(user.value)
}

const user = ref({
    first_name: '',
    last_name: '',
    user_name: '',
    user_password: '',
})
</script>

<template>
    <form action="" @submit.prevent="createUser">
        <section>
            <FloatLabel class="input-sections">
                <InputText id="first_name" required v-model="user.first_name"></InputText>
                <label for="first_name" required>{{ $t('table.user.first_name') }}</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputText id="last_names" required v-model="user.last_name"></InputText>
                <label for="last_names">{{ $t('table.user.last_name') }}</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputText id="user_name" required v-model="user.user_name"></InputText>
                <label for="user_name">{{ $t('table.user.user_name') }}</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputText id="user_password" type="password" required v-model="user.user_password"></InputText>
                <label for="user_password">{{ $t('table.user.password') }}</label>
            </FloatLabel>
            <Button type="submit" class="btn">{{ $t('table.create') }}</Button>
        </section>
    </form>

</template>

<style scoped>
form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 35px;
}

form .input-sections {
    margin-bottom: 35px;
}

form .input-sections:first-child {
    margin-top: 20px;
}

.btn {
    border-radius: 5px;
}

section {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: end;
}
</style>