<template>
  <div>
    <img class="w-full h-auto" :src="`/episodes_images/episode-${id}.webp`" />
  </div>
</template>

<script setup lang="ts">
const { id } = defineProps(['id']);
</script>

<style scoped></style>
