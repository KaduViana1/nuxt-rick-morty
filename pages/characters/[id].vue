<template>
  <div class="text-5xl text-yellow-200">{{ param }}</div>
</template>

<script setup lang="ts">
const param = ref(useRoute().params.id);
</script>

<style scoped></style>
