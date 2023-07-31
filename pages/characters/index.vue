<template>
  <div class="flex mt-20 md:mt-0 flex-col mx-auto items-center md:max-w-[90%]">
    <form
      @submit.prevent="searchCharacter"
      class="w-11/12 md:w-2/3 lg:w-full lg:max-w-[1100px]"
    >
      <label class="underline text-2xl md:pl-2" for="search"
        >Search Character</label
      >
      <div
        class="w-full relative flex items-center overflow-hidden border-white bg-primary rounded-md"
      >
        <input
          class="text-xl w-full outline-none p-2 border-2 border-white bg-primary rounded-md focus:border-lime-400"
          type="text"
          placeholder="Poopybutthole"
          id="search"
          v-model.lazy="searchInput"
        />
        <button
          class="absolute right-4 focus:text-lime-400 active:text-lime-400"
        >
          <Icon name="fa6-solid:magnifying-glass" size="20" />
        </button>
      </div>
    </form>
    <div
      v-if="charactersList"
      class="flex w-11/12 items-center mt-8 flex-col md:w-2/3 lg:w-full lg:max-w-[1100px]"
    >
      <div class="w-full mb-5 flex justify-between">
        <span class="text-xl md:text-3xl">Characters: {{ search }}</span>
        <span class="text-xl md:text-3xl"
          >Results: {{ charactersList?.info.count }}</span
        >
      </div>
      <div class="flex mx-auto justify-center">
        <div
          class="grid grid-cols-2 gap-y-5 gap-x-5 lg:grid-cols-4 lg:gap-y-10 lg:gap-x-8"
        >
          <CharacterCard
            v-for="result in charactersList.results"
            :id="result.id.toString()"
            :key="result.id"
          />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col space-y-5 pt-40 justify-center items-center"
      v-else
    >
      <p class="text-4xl">Sorry, no results found</p>
      <button
        @click="
          () => {
            searchInput = '';
            changePage(baseUrl);
          }
        "
        class="px-2 py-1 bg-primary text-xl border-2 rounded-md border-white"
      >
        Go back
      </button>
    </div>
    <div class="flex mt-5 space-x-4">
      <Button
        @click="changePage(charactersList?.info.prev)"
        v-show="charactersList?.info.prev"
        >Prev</Button
      >
      <Button
        @click="changePage(charactersList?.info.next)"
        v-show="charactersList?.info.next"
        >Next</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { CharactersPageTypes } from 'types';

useHead({
  title: 'Rick and Morty - Characters',
});

const baseUrl = 'https://rickandmortyapi.com/api/character?';
const currentPage = ref(baseUrl);
const searchInput = ref<string>('');
const charactersList = ref();
const { query } = useRoute();

const search = computed(() => {
  if (searchInput.value === '') {
    return 'All';
  } else {
    return (
      searchInput.value.charAt(0).toUpperCase() + searchInput.value.slice(1)
    );
  }
});

const getCharacters = async (url: string) => {
  const { data } = await useFetch<CharactersPageTypes>(() => url, {
    key: currentPage.value,
  });
  charactersList.value = data.value;
};

const changePage = (url: string) => {
  currentPage.value = url;
  getCharacters(currentPage.value);
};

const firstFetch = () => {
  if (query.name) {
    getCharacters(
      `https://rickandmortyapi.com/api/character/?name=${query.name}`
    );
    return;
  } else if (query.page) {
    getCharacters(
      `https://rickandmortyapi.com/api/character/?page=${query.page}`
    );
    return;
  } else {
    getCharacters(`https://rickandmortyapi.com/api/character`);
  }
};

const searchCharacter = () => {
  if (searchInput.value === '') {
    getCharacters(`https://rickandmortyapi.com/api/character`);
  } else if (searchInput.value.length > 2) {
    getCharacters(
      `https://rickandmortyapi.com/api/character/?name=${searchInput.value.toLowerCase()}`
    );
  }
};

firstFetch();
</script>
