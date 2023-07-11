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
    <button
      class="flex items-center text-2xl font-bold underline"
      form="loginForm"
      type="submit"
    >
      Login <img class="h-10 ml-1" src="../assets/portal.gif" alt="Portal" />
    </button>
  </div>
  <span class="text-xl">{{ errorMessage }}</span>
</template>

<script setup lang="ts">
import axios from 'axios';
const userName = useUserName();
const userId = useUserId();
const formData = reactive({
  email: '',
  password: '',
});
const errorMessage = ref('');
const emit = defineEmits(['changeForm', 'closeModal']);
const router = useRouter();

const signIn = () => {
  axios
    .post('/api/login', {
      email: formData.email,
      password: formData.password,
    })
    .then(response => {
      if (response.data.user) {
        userName.value = response.data.user.name;
        userId.value = response.data.user.id;
        emit('closeModal');
        router.push('/');
        resetInputs();
      }
    })
    .catch(error => {
      errorMessage.value = error.response.data.message;
    });
};

const resetInputs = () => {
  formData.email = '';
  formData.password = '';
};
</script>
