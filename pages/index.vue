<template>
  <div
    class="border-4 w-11/12 h-auto mx-auto mb-14 border-white rounded-3xl overflow-hidden lg:max-w-[1200px] lg:h-[640px]"
  >
    <n-carousel autoplay draggable keyboard show dot-type="line">
      <CarouselCard
        v-for="card in carrouselCards"
        :key="card"
        :id="card.toString()"
      />
    </n-carousel>
  </div>
  <div class="flex w-11/12 mx-auto justify-center">
    <div
      class="grid grid-cols-2 gap-y-2 gap-x-2 md:gap-y-10 md:gap-x-8 lg:grid-cols-4"
    >
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

const cards = ref<number[]>([]);
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
