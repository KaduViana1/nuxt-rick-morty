<template>
  <div
    class="border-4 w-3/5 mx-auto mb-14 border-white rounded-3xl overflow-hidden"
  >
    <n-carousel autoplay draggable keyboard show dot-type="line">
      <img
        class="w-full h-auto"
        src="../assets/episodes_images/episode-1.webp"
      />
      <img
        class="w-full h-auto"
        src="../assets/episodes_images/episode-2.webp"
      />
      <img
        class="w-full h-auto"
        src="../assets/episodes_images/episode-3.webp"
      />
      <img
        class="w-full h-auto"
        src="../assets/episodes_images/episode-4.webp"
      />
    </n-carousel>
  </div>
  <div class="flex w-4/5 mx-auto justify-center">
    <div class="grid grid-cols-4 gap-y-10 gap-x-8">
      <KeepAlive>
        <CharacterCard v-for="id in cards" :id="id.toString()" />
      </KeepAlive>
    </div>
  </div>
</template>

<script setup lang="ts">
import { episodes } from '../assets/episodes.json';

useHead({
  title: 'Rick and Morty',
});

let cards = ref<number[] | undefined>([]);

onMounted(() => {
  const sessionsCards =
    sessionStorage
      .getItem('cards')
      ?.split(',')
      .map(n => parseInt(n)) ?? getRandomCards();

  cards.value = sessionsCards;
});

function getRandomCards() {
  let cardsArray: number[] = [];
  for (let index = 0; index < 8; index++) {
    let random = Math.floor(Math.random() * 800);
    cardsArray.push(random);
  }

  sessionStorage.setItem('cards', cardsArray.toString());
  return cardsArray;
}
</script>

<style scoped></style>
