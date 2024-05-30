<script setup>
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import { ref } from 'vue';
import { Parcel } from '../../classes/Parcels';

const parcel = ref({
    beginning_date: null,
    minx: 0,
    miny: 0,
    maxx: 0,
    maxy: 0,
    poligonalid: null
})


function createParcel() {
    Parcel.createElement(parcel.value);
}
</script>
<template>
    <form action="" @submit.prevent="createParcel">
        <FloatLabel class="input-sections">
            <label for="structure">{{ $t('table.parcel.beggining_date') }}</label>
            <Calendar dateFormat="yy-mm-dd" v-model="parcel.beginning_date"></Calendar>
        </FloatLabel>
        <section>
            <FloatLabel class="input-sections">
                <InputNumber id="minx" v-model="parcel.minx" />
                <label for="minx">{{ $t('table.plant.minx') }}</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputNumber id="miny" v-model="parcel.miny" />
                <label for="miny">{{ $t('table.plant.miny') }}</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputNumber id="maxx" v-model="parcel.maxx" />
                <label for="maxx">{{ $t('table.plant.maxx') }}</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputNumber id="maxy" v-model="parcel.maxy" />
                <label for="maxy">{{ $t('table.plant.maxy') }}</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputNumber id="poligonal" v-model="parcel.poligonalid" />
                <label for="poligonal">{{ $t('table.parcel.polygonal') }}</label>
            </FloatLabel>
        </section>
        <section class="section-button">
            <Button type="submit" class="btn">{{ $t('table.create') }}</Button>
        </section>
    </form>
</template>


<style scoped>
form div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

form .input-sections {
    margin-bottom: 35px;
}

form .input-sections:first-child {
    margin-top: 20px;
}

form .input-sections:last-child {
    margin-bottom: 0;
}

.btn {
    margin: 10px;
    border-radius: 5px;
    height: 40px;
    width: 120px;
}

section {
    margin: 10px;
}

.section-button {
    display: flex;
    justify-content: end;
}
</style>