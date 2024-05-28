<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import { ref } from 'vue';
import { Plant } from '../../classes/Plants';
import { Polygonal } from '../../classes/Polygonals';

const polygonal = ref({
    minx: null,
    miny: null,
    maxx: null,
    maxy: null,
})

function createPolygonal() {
    Polygonal.createElement(polygonal.value)
}
</script>

<template>
    <form action="" @submit.prevent="createPolygonal">
        <div>
            <section>
                <FloatLabel class="input-sections">
                    <InputNumber id="minx" v-model="polygonal.minx" />
                    <label for="minx">{{ $t('table.plant.minx') }}</label>
                </FloatLabel>
                <FloatLabel class="input-sections">
                    <InputNumber id="miny" v-model="polygonal.miny" />
                    <label for="miny">{{ $t('table.plant.miny') }}</label>
                </FloatLabel>
                <FloatLabel class="input-sections">
                    <InputNumber id="maxx" v-model="polygonal.maxx" />
                    <label for="maxx">{{ $t('table.plant.maxx') }}</label>
                </FloatLabel>
                <FloatLabel class="input-sections">
                    <InputNumber id="maxy" v-model="polygonal.maxy" />
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
    width: 100px
}

section {
    margin: 10px;
}

.section-button{
    display: flex;
    justify-content: end;
}
</style>