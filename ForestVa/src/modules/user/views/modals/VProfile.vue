<script setup>
import { useSendRequest } from '@/common/utils/useSendRequest.ts';
import { useSession } from '@/common/site/useUser.ts';

const session = useSession();
const { response } = useSendRequest({
    url: `Users/${session.id}`
})
</script>

<template>
    <section v-if="response" class="profile">
        <p><b>{{ $t('table.user.user_name') }}:</b> {{ response.user_name}}</p>
        <p><b>{{ $t('table.user.first_name') }}:</b> {{ response.first_name}}</p>
        <p><b>{{ $t('table.user.last_name') }}:</b> {{ response.last_name}}</p>
        <p v-if="session.parcel"><b>{{ $t('table.plant.parcel') }}: </b>{{ session.parcel}}</p>
        <p><b>{{ $t('table.user.rol') }}: </b>{{ session.rol}}</p>
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