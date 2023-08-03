<template>
  <div
    class="w-[250px] h-[500px] rounded-2xl overflow-hidden border-2 border-white"
  >
    <a :href="wallpapper.pinterestURL" target="_blank">
      <img
        class="w-[250px] h-[500px]"
        :src="wallpapper.imageURL"
        :alt="wallpapper.id"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
const { wallpapper } = defineProps(['wallpapper']);
</script>
