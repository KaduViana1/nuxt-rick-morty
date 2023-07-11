<template>
  <div class="text-2xl text-white">{{ userName }}</div>
  <div class="text-2xl text-white">{{ userId }}</div>
</template>

<script setup lang="ts">
const userName = useUserName();
const userId = useUserId();
</script>

<style scoped></style>
