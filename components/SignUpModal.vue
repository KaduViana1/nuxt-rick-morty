<template>
  <form
    @submit.prevent="signUp"
    class="flex flex-col w-4/5 space-y-2 items-center"
    id="registerForm"
  >
    <label class="text-2xl" for="name">Name:</label>
    <input
      class="p-1 rounded-md w-full text-black"
      type="text"
      id="name"
      placeholder="John Doe"
      v-model="formData.name"
      required
    />
    <label class="text-2xl" for="email">Email:</label>
    <input
      class="p-1 rounded-md w-full text-black"
      type="email"
      id="email"
      required
      placeholder="exemple@email.com"
      v-model="formData.email"
    />
    <label class="text-2xl" for="password">Password:</label>
    <input
      class="p-1 rounded-md w-full text-black"
      type="password"
      id="password"
      v-model="formData.password"
      required
    />
  </form>
  <div class="w-full mt-10 flex justify-between">
    <div class="flex flex-col items-start">
      <span>Alredy have an account?</span>
      <button @click="emit('changeForm')" class="text-2xl underline">
        Log in
      </button>
    </div>
    <Button form="registerForm" type="submit">Sign Up</Button>
  </div>
  <span class="text-xl">{{ apiResponse }}</span>
</template>

<script setup lang="ts">
import axios from 'axios';
const formData = reactive({
  name: '',
  email: '',
  password: '',
});
const apiResponse = ref('');
const emit = defineEmits(['changeForm']);

const signUp = () => {
  axios
    .post('/api/signup', {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    })
    .then(response => {
      if (response.data.user) {
        apiResponse.value = `User created`;
      }
    })
    .catch(error => {
      apiResponse.value = error.response.data.message;
      console.log(error.response.data.message);
    });
};

const resetInputs = () => {
  formData.name = '';
  formData.email = '';
  formData.password = '';
};
</script>
