<template>
  <div
    @click="() => router.push(`/characters/${id}`)"
    class="border-2 w-fit flex flex-col border-white rounded-lg cursor-pointer"
  >
    <img
      class="h-52 md:h-64 max-h-64 rounded-t-lg aspect-square"
      :src="data?.image"
      :alt="data?.name"
    />
    <div
      class="flex p-2 space-y-1 text-xl rounded-b-lg flex-col text-white bg-primary card"
    >
      <div>
        <b>Name:</b>
        <p class="text-base line-clamp-1">{{ data?.name }}</p>
      </div>
      <div>
        <b>Status:</b>
        <p class="text-base">{{ data?.status }}</p>
      </div>
      <div>
        <b>Species:</b>
        <p class="text-base">{{ data?.species }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CharacterTypes } from 'types';

const { id } = defineProps(['id']);
const url = `https://rickandmortyapi.com/api/character/${id}`;
const { data } = await useFetch<CharacterTypes>(url, { key: id });
const router = useRouter();
</script>

<style scoped>
.card {
  max-width: 256px;
}
</style>
