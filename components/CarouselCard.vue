<template>
  <div
    @click="() => router.push(`/episodes/${id}`)"
    class="relative cursor-pointer w-full h-full"
  >
    <img class="w-full h-full" :src="`/episodes_images/episode-${id}.webp`" />
    <span
      class="absolute bottom-12 left-2 md:bottom-20 md:left-5 bg-black/50 py-1 px-2 text-lg md:text-4xl rounded-md"
      >{{ episode?.episode }}:</span
    >
    <span
      class="absolute bottom-4 left-2 md:bottom-6 md:left-5 bg-black/50 py-1 px-2 text-md md:text-3xl rounded-md"
      >{{ episode?.name }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { EpisodeTypes } from 'types';
const { id } = defineProps(['id']);
const router = useRouter();

const { data: episode } = await useFetch<EpisodeTypes>(
  `https://rickandmortyapi.com/api/episode/${id}`,
  {
    key: id.toString(),
  }
);
</script>
