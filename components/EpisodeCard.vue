<template>
  <div
    @click="router.push(`/episodes/${id}`)"
    class="container cursor-pointer overflow-hidden border-2 max-w-[332px] border-white mx-auto bg-primary rounded-lg flex flex-col md:flex-row md:max-w-none w-5/6 md:w-11/12 lg:max-w-[1150px]"
  >
    <div class="h-full w-[330px] min-w-[330px]">
      <img
        class="h-full w-full"
        :src="`/episodes_images/episode-${id}.webp`"
        alt="episode image"
      />
    </div>
    <div class="flex flex-col p-3 items-center md:items-start md:text-left">
      <p class="text-2xl font-bold">{{ data?.name }}</p>
      <p class="text-xl font-bold">{{ data?.episode }}</p>
      <p class="text-lg mt-5 line-clamp-3">
        {{ description[0].synopsis }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EpisodeTypes } from 'types';
import { episodes } from '../assets/episodes.json';

const { id } = defineProps(['id']);
const url = `https://rickandmortyapi.com/api/episode/${id}`;
const { data } = await useFetch<EpisodeTypes>(url, { key: id });
const router = useRouter();
const description = episodes.filter(ep => ep.id == id);
</script>
