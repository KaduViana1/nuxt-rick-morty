<template>
  <div
    class="mx-auto mt-20 md:mt-0 border-2 border-white rounded-lg bg-primary flex flex-col p-4 items-center w-11/12 max-w-[850px]"
  >
    <span class="text-3xl font-bold">Title:</span>
    <h1 class="text-3xl">{{ episode?.name }}</h1>
    <img
      class="w-full my-4"
      :src="`/episodes_images/episode-${id}.webp`"
      :alt="episode?.name"
    />
    <div class="flex w-full justify-between mb-6">
      <p class="text-xl"><b>Air Date:</b> {{ episode?.air_date }}</p>
      <p class="text-xl"><b>Episode:</b> {{ episode?.episode }}</p>
    </div>
    <div class="mb-6 text-2xl">
      <b> Synopsis: </b>
      <p class="text-xl">
        {{ episodes[imageIndex].synopsis }}
      </p>
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
      <n-collapse-item title="Characters" name="1">
        <div
          class="grid grid-cols-3 gap-x-2 md:grid-cols-4 lg:grid-cols-6 gap-y-3"
        >
          <NuxtLink
            v-for="character in episode?.characters"
            :key="character"
            :to="`/characters/${character?.slice(42)}`"
          >
            <CharacterIcon :url="character" />
          </NuxtLink>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
  <CommentSection :id="id" />
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui';
import { episodes } from '../../assets/episodes.json';
import { EpisodeTypes } from 'types';

const { id } = useRoute().params;
const showEpisodes = ref(false);
const { data: episode } = await useFetch<EpisodeTypes>(
  `https://rickandmortyapi.com/api/episode/${id}`,
  {
    key: id.toString(),
  }
);

if (!episode.value) {
  throw createError({ statusCode: 404, statusMessage: 'Episode not found!' });
}

useHead({
  title: `Rick and Morty - ${episode?.value?.episode}`,
});

const imageIndex = computed(() => {
  if (episode.value?.id) {
    return episode.value?.id - 1;
  } else {
    return 0;
  }
});

const toggleShowEpisodes = () => {
  showEpisodes.value = !showEpisodes.value;
};
</script>
