<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-5 gap-y-10 gap-x-8">
      <KeepAlive>
        <CharacterCard v-for="id in cards" :id="id.toString()" />
      </KeepAlive>
    </div>
  </div>
</template>

<script setup lang="ts">
import { episodes } from '../public/episodes.json';

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
  for (let index = 0; index < 10; index++) {
    let random = Math.floor(Math.random() * 800);
    cardsArray.push(random);
  }

  sessionStorage.setItem('cards', cardsArray.toString());
  return cardsArray;
}
</script>

<style scoped></style>
