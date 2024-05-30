<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import { ref } from 'vue';
import { Plant } from '../../classes/Plants';

const plant = ref({
    structure: '',
    specie: '',
    height: null,
    shaft_height: null,
    minx: null,
    miny: null,
    maxx: null,
    maxy: null,
    parcelId: null
})

function createPlant() {
    Plant.createElement(plant.value);
}
</script>

<template>
    <form action="" @submit.prevent="createPlant">
        <div>
            <section>
                <FloatLabel class="input-sections">
                    <InputText id="structure" v-model="plant.structure"></InputText>
                    <label for="structure">{{ $t('table.plant.structure') }}</label>
                </FloatLabel>
                <FloatLabel class="input-sections">
                    <InputText id="specie" v-model="plant.specie"></InputText>
                    <label for="specie">{{$t('table.plant.specie')}}</label>
                </FloatLabel>
                <FloatLabel class="input-sections">
                    <InputNumber id="height" v-model="plant.height" />
                    <label for="height">{{$t('table.plant.height')}}</label>
                </FloatLabel>
                <FloatLabel class="input-sections">
                    <InputNumber id="shaft_height" v-model="plant.shaft_height" />
                    <label for="shaft_height">{{$t('table.plant.shaft_height')}}</label>
                </FloatLabel>
            </section>
            <section>
                <FloatLabel class="input-sections">
                    <InputNumber id="minx" v-model="plant.minx" />
                    <label for="minx">{{ $t('table.plant.minx') }}</label>
                </FloatLabel>
                <FloatLabel class="input-sections">
                    <InputNumber id="miny" v-model="plant.miny" />
                    <label for="miny">{{ $t('table.plant.miny') }}</label>
                </FloatLabel>
                <FloatLabel class="input-sections">
                    <InputNumber id="maxx" v-model="plant.maxx" />
                    <label for="maxx">{{ $t('table.plant.maxx') }}</label>
                </FloatLabel>
                <FloatLabel class="input-sections">
                    <InputNumber id="maxy" v-model="plant.maxy" />
                    <label for="maxy">{{ $t('table.plant.maxy') }}</label>
                </FloatLabel>
            </section>
        </div>
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
    width: 120px
}

section {
    margin: 10px;
}

.section-button{
    display: flex;
    justify-content: end;
}
</style>