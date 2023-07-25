<template>
  <div class="modalContainer">
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
      <span class="text-3xl font-bold mb-2">{{ displayInputs }}</span>
      <SignUpModal
        v-if="displayInputs === 'Register'"
        @changeForm="displayInputs = 'Login'"
        @closeModal="$emit('closeModal')"
      />
      <SignInModal
        v-if="displayInputs === 'Login'"
        @changeForm="displayInputs = 'Register'"
        @closeModal="$emit('closeModal')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['closeModal']);
const displayInputs = ref<'Register' | 'Login'>('Login');

const closeModal = () => {
  emit('closeModal');
};
</script>

<style scoped>
.modalContainer {
  background-color: hsl(0, 0%, 0%, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 0.8rem;
}
</style>
