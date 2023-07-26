<template>
  <div
    class="flex flex-col text-center text-base lg:text-lg items-center space-y-2"
  >
    <img
      class="w-28 md:w-32 rounded-full"
      :src="character?.image"
      :alt="character?.name"
      :title="character?.name"
    />
    <span class="line-clamp-2">{{ character?.name }}</span>
  </div>
</template>

<script setup lang="ts">
import { CharacterTypes } from 'types';

const { url } = defineProps(['url']);
const { data: character } = await useFetch<CharacterTypes>(url, { key: url });
</script>
