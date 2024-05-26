<script setup>
import { useSendRequest } from '@/common/utils/useSendRequest.ts';
import { useSession } from '@/common/site/useUser.ts';
import Button from 'primevue/button';

const session = useSession();
const { response } = useSendRequest({
    url: `Users/${session.id}`
})
</script>

<template>
    <section v-if="response" class="profile">
        <p><b>User name:</b> {{ response.user_name}}</p>
        <p><b>Firs name:</b> {{ response.first_name}}</p>
        <p><b>Last name:</b> {{ response.last_name}}</p>
        <p><b>Parcel: </b>{{ session.parcel}}</p>
        <p><b>Rol: </b>{{ session.rol}}</p>
    </section>
</template>

<style scoped>
.profile{
    display: flex;
    flex-direction: column;
    align-items: start;
    min-width: 25rem;
}
</style>