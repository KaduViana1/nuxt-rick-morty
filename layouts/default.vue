<template>
  <div class="text-white">
    <Teleport to="body">
      <UserModal @closeModal="modalIsOpen = false" v-show="modalIsOpen" />
    </Teleport>
    <Header @open-modal="modalIsOpen = true" />
    <div class="py-8 bg-[url(/assets/background.jpg)] pageContainer">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const modalIsOpen = ref(false);
</script>

<style scoped>
.pageContainer {
  min-height: calc(100vh - 168px);
}
</style>
