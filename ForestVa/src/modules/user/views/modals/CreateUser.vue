<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import {useSendRequest} from '@/common/utils/useSendRequest.ts';
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber';
import { ref } from 'vue';
import { useSession } from '@/common/site/useUser';

const url = useSession().rol === 'superuser' ? 'Admins' : 'Observers';

function createUser(event){
    console.log(event);
    useSendRequest({
        url: url,
        method: 'POST',
        data: user.value,
    })
}

const user=ref({
    first_name: '',
    last_name: '',
    user_name: '',
    user_password: '',
    parcelid: null,
})
</script>

<template>
    <form action="" @submit.prevent="createUser">
        <section>
            <FloatLabel class="input-sections">
                <InputText id="first_name" required v-model="user.first_name"></InputText>
                <label for="first_name" required>First name</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputText id="last_names" required v-model="user.last_name"></InputText>
                <label for="last_names">Last names</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputText id="user_name" required v-model="user.user_name"></InputText>
                <label for="user_name">User name</label>
            </FloatLabel>
        </section>
        <section>
            <FloatLabel class="input-sections">
                <InputText id="user_password" type="password" required v-model="user.user_password"></InputText>
                <label for="user_password">Password</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputNumber id="parcel" v-model="user.parcelid"/>
                <label for="parcel">Parcel</label>
            </FloatLabel>
            <Button type="submit" class="btn">Create</Button>
        </section>
        </form>
    
</template>

<style scoped>
form{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 35px;
}
form .input-sections{
    margin-bottom: 35px;
}

form .input-sections:first-child{
    margin-top: 20px;
}

form .input-sections:last-child{
    display: flex;
    justify-content: space-around;
    margin-bottom: 0;
}

.btn {
    border-radius: 5px;
}

section{
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: end;
}
</style>