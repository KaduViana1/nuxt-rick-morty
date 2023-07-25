<template>
  <div
    class="flex flex-col justify-center items-center w-full space-y-4 text-center"
  >
    <h1 class="text-4xl font-bold">Rick and Morty wallpappers</h1>
    <div class="space-x-4">
      <button
        :class="
          wallpappersOrientation === 'Mobile'
            ? 'text-lime-400 border-lime-400'
            : 'text-white border-white'
        "
        class="bg-primary px-4 py-2 text-xl rounded-full border-2"
        @click="() => (wallpappersOrientation = 'Mobile')"
      >
        Mobile
      </button>
      <button
        :class="
          wallpappersOrientation === 'Desktop'
            ? 'text-lime-400 border-lime-400'
            : 'text-white border-white'
        "
        class="bg-primary px-4 py-2 text-xl rounded-full border-white border-2"
        @click="() => (wallpappersOrientation = 'Desktop')"
      >
        Desktop
      </button>
    </div>
    <div
      v-if="wallpappersOrientation === 'Mobile'"
      class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
    >
      <WallpapperMobile
        v-for="wallpapper in mobile"
        :wallpapper="wallpapper"
        :key="wallpapper.id"
      />
    </div>
    <div
      v-if="wallpappersOrientation === 'Desktop'"
      class="grid grid-cols-1 lg:grid-cols-2 gap-10"
    >
      <WallpapperDesktop
        v-for="wallpapper in desktop"
        :wallpapper="wallpapper"
        :key="wallpapper.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Rick and Morty - Wallpapers',
});
import { mobile, desktop } from '../assets/wallpappers.json';
const wallpappersOrientation = ref<'Mobile' | 'Desktop'>('Mobile');
</script>

<style scoped></style>
