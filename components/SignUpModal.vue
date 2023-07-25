<template>
  <form
    @submit.prevent="signUp"
    class="flex flex-col w-full lg:w-4/5 space-y-2 items-center"
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
  <span class="text-xl text-red-600">{{ errorMessage }}</span>
</template>

<script setup lang="ts">
const formData = reactive({
  name: '',
  email: '',
  password: '',
});
const errorMessage = ref('');
const emit = defineEmits(['changeForm', 'closeModal']);
const userName = useUserName();
const userId = useUserId();
const router = useRouter();

const signUp = async () => {
  const { data, error } = await useFetch<{
    user: {
      id: string;
      name: string;
    };
  }>('/api/signup', {
    method: 'POST',
    body: {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    },
  });

  if (error.value?.statusMessage) {
    errorMessage.value = error.value?.message;
    console.log(error);
    return;
  }

  if (data.value?.user) {
    userName.value = data.value.user.name;
    userId.value = data.value.user.id;
    emit('closeModal');
    router.push('/');
    resetInputs();
  }
};

const resetInputs = () => {
  formData.name = '';
  formData.email = '';
  formData.password = '';
};
</script>
