<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
</script>

<template>
    <form action="">
        <section>
            <FloatLabel class="input-sections">
                <InputText id="structure"></InputText>
                <label for="structure">Structure</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputText id="specie"></InputText>
                <label for="specie">Specie</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputNumber id="height"/>
                <label for="height">Height</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputNumber id="shaft_height"/>
                <label for="shaft_height">Shaft height</label>
            </FloatLabel>
        </section>
        <section>
            <FloatLabel class="input-sections">
                <InputNumber id="minx"/>
                <label for="minx">Min X</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputNumber id="miny"/>
                <label for="miny">Min Y</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputNumber id="maxx"/>
                <label for="maxx">Max X</label>
            </FloatLabel>
            <FloatLabel class="input-sections">
                <InputNumber id="maxy"/>
                <label for="maxy">Max Y</label>
            </FloatLabel>
        </section>
        <section>
            <FloatLabel class="input-sections">
                <InputText id="parcel"/>
                <label for="parcel">Parcel</label>
            </FloatLabel>
            <Button class="btn">Create</Button>
        </section>
    </form>
</template>


<style scoped>
form{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 35px;
    max-width: 33.9rem
}
form .input-sections{
    margin-bottom: 35px;
}

form .input-sections:first-child{
    margin-top: 20px;
}

form .input-sections:last-child{
    margin-bottom: 0;
}

section:last-child{
    display: flex;
    margin-top: 20px;
    width: 100%;
    justify-content: space-between;
}

section:last-child .input-sections{
    margin-top: 0;
    margin-bottom: 0;
}
.btn {
    border-radius: 5px;
    height: 40px;
    width: 100px
}

section{
    margin: 10px;
}

@media (max-width: 590px){
    form{
        justify-content: center;
    }
    section:last-child{
        flex-direction: column;
        align-items: center;
    }
    .btn{
        margin-top: 20px;
    }
}
</style>