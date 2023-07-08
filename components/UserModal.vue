<template>
  <div class="modalContainer">
    <div
      class="relative flex flex-col items-center m-auto bg-primary border-2 text-white border-white rounded-lg w-3/12 h-96 p-8"
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
      <form class="flex flex-col w-4/5 space-y-2 items-center">
        <label class="text-2xl" for="name">Name:</label>
        <input
          class="p-1 rounded-md w-full text-black"
          type="text"
          id="name"
          placeholder="John Doe"
        />
        <label class="text-2xl" for="email">Email:</label>
        <input
          class="p-1 rounded-md w-full text-black"
          type="email"
          id="email"
          placeholder="exemple@email.com"
        />
        <label class="text-2xl" for="password">Password:</label>
        <input
          class="p-1 rounded-md w-full text-black"
          type="password"
          id="password"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['closeModal']);

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
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
