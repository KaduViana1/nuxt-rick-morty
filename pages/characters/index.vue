<template>
  <div class="w-4/5 flex flex-col mx-auto items-center">
    <form @submit.prevent="searchCharacter" class="w-2/3">
      <input
        class="text-xl w-full p-2 border-2 border-white bg-primary text-white rounded-md mb-10"
        type="text"
        placeholder="Search Character"
        v-model="searchInput"
      />
    </form>
    <div class="flex w-4/5 mx-auto justify-center">
      <div v-if="charactersList" class="grid grid-cols-4 gap-y-10 gap-x-8">
        <CharacterCard
          v-for="result in charactersList.results"
          :id="result.id.toString()"
          :key="result.id"
        />
      </div>
    </div>
    <div class="flex mt-5 space-x-4">
      <button
        @click="changePage(charactersList?.info.prev)"
        v-show="charactersList?.info.prev !== null"
        class="px-2 py-1 bg-white"
      >
        Prev
      </button>
      <button
        @click="changePage(charactersList?.info.next)"
        :disabled="charactersList?.info.next === null"
        class="px-2 py-1 bg-white"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
type DataTypes = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: [any];
};

const baseUrl = 'https://rickandmortyapi.com/api/character?';
const currentPage = ref(baseUrl);
const searchInput = ref<string>('');
const charactersList = ref();
const { query } = useRoute();

const getCharacters = async (url: string) => {
  const { data } = await useFetch<DataTypes>(() => url, {
    key: currentPage.value,
  });
  charactersList.value = toRaw(data.value);
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
  if (searchInput.value.length > 2) {
    getCharacters(
      `https://rickandmortyapi.com/api/character/?name=${searchInput.value.toLowerCase()}`
    );
  }
};

firstFetch();
</script>
