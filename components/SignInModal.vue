<template>
  <div
    class="relative flex flex-col w-full p-4 items-center m-auto bg-primary border-2 text-white border-white rounded-lg sm:w-3/5 lg:w-3/12 lg:p-8"
  >
    <button @click="closeModal" class="absolute right-2 top-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <span class="text-3xl font-bold mb-2">Log in</span>
    <form
      @submit.prevent="signIn"
      class="flex flex-col w-full md:w-4/5 space-y-2 items-center h-full"
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
    <span class="text-xl text-red-600">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
const userName = useUserName();
const userId = useUserId();
const formData = reactive({
  email: '',
  password: '',
});
const errorMessage = ref('');
const emit = defineEmits(['changeForm', 'closeModal']);
const router = useRouter();

const signIn = async () => {
  const { data, error } = await useFetch<{
    user: {
      id: string;
      name: string;
    };
  }>('/api/login', {
    method: 'POST',
    body: { email: formData.email, password: formData.password },
  });

  if (error.value?.statusMessage) {
    errorMessage.value = error.value?.statusMessage;
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
  formData.email = '';
  formData.password = '';
  errorMessage.value = '';
};

const closeModal = () => {
  resetInputs();
  emit('closeModal');
};
</script>
