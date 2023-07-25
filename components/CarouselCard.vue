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
const { id } = defineProps(['id']);
const router = useRouter();
type DataTypes = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

const { data: episode } = await useFetch<DataTypes>(
  `https://rickandmortyapi.com/api/episode/${id}`,
  {
    key: id.toString(),
  }
);
</script>

<style scoped></style>
