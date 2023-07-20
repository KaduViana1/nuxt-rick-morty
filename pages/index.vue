<template>
  <div
    class="border-4 w-3/5 mx-auto mb-14 border-white rounded-3xl overflow-hidden"
  >
    <n-carousel autoplay draggable keyboard show dot-type="line">
      <CarouselCard
        v-for="card in carrouselCards"
        :key="card"
        :id="card.toString()"
      />
      <!-- <img class="w-full h-auto" src="/episodes_images/episode-1.webp" />
      <img class="w-full h-auto" src="/episodes_images/episode-2.webp" />
      <img class="w-full h-auto" src="/episodes_images/episode-3.webp" />
      <img class="w-full h-auto" src="/episodes_images/episode-4.webp" /> -->
    </n-carousel>
  </div>
  <div class="flex w-4/5 mx-auto justify-center">
    <div class="grid grid-cols-4 gap-y-10 gap-x-8">
      <KeepAlive>
        <CharacterCard v-for="id in cards" :key="id" :id="id.toString()" />
      </KeepAlive>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Rick and Morty',
});

const cards = ref<number[] | undefined>([]);
const carrouselCards = ref<number[]>([]);

const getRandomCards = (
  numberOfCards: number,
  maxNumber: number,
  storageKey: string
) => {
  let cardsArray: number[] = [];
  for (let index = 0; index < numberOfCards; index++) {
    let random = Math.floor(Math.random() * maxNumber);
    cardsArray.push(random);
  }

  sessionStorage.setItem(storageKey, cardsArray.toString());
  return cardsArray;
};

onMounted(() => {
  const sessionsCards =
    sessionStorage
      .getItem('cards')
      ?.split(',')
      .map(n => parseInt(n)) ?? getRandomCards(8, 800, 'cards');

  const sessionCarouselCards =
    sessionStorage
      .getItem('carouselCards')
      ?.split(',')
      .map(n => parseInt(n)) ?? getRandomCards(5, 50, 'carouselCards');

  cards.value = sessionsCards;
  carrouselCards.value = sessionCarouselCards;
});
</script>

<style scoped></style>
