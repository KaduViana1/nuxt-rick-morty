<template>
  <div class="flex flex-col items-center">
    <h1 class="text-5xl font-bold mb-10">Rick and Morty Episodes</h1>
    <div
      :class="currentPage === baseUrl ? 'flex-col' : 'flex-col-reverse'"
      class="flex w-full gap-10"
      v-if="episodesList"
    >
      <EpisodeCard
        v-for="episode in episodesList.results"
        :id="episode.id.toString()"
        :key="episode.id"
      />
    </div>
    <div class="flex mt-5 space-x-4">
      <Button
        @click="changePage(episodesList?.info.prev)"
        v-show="episodesList?.info.prev"
        >Prev</Button
      >
      <Button
        @click="changePage(episodesList?.info.next)"
        v-show="episodesList?.info.next"
        >Next</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
type DataTypes = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: [
    {
      id: number;
      name: string;
      air_date: string;
      episode: string;
      characters: string[];
      url: string;
      created: string;
    }
  ];
};

const baseUrl = 'https://rickandmortyapi.com/api/episode/';
const currentPage = ref(baseUrl);
const episodesList = ref();

const getEpisodes = async (url: string) => {
  const { data } = await useFetch<DataTypes>(url, {
    key: currentPage.value,
  });
  episodesList.value = data.value;
};

const changePage = (url: string) => {
  currentPage.value = url;
  getEpisodes(currentPage.value);
  console.log(currentPage.value);
};

getEpisodes(baseUrl);
</script>

<style scoped></style>
