<template>
  <div class="flex space-y-6 flex-col items-center">
    <div
      class="mx-auto p-2 flex flex-col bg-primary rounded-lg border-2 border-white max-w-[302px] md:max-w-full md:min-w-[775px]"
    >
      <div class="flex flex-col md:flex-row mb-6 md:space-x-2">
        <img class="h-64" :src="character?.image" :alt="character?.name" />
        <div class="flex space-y-1 flex-col">
          <p class="text-3xl mb-2">
            <b class="text-4xl">Name:</b> {{ character?.name }}
          </p>
          <p class="text-lg">
            <b class="text-xl">Status:</b> {{ character?.status }}
          </p>
          <p class="text-lg">
            <b class="text-xl">Species:</b> {{ character?.species }}
          </p>
          <p v-if="character?.type !== ''" class="text-lg">
            <b class="text-xl">Type:</b> {{ character?.type }}
          </p>
          <p class="text-lg">
            <b class="text-xl">Gender:</b> {{ character?.gender }}
          </p>
          <p class="text-lg">
            <b class="text-xl">Origin:</b>
            {{ character?.origin.name }}
          </p>
          <p class="text-lg">
            <b class="text-xl">Last seen:</b>
            {{ character?.location.name }}
          </p>
        </div>
      </div>
      <n-collapse
        :theme-overrides="{ common: { fontSize: '2rem' } }"
        :theme="darkTheme"
        display-directive="show"
        arrow-placement="right"
        @item-header-click="toggleShowEpisodes"
      >
        <template #arrow>
          <div :class="showEpisodes ? 'ml-2' : 'mt-3'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              class="h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </template>
        <n-collapse-item title="Episodes" name="1">
          <div class="grid grid-cols-1 md:grid-cols-2 space-y-1">
            <NuxtLink
              class="text-lg line-clamp-1 underline"
              v-for="episode in character?.episode"
              :key="episode"
              :to="`/episodes/${episode.slice(40)}`"
              >{{ episodes[parseFloat(episode.slice(40))]?.name }}
            </NuxtLink>
          </div>
        </n-collapse-item>
      </n-collapse>
    </div>
    <p class="text-4xl font-bold">Other characters</p>
    <div class="flex mx-auto justify-center">
      <div
        class="grid grid-cols-2 px-2 gap-x-2 gap-y-3 md:grid-cols-4 md:gap-x-5"
      >
        <CharacterCard :key="id" v-for="id in cards" :id="id.toString()" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui';
import { episodes } from '../../assets/episodes.json';
import { CharacterTypes } from 'types';

const id = useRoute().params.id;
const url = `https://rickandmortyapi.com/api/character/${id}`;
const showEpisodes = ref(false);
const cards = ref<number[] | undefined>(getRandomCards());
const { data: character } = await useFetch<CharacterTypes>(url, {
  key: id.toString(),
});

useHead({
  title: `Rick and Morty - ${character?.value?.name}`,
});

function getRandomCards() {
  let cardsArray: number[] = [];
  for (let index = 0; index < 4; index++) {
    let random = Math.floor(Math.random() * 800);
    cardsArray.push(random);
  }

  return cardsArray;
}

const toggleShowEpisodes = () => {
  showEpisodes.value = !showEpisodes.value;
};
</script>

<style></style>
