<template>
  <div
    @click="router.push(`/episodes/${id}`)"
    class="w-3/6 cursor-pointer overflow-hidden border-2 border-white mx-auto h-48 bg-primary rounded-lg flex"
  >
    <div class="imgContainer">
      <img
        class="h-full w-full"
        :src="`/episodes_images/episode-${id}.webp`"
        alt="episode image"
      />
    </div>
    <div class="flex flex-col pl-3 py-3">
      <p class="text-2xl font-bold">{{ data?.name }}</p>
      <p class="text-xl font-bold">{{ data?.episode }}</p>
      <p class="text-lg mt-5">{{ description[0].synopsis }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
type DataTypes = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};
import { episodes } from '../assets/episodes.json';

const { id } = defineProps(['id']);
const url = `https://rickandmortyapi.com/api/episode/${id}`;
const { data } = await useFetch<DataTypes>(url, { key: id });
const router = useRouter();
const description = episodes.filter(ep => ep.id == id);
</script>

<style scoped>
.imgContainer {
  height: 100%;
  width: 331px;
  min-width: 331px;
}
</style>
