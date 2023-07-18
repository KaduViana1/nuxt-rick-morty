<template>
  <div
    class="w-[500px] h-[280px] rounded-2xl overflow-hidden border-2 border-white"
  >
    <a :href="wallpapper.pinterestURL" target="_blank">
      <img
        class="w-[500px] h-[280px]"
        :src="wallpapper.imageURL"
        :alt="wallpapper.id"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
const { wallpapper } = defineProps(['wallpapper']);
</script>

<style scoped></style>
