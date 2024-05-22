<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button'

const roles = ref([
    {
        id: 1,
        rol: "rol 1"
    },
    {
        id: 2,
        rol: "rol 2"
    },
    {
        id: 3,
        rol: "rol 3"
    }
])

const rol=ref(null);
</script>

<template>
    <form action="">
            <FloatLabel class="input-sections">
                <InputText id="first_name"></InputText>
                <label for="first_name">First name</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputText id="last_names"></InputText>
                <label for="last_names">Last names</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputText></InputText>
                <label for="">User name</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputText type="password"></InputText>
                <label for="">Password</label>
            </FloatLabel>
            <div class="input-sections">
                <Dropdown v-model="rol" placeholder="Select the rol" :options="roles" optionLabel="rol"></Dropdown>
                <Button class="btn">Create</Button>
            </div>
        </form>
    
</template>

<style scoped>
h1{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 35px;
    align-self: self-start;
}

form{
    display: flex;
    flex-direction: column;
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
}

.btn {
    border-radius: 5px;
}
</style>