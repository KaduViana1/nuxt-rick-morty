<template>
  <form
    @submit.prevent="signIn"
    class="flex flex-col w-4/5 space-y-2 items-center h-full"
    id="loginForm"
  >
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
      <span>Not registered yet?</span>
      <button @click="emit('changeForm')" class="text-2xl underline">
        Create Account
      </button>
    </div>
    <Button form="loginForm" type="submit">Login</Button>
  </div>
  <span class="text-xl">{{ apiResponse }}</span>
</template>

<script setup lang="ts">
import axios from 'axios';
const formData = reactive({
  email: '',
  password: '',
});
const apiResponse = ref('');
const emit = defineEmits(['changeForm']);

const signIn = () => {
  axios
    .post('/api/login', {
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
  formData.email = '';
  formData.password = '';
};
</script>
