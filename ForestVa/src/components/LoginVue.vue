<template>
    <div class="l-form">
            <form @submit.prevent="submitForm" class="form">
                <h1 class="form__title" style="color: green">Sign-in ForestVa</h1>

                <div class="form__div">
                    <input v-model="username" class="form__input" placeholder=" ">
                    <label for="" class="form__label" style="background-color: transparent;">Username</label>
                </div>
                <div class="form__div">
                    <input v-model="password" class="form__input" placeholder=" ">
                    <label for="" class="form__label" style="background-color: transparent;">Password</label>
                </div>
                <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
                <input type="submit" class="form__button" value="Sign In">
                
            </form>
        </div>

</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

async function submitForm() {
    try {
        const response = await axios.post('http://localhost:3000/api/Users/login', {
            username: username.value,
            password: password.value
        });

        console.log('Usuario conectado', response.data);

        router.push('/app');
    } catch (error) {
      console.error('Error al conectar el usuario', error);
      errorMessage.value = error.response.data.message;
    }
}
</script>



<style scoped>
.error {
  color: red;}
/*===== BASE =====*/
*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  margin: 0;
}

/*===== FORM =====*/
.l-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  width: 360px;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
}
.form__title {
  font-weight: 500;
  margin-bottom: 2.5rem;
}
.form__div {
  position: relative;
  height: 52px;
  margin-bottom: 1.5rem;
}
.form__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: var(--normal-font-size);
  border: 2px solid lightgreen;
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
}
.form__label {
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 0.25rem;
  background-color: #fff;
  color: gray;
  font-size: var(--normal-font-size);
  transition: 0.3s;
}
.form__button {
  display: block;
  margin-left: auto;
  padding: 0.75rem 2rem;
  outline: none;
  border: none;
  background-color: green;
  color: #fff;
  font-size: var(--normal-font-size);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.3s;
}
.form__button:hover {
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.15);
}

/*Input focus move up label*/
.form__input:focus + .form__label {
  top: -1rem;
  left: 0.8rem;
  color: green;
  font-size: var(--small-font-size);
  font-weight: 500;
  z-index: 10;
}

/*Input focus sticky top label*/
.form__input:not(:placeholder-shown).form__input:not(:focus) + .form__label {
  top: -0.5rem;
  left: 0.8rem;
  z-index: 10;
  font-size: var(--small-font-size);
  font-weight: 500;
}

/*Input focus*/
.form__input:focus {
  border: 2px solid green;
}
</style>

