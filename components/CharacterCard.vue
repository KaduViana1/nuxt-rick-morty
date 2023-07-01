<template>
  <div
    @click="() => router.push(`/characters/${id}`)"
    class="border-2 w-fit flex flex-col border-white rounded-lg cursor-pointer"
  >
    <img
      class="h-64 max-h-64 rounded-t-lg"
      :src="data?.image"
      :alt="data?.name"
    />
    <div
      class="flex p-2 h-full space-y-1 text-xl rounded-b-lg flex-col text-white bg-primary"
    >
      <div>
        <b>Name:</b>
        <p class="text-base">{{ data?.name }}</p>
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
type DataTypes = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

const { id } = defineProps(['id']);
const url = `https://rickandmortyapi.com/api/character/${id}`;
const { data } = await useFetch<DataTypes>(url, { key: id });
const router = useRouter();
</script>
