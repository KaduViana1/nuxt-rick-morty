<template>
  <div
    class="text-center py-8 bg-[url(/assets/background.jpg)] text-white flex flex-col h-screen w-full justify-center items-center space-y-6"
  >
    <div class="flex flex-col">
      <span class="text-5xl font-bold">Error {{ error.statusCode }}</span>
      <span class="text-2xl">{{ error.statusMessage }}</span>
    </div>
    <img
      src="./assets/404.jpg"
      alt="page not found"
      class="rounded-lg border-white border-2 max-w-[90%] md:max-w-[60%] lg:max-w-[35%]"
    />
    <p class="text-2xl">You should not stay here!</p>
    <Button @click="goBack">Go To Home</Button>
  </div>
</template>

<script setup lang="ts">
defineProps(['error']);

const goBack = async () => {
  await navigateTo('/', { replace: true });
};
</script>
