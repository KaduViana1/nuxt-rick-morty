<template>
  <div
    class="md:w-[500px] md:h-[280px] rounded-2xl overflow-hidden border-2 border-white"
  >
    <a :href="wallpapper.pinterestURL" target="_blank">
      <img
        class="w-[330px] h-[180px] md:w-[500px] md:h-[280px]"
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
